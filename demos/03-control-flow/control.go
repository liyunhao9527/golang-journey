package main

import "fmt"

func main() {
	// ── 1. if:无括号、花括号必须、可带初始化语句 ─────────────────
	x := 42
	if x > 10 {
		fmt.Println("1a. big")
	}

	// 带初始化语句:val 只在这个 if/else 块里可见
	if val := x * 2; val > 100 {
		fmt.Println("1b. huge:", val)
	} else {
		fmt.Println("1b. small:", val)
	}
	// fmt.Println(val) // 取消注释 → 编译错误:undefined: val

	// ── 2. for 三种形态 ──────────────────────────────────────────
	// 形态一:经典三段式
	for i := 0; i < 3; i++ {
		fmt.Println("2a.", i)
	}

	// 形态二:while 型(只留条件)
	n := 1
	for n < 100 {
		n *= 2
	}
	fmt.Println("2b. first power-of-2 >= 100:", n)

	// 形态三:无限循环 + break
	count := 0
	for {
		count++
		if count == 3 {
			break
		}
	}
	fmt.Println("2c. broke at:", count)

	// ── 3. range 遍历 ────────────────────────────────────────────
	names := []string{"a", "b", "c"}
	for i, name := range names {
		fmt.Println("3a.", i, name)
	}
	for _, name := range names { // _ 显式丢弃索引
		fmt.Println("3b.", name)
	}

	// range 字符串:按 rune 走,索引按字节推进
	for i, c := range "go语言" {
		fmt.Printf("3c. byte-index %d: %c\n", i, c)
	}

	// ── 4. switch:默认不贯穿 ────────────────────────────────────
	day := "sun"
	switch day {
	case "sat", "sun": // 多值共用一个 case
		fmt.Println("4a. 周末")
	default:
		fmt.Println("4a. 工作日")
	}

	// 无条件 switch:当整齐的 if-else 链用(注意 switch 后的分号)
	score := 87
	var grade string
	switch {
	case score >= 90:
		grade = "A"
	case score >= 80:
		grade = "B"
	default:
		grade = "C"
	}
	fmt.Println("4b. grade:", grade)
}
