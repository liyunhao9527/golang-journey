package main

import "fmt"

func main() {
	demoArrayCopy()
	demoSliceView()
	demoNilSlice()
	demoAppendCapacity()
	demoIndependentCopy()
}

func demoArrayCopy() {
	fmt.Println("---------demoArrayCopy---------")
	languages := [3]string{"TypeScript", "Go", "Rust"}
	copied := languages
	copied[0] = "JavaScript"
	fmt.Println("original:", languages)
	fmt.Println("copied:  ", copied)
}

func demoSliceView() {
	fmt.Println("---------demoSliceView---------")
	languages := []string{"TypeScript", "Go", "Rust"}
	view := languages[1:3]
	view[0] = "Golang"
	fmt.Println("slice:", languages)
	fmt.Println("view: ", view)
}

func demoNilSlice() {
	fmt.Println("---------demoNilSlice---------")
	var numbers []int
	fmt.Println("before append:", numbers == nil, len(numbers), cap(numbers))
	numbers = append(numbers, 42)
	fmt.Println("after append: ", numbers)
}

func demoAppendCapacity() {
	fmt.Println("---------demoAppendCapacity---------")
	base := make([]string, 2, 3)
	base[0] = "TypeScript"
	base[1] = "Go"
	sharedView := base[:3]

	grown := append(base, "Rust")
	grown[0] = "JavaScript"
	fmt.Println("within capacity:", sharedView)

	moved := append(grown, "Python")
	moved[0] = "TS"
	fmt.Println("after growth:   ", moved)
	fmt.Println("old storage:    ", sharedView)
}

func demoIndependentCopy() {
	fmt.Println("---------demoIndependentCopy---------")
	original := []int{1, 2, 3}
	cloned := make([]int, len(original))
	copied := copy(cloned, original)
	cloned[0] = 99
	fmt.Println("copied elements:", copied)
	fmt.Println("original:", original)
	fmt.Println("cloned:  ", cloned)
}
