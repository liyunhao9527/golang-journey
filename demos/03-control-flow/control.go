package main

import "fmt"

func main() {
	demoIfBasic()
	demoIfConditions()
	demoIfInit()
	demoForClassic()
	demoForWhile()
	demoForInfinite()
	demoRangeIndex()
	demoRangeValue()
	demoRangeString()
	demoSwitchValue()
	demoSwitchConditionLess()
}

func demoIfBasic() {
	fmt.Println("---------demoIfBasic---------")
	x := 42
	if x > 10 {
		fmt.Println("1a. big")
	}
}

func demoIfConditions() {
	age := 20
	hasTicket := true
	isMember := false
	isBanned := false

	if age >= 18 && hasTicket {
		fmt.Println("成年且有票")
	}
	if hasTicket || isMember {
		fmt.Println("有票或是会员")
	}
	if (hasTicket || isMember) && !isBanned {
		fmt.Println("可以入场")
	}

	divisor := 0
	if divisor != 0 && 10/divisor > 1 {
		fmt.Println("商大于 1")
	} else {
		fmt.Println("除数为 0 或商不大于 1")
	}
}

func demoIfInit() {
	fmt.Println("---------demoIfInit---------")
	x := 42
	if val := x * 2; val > 100 {
		fmt.Println("1b. huge:", val)
	} else {
		fmt.Println("1b. small:", val)
	}
}

func demoForClassic() {
	fmt.Println("---------demoForClassic---------")
	for i := 0; i < 3; i++ {
		fmt.Println("2a.", i)
	}
}

func demoForWhile() {
	fmt.Println("---------demoForWhile---------")
	n := 1
	for n < 100 {
		n *= 2
	}
	fmt.Println("2b. first power-of-2 >= 100:", n)
}

func demoForInfinite() {
	fmt.Println("---------demoForInfinite---------")
	count := 0
	for {
		count++
		if count == 3 {
			break
		}
	}
	fmt.Println("2c. broke at:", count)
}

func demoRangeIndex() {
	fmt.Println("---------demoRangeIndex---------")
	names := []string{"a", "b", "c"}
	for i, name := range names {
		fmt.Println("3a.", i, name)
	}
}

func demoRangeValue() {
	fmt.Println("---------demoRangeValue---------")
	names := []string{"a", "b", "c"}
	for _, name := range names {
		fmt.Println("3b.", name)
	}
}

func demoRangeString() {
	fmt.Println("---------demoRangeString---------")
	// range 字符串:按 rune 走,索引按字节推进
	for i, c := range "go语言 🚀" {
		fmt.Printf("3c. byte-index %d: %c %U %d\n", i, c, c, c)
	}
}

func demoSwitchValue() {
	fmt.Println("---------demoSwitchValue---------")
	day := "sun"
	switch day {
	case "sat", "sun":
		fmt.Println("4a. 周末")
	default:
		fmt.Println("4a. 工作日")
	}
}

func demoSwitchConditionLess() {
	fmt.Println("---------demoSwitchConditionLess---------")
	// 无条件 switch:当整齐的 if-else 链用
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
