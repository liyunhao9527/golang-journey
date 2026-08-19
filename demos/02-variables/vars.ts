// TS 对照:声明与"零值"
const version = "1.0"; // 顶层常量

// 三种声明方式(TS 里只有 const / let,没有独立的关键字区别)
const explicit: string = "显式类型"; // 显式标注类型
const inferred = "类型推断"; // 类型推断
let short = "短声明"; // 可变变量

console.log(explicit, inferred, short);

// TS 没有"零值":声明但不初始化,得到 undefined
let s: string;
let n: number;
let f: number;
let ok: boolean;

// 严格模式下这行会报 "used before assigned",运行时得到 undefined
console.log(s, n, f, ok); // undefined undefined undefined undefined

// typeof 相当于 Go 的 %T
console.log(typeof short, typeof n); // string number
