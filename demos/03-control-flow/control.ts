// 与 control.go 逐段对照

// 1. if
const x = 42;
if (x > 10) {
  console.log("1a. big");
}
const val = x * 2; // Go 里 val 可以收进 if 语句内,TS 只能放外面
if (val > 100) {
  console.log("1b. huge:", val);
} else {
  console.log("1b. small:", val);
}

// 2. 循环
for (let i = 0; i < 3; i++) {
  console.log("2a.", i);
}
let n = 1;
while (n < 100) {
  n *= 2;
}
console.log("2b. first power-of-2 >= 100:", n);
let count = 0;
while (true) {
  count++;
  if (count === 3) break;
}
console.log("2c. broke at:", count);

// 3. 遍历
const names = ["a", "b", "c"];
names.forEach((name, i) => console.log("3a.", i, name));
for (const name of names) {
  console.log("3b.", name);
}
// 对照:Go range 与 JS for...of 都按 Unicode 码点迭代;
// Go 还会给出 UTF-8 字节索引,for...of 不会。
for (const c of "go语言 🚀") {
  console.log("3c.", c);
}

// 4. switch:不写 break 会贯穿 —— Go 正好相反
const day: string = "sun";
switch (day) {
  case "sat":
  case "sun":
    console.log("4a. 周末");
    break;
  default:
    console.log("4a. 工作日");
}

const score = 87;
let grade: string;
// TS 没有 Go 那种无条件 switch,只能 if-else 链
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}
console.log("4b. grade:", grade);
