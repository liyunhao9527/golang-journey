// TS 对照:声明与"零值"
const version = "1.0"; // 顶层常量

// 三种声明方式(TS 里只有 const / let,没有独立的关键字区别)
const explicit: string = "显式类型"; // 显式标注类型
const inferred = "类型推断"; // 类型推断
let short = "短声明"; // 可变变量

console.log(explicit, inferred, short);

// TS 严格模式不允许读取“声明但未赋值”的变量。
// 显式把 undefined 纳入类型并赋值,既能通过检查,也能观察运行时结果。
let s: string | undefined = undefined;
let n: number | undefined = undefined;
let f: number | undefined = undefined;
let ok: boolean | undefined = undefined;

console.log(s, n, f, ok); // undefined undefined undefined undefined

// typeof 相当于 Go 的 %T
console.log(typeof short, typeof n); // string undefined

// 用 Unicode 码点对照 Go 的 rune
const r = "a".codePointAt(0)!;
console.log("'a' 的码点是", r);

// JS/TS 只有 number;Number 是显式转换,Math.trunc 表达截断意图
const wholeNumber = 3;
const decimal = Number(wholeNumber);
const price = 19.9;
const wholePrice = Math.trunc(price);
console.log(wholeNumber, typeof wholeNumber, decimal, typeof decimal);
console.log(price, "->", wholePrice);
