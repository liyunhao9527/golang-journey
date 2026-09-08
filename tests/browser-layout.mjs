const cdpPort = process.env.COURSE_CDP_PORT ?? "9227";
const courseOrigin = process.env.COURSE_ORIGIN ?? "http://127.0.0.1:4173";
const tabs = await fetch(`http://127.0.0.1:${cdpPort}/json/list`).then((response) => response.json());
const page = tabs.find((entry) => entry.type === "page");

if (!page) {
  throw new Error(`No Chrome page target found on CDP port ${cdpPort}.`);
}

const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let nextId = 0;
const pending = new Map();
const browserErrors = [];
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.method === "Runtime.exceptionThrown") {
    browserErrors.push(message.params.exceptionDetails.text);
  }
  if (
    message.method === "Log.entryAdded" &&
    ["warning", "error"].includes(message.params.entry.level)
  ) {
    browserErrors.push(message.params.entry.text);
  }
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(JSON.stringify(message.error)));
  else resolve(message.result);
});

function send(method, params = {}) {
  const id = ++nextId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function waitUntilReady() {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const result = await send("Runtime.evaluate", {
      expression: "document.readyState",
      returnByValue: true,
    });
    if (result.result.value === "complete") return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error("Page did not reach readyState=complete.");
}

await send("Page.enable");
await send("Runtime.enable");
await send("Log.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-reduced-motion", value: "reduce" }],
});

const pages = [
  { name: "index", path: "/index.html" },
  { name: "lesson4", path: "/lessons/0004-arrays-and-slices.html" },
  { name: "reference4", path: "/reference/0004-arrays-slices.html" },
];
const widths = [375, 768, 1024, 1440];
const failures = [];

for (const width of widths) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height: width === 375 ? 812 : 900,
    deviceScaleFactor: 1,
    mobile: false,
  });

  for (const item of pages) {
    await send("Page.navigate", { url: `${courseOrigin}${item.path}` });
    await waitUntilReady();

    const result = await send("Runtime.evaluate", {
      expression: `JSON.stringify((() => {
        const goal = document.querySelector('.compiler-goal');
        const goalText = goal?.querySelector('span');
        const navTargets = [...document.querySelectorAll('.course-nav__links a')]
          .map((element) => element.getBoundingClientRect());
        return {
          title: document.title,
          viewportWidth: innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          highlighted: document.querySelectorAll('code.hljs').length,
          codeBlocks: document.querySelectorAll('pre code').length,
          goalClientWidth: goalText?.clientWidth ?? null,
          goalScrollWidth: goalText?.scrollWidth ?? null,
          navTargetsAtLeast44: navTargets.every((rect) => rect.width >= 44 && rect.height >= 44),
        };
      })())`,
      returnByValue: true,
    });
    const metrics = JSON.parse(result.result.value);
    console.log(`${width}px ${item.name}: ${JSON.stringify(metrics)}`);

    if (metrics.documentWidth > metrics.viewportWidth || metrics.bodyWidth > metrics.viewportWidth) {
      failures.push(`${width}px ${item.name}: page-level horizontal overflow`);
    }
    if (metrics.goalScrollWidth !== null && metrics.goalScrollWidth > metrics.goalClientWidth) {
      failures.push(`${width}px ${item.name}: goal text is horizontally clipped`);
    }
    if (metrics.highlighted !== metrics.codeBlocks) {
      failures.push(`${width}px ${item.name}: not every code block is highlighted`);
    }
    if (width === 375 && !metrics.navTargetsAtLeast44) {
      failures.push(`${width}px ${item.name}: navigation target is smaller than 44px`);
    }
  }
}

await send("Emulation.setDeviceMetricsOverride", {
  width: 375,
  height: 812,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url: `${courseOrigin}/lessons/0004-arrays-and-slices.html#quiz` });
await waitUntilReady();
const quizResult = await send("Runtime.evaluate", {
  expression: `JSON.stringify((() => {
    const quiz = document.querySelector('.quiz');
    const options = [...quiz.querySelectorAll('.quiz-opt')];
    const feedback = quiz.querySelector('.quiz-feedback');
    options[1].click();
    const afterWrong = {
      wrongDisabled: options[1].disabled,
      correctStillEnabled: !options[0].disabled,
      feedback: feedback.textContent,
      live: feedback.getAttribute('aria-live'),
    };
    options[0].click();
    return {
      afterWrong,
      afterCorrect: {
        allDisabled: options.every((option) => option.disabled),
        correctClass: options[0].classList.contains('is-correct'),
        feedback: feedback.textContent,
      },
    };
  })())`,
  returnByValue: true,
});
const quiz = JSON.parse(quizResult.result.value);
console.log(`375px lesson4 quiz: ${JSON.stringify(quiz)}`);
if (
  !quiz.afterWrong.wrongDisabled ||
  !quiz.afterWrong.correctStillEnabled ||
  !quiz.afterWrong.feedback.includes("不对") ||
  quiz.afterWrong.live !== "polite" ||
  !quiz.afterCorrect.allDisabled ||
  !quiz.afterCorrect.correctClass ||
  !quiz.afterCorrect.feedback.includes("正确")
) {
  failures.push("375px lesson4: quiz wrong-then-correct feedback cycle failed");
}
if (browserErrors.length > 0) {
  failures.push(`browser console errors: ${browserErrors.join(" | ")}`);
}

await send("Emulation.clearDeviceMetricsOverride");
socket.close();

if (failures.length > 0) {
  failures.forEach((failure) => console.error(`FAIL: ${failure}`));
  process.exit(1);
}

console.log("Representative browser layouts passed at 375, 768, 1024, and 1440px.");
