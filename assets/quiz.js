// Golang Journey — 可复用交互测验组件
// 用法:
//   <div class="quiz" data-explain="正确时的解释文案">
//     <p class="quiz-q">问题</p>
//     <div class="quiz-options">
//       <button class="quiz-opt" data-correct>选项 A</button>
//       <button class="quiz-opt">选项 B</button>
//       <button class="quiz-opt">选项 C</button>
//       <button class="quiz-opt">选项 D</button>
//     </div>
//     <p class="quiz-feedback" aria-live="polite"></p>
//   </div>
// 行为:答错标红并禁用该选项(可继续尝试),答对标绿、禁用全部并显示解释。
// 引用方式:<script src="../assets/quiz.js" defer></script>
(function () {
  function setFeedback(feedback, iconName, message) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    svg.setAttribute("class", "ip-icon");
    svg.setAttribute("aria-hidden", "true");
    use.setAttribute("href", "../assets/icons/icon-park.svg#" + iconName);
    svg.appendChild(use);
    feedback.replaceChildren(svg, document.createTextNode(message));
  }

  document.querySelectorAll(".quiz").forEach(function (box) {
    if (!box.classList.contains("quiz")) return;
    var explain = box.getAttribute("data-explain") || "";
    var feedback = box.querySelector(".quiz-feedback");
    var options = box.querySelectorAll(".quiz-opt");
    var done = false;

    options.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (done) return;
        if (btn.hasAttribute("data-correct")) {
          done = true;
          btn.classList.add("is-correct");
          options.forEach(function (b) { b.disabled = true; });
          setFeedback(feedback, "ip-check-one", "\u6b63\u786e!" + (explain ? " " + explain : ""));
          feedback.className = "quiz-feedback is-good";
        } else {
          btn.classList.add("is-wrong");
          btn.disabled = true;
          setFeedback(feedback, "ip-close-one", "\u4e0d\u5bf9,\u518d\u60f3\u60f3(\u5df2\u6392\u9664\u4e00\u4e2a\u9519\u8bef\u9009\u9879)");
          feedback.className = "quiz-feedback is-bad";
        }
      });
    });
  });
})();
