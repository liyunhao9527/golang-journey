package main

import "fmt"

func main() {
	score := 10
	copied := score
	p := &score
	*p = 20
	fmt.Println(score, copied, *p)
	fmt.Printf("%T\n", p)
}
