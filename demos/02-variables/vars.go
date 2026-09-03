package main

import (
	"fmt"
)

// 包级声明:只能用 var / const,不能用 :=
const version = "1.0" // 未使用的包级常量不报错

func main() {
	// 三种声明方式
	var explicit string = "显式类型" // 显式标注类型
	var inferred = "类型推断"        // 省略类型,由编译器推断
	short := "短声明"               // 短声明:函数内最常用

	fmt.Println(explicit, inferred, short)

	// 零值:声明但不初始化,自动得到类型的"零值"
	var s string
	var n int
	var f float64
	var ok bool

	fmt.Printf("string  零值: %q\n", s)  // ""
	fmt.Printf("int     零值: %d\n", n)  // 0
	fmt.Printf("float64 零值: %f\n", f)  // 0.000000
	fmt.Printf("bool    零值: %t\n", ok) // false

	// %T 打印变量的类型
	fmt.Printf("short 的类型是 %T\n", short)
	fmt.Printf("n     的类型是 %T\n", n)

	// unused := 1

	// rune:'a' 是 Unicode 码点(int32 的别名),不是字符串
	var r rune = 'a'
	fmt.Printf("'a' 的类型是 %T,值是 %d\n", r, r)

	// 数值类型转换会产生新值;float64 转 int 时直接截断小数部分
	var wholeNumber int = 3
	decimal := float64(wholeNumber)
	price := 19.9
	wholePrice := int(price)
	fmt.Printf("%v (%T), %v (%T)\n", wholeNumber, wholeNumber, decimal, decimal)
	fmt.Printf("%v -> %v\n", price, wholePrice)
}
