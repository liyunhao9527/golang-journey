package main

import "fmt"

func main() {
	scores := map[string]int{"Go": 0}
	scores["TS"] = 2
	scores["TS"]++
	fmt.Println(scores["Go"], scores["Rust"], len(scores))
	value, ok := scores["Go"]
	fmt.Println(value, ok)
	value, ok = scores["Rust"]
	fmt.Println(value, ok)
	delete(scores, "TS")
	fmt.Println(len(scores))
}
