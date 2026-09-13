# Go 课程内容检查（2026-09-13）

覆盖第 1～6 课及速查。按 teach 与 writing-clearly-and-concisely 优化；保留用户的 sandbox 与学习记录。

修正第一课运行目录与工具命令，第二课常量转换和 TS 类型检查说明，第三课缺少声明的示例及 Unicode 边界；补充第四至六课 append 返回值、缺失键与指针修改的解释。

依据：Go 官方规范 https://go.dev/ref/spec 的 Constants、Conversions、Short_variable_declarations、For_range。

## 已执行

- 最终页面提取 56 段 Go/TS 代码；54 段正常执行，2 段确认预期错误。TS 各段独立 strict 检查通过。
- 16 项补充验证：常量转换、变量错误、短路输入 0/2/10、分组括号、作用域、switch 三分支和错误恢复。
- 六组基准 Go/TS demo 运行通过，TS strict 检查通过。
- 在独立副本执行第一课 build、直接运行和 gofmt，输出 Hello, Go!。
- 第三课速查的四段可执行片段按页面说明组合运行；循环形态示意标注为不可直接运行。
- 41 条课程内容静态断言、13 页资源与链接检查、两个共享 JS 语法检查、git diff --check 通过。

## 未验证

环境缺少 pwsh，未原样运行两个 PowerShell 脚本；已用 Python 检查对应静态断言与高亮资源。真实浏览器的响应式、暗色、键盘及控制台检查未执行，静态检查不代替视觉验收。

## 页面执行记录

Go 片段若无 package main，按第四课页面说明放入已导入 fmt 的 main；其他 Go 块为完整程序。TS 各自保存到单独文件。

### 0001-hello-world-and-toolchain.html / 1

`go run work/go-check/0001-hello-world-and-toolchain_0.go`

```text
Hello, Go!

```

### 0001-hello-world-and-toolchain.html / 2

`go run work/go-check/0001-hello-world-and-toolchain_1.go`

```text
Hello, Go!

```

### 0001-hello-world-and-toolchain.html / 3

`node work/go-check/0001-hello-world-and-toolchain_2.ts`

```text
Hello, Go!

```

### 0001-hello-world-and-toolchain.html / 4

`go run work/go-check/0001-hello-world-and-toolchain_3.go`

```text
Hello, Leo!
I love TypeScript!

```

### 0002-variables-and-types.html / 1

`go run work/go-check/0002-variables-and-types_0.go`

```text
2 20
""

```

### 0002-variables-and-types.html / 2

`node work/go-check/0002-variables-and-types_1.ts`

```text
2 20
""

```

### 0002-variables-and-types.html / 3

`go run work/go-check/0002-variables-and-types_2.go`

```text
65 A

```

### 0002-variables-and-types.html / 4

`go run work/go-check/0002-variables-and-types_3.go`

```text
65 A
int

```

### 0002-variables-and-types.html / 5

`node work/go-check/0002-variables-and-types_4.ts`

```text
65 A
number

```

### 0002-variables-and-types.html / 6

`go run work/go-check/0002-variables-and-types_5.go`

```text
int 3
float64 3

```

### 0002-variables-and-types.html / 7

`go run work/go-check/0002-variables-and-types_6.go`

```text
19

```

### 0002-variables-and-types.html / 8

`go run work/go-check/0002-variables-and-types_7.go`

```text
显式类型 类型推断 短声明
"" 0

```

### 0002-variables-and-types.html / 9

`node work/go-check/0002-variables-and-types_8.ts`

```text
undefined undefined

```

### 0002-variables-and-types.html / 10

`go run work/go-check/0002-variables-and-types_9.go`

```text
f=8.75 (float64), n=8 (int)

```

### 0003-control-flow.html / 1

`go run work/go-check/0003-control-flow_0.go`

```text
big

```

### 0003-control-flow.html / 2

`node work/go-check/0003-control-flow_1.ts`

```text
big

```

### 0003-control-flow.html / 3

`go run work/go-check/0003-control-flow_2.go`

```text
成年且有票
有票或是会员
可以入场

```

### 0003-control-flow.html / 4

`node work/go-check/0003-control-flow_3.ts`

```text
成年且有票
有票或是会员
可以入场

```

### 0003-control-flow.html / 5

`go run work/go-check/0003-control-flow_4.go`

```text
除数为 0 或商不大于 1

```

### 0003-control-flow.html / 6

`go run work/go-check/0003-control-flow_5.go`

```text

```

### 0003-control-flow.html / 7

`node work/go-check/0003-control-flow_6.ts`

```text

```

### 0003-control-flow.html / 8

`go run work/go-check/0003-control-flow_7.go`

```text
0
1
2
3
4

```

### 0003-control-flow.html / 9

`node work/go-check/0003-control-flow_8.ts`

```text
0
1
2
3
4

```

### 0003-control-flow.html / 10

`go run work/go-check/0003-control-flow_9.go`

```text
0 a
1 b
2 c
a
b
c
0
1
2

```

### 0003-control-flow.html / 11

`node work/go-check/0003-control-flow_10.ts`

```text
0 a
1 b
2 c
a
b
c
0
1
2

```

### 0003-control-flow.html / 12

`go run work/go-check/0003-control-flow_11.go`

```text
字节索引=0, 字符=g, 类型=int32
字节索引=1, 字符=o, 类型=int32
字节索引=2, 字符=语, 类型=int32
字节索引=5, 字符=言, 类型=int32
字节索引=8, 字符= , 类型=int32
字节索引=9, 字符=🚀, 类型=int32

```

### 0003-control-flow.html / 13

`node work/go-check/0003-control-flow_12.ts`

```text
字符= g
字符= o
字符= 语
字符= 言
字符=  
字符= 🚀

```

### 0003-control-flow.html / 14

`go run work/go-check/0003-control-flow_13.go`

```text
周末

```

### 0003-control-flow.html / 15

`node work/go-check/0003-control-flow_14.ts`

```text
周末

```

### 0003-control-flow.html / 16

`go run work/go-check/0003-control-flow_15.go`

```text
B

```

### 0003-control-flow.html / 17

`go run work/go-check/0003-control-flow_16.go`

```text
more than one byte

```

### 0003-control-flow.html / 18

`go run work/go-check/0003-control-flow_17.go`

```text
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

```

### 0003-control-flow.html / 19

`go run work/go-check/0003-control-flow_18.go`

```text
1 奇数
2 偶数
3 奇数
4 偶数
5 奇数
6 偶数
7 奇数
8 偶数
9 奇数
10 偶数
偶数之和: 30

```

### 0004-arrays-and-slices.html / 1

`go run work/go-check/0004-arrays-and-slices_0.go`

```text
original: [TypeScript Go Rust]
copied:   [JavaScript Go Rust]

```

### 0004-arrays-and-slices.html / 2

`node work/go-check/0004-arrays-and-slices_1.ts`

```text
original: [ 'JavaScript', 'Go', 'Rust' ]
alias:    [ 'JavaScript', 'Go', 'Rust' ]

```

### 0004-arrays-and-slices.html / 3

`go run work/go-check/0004-arrays-and-slices_2.go`

```text
slice: [TypeScript Golang Rust]
view:  [Golang Rust]

```

### 0004-arrays-and-slices.html / 4

`node work/go-check/0004-arrays-and-slices_3.ts`

```text
array:      [ 'TypeScript', 'Go', 'Rust' ]
range copy: [ 'Golang', 'Rust' ]

```

### 0004-arrays-and-slices.html / 5

`go run work/go-check/0004-arrays-and-slices_4.go`

```text
true 0 0
[42]

```

### 0004-arrays-and-slices.html / 6

`go run work/go-check/0004-arrays-and-slices_5.go`

```text
[变量 控制流]
2 3

```

### 0004-arrays-and-slices.html / 7

`node work/go-check/0004-arrays-and-slices_6.ts`

```text
[ '变量', '控制流' ]
2

```

### 0004-arrays-and-slices.html / 8

`go run work/go-check/0004-arrays-and-slices_7.go`

```text
# command-line-arguments
work/go-check/0004-arrays-and-slices_7.go:7:3: append(topics, "slice") (value of type []string) is not used

```

### 0004-arrays-and-slices.html / 9

`go run work/go-check/0004-arrays-and-slices_8.go`

```text
3
[1 2 3]
[99 2 3]

```

### 0004-arrays-and-slices.html / 10

`node work/go-check/0004-arrays-and-slices_9.ts`

```text
[ 1, 2, 3 ]
[ 99, 2, 3 ]

```

### 0004-arrays-and-slices.html / 11

`go run work/go-check/0004-arrays-and-slices_10.go`

```text
topics: [Go slice HTTP 测试]
today: [Go slice]
backup: [Go 并发 HTTP]
length: 4

```

### 0004-arrays-and-slices.html / 12

`go run work/go-check/0004-arrays-and-slices_11.go`

```text
2
4

```

### 0005-maps.html / 1

`go run work/go-check/0005-maps_0.go`

```text
0 0 2
0 true
0 false
1

```

### 0005-maps.html / 2

`node work/go-check/0005-maps_1.ts`

```text
0 undefined 2
0 true
undefined false
1

```

### 0005-maps.html / 3

`go run work/go-check/0005-maps_2.go`

```text
true 0 0
1

```

### 0005-maps.html / 4

`go run work/go-check/0005-maps_3.go`

```text
2
Go 2

```

### 0005-maps.html / 5

`go run work/go-check/0005-maps_4.go`

```text
Go 3 true
TS 2 true
Rust 1 true
Java 0 false

```

### 0006-pointers.html / 1

`go run work/go-check/0006-pointers_0.go`

```text
20 10 20
*int

```

### 0006-pointers.html / 2

`node work/go-check/0006-pointers_1.ts`

```text
10 10 20

```

### 0006-pointers.html / 3

`go run work/go-check/0006-pointers_2.go`

```text
11 99 11 99
true true

```

### 0006-pointers.html / 4

`go run work/go-check/0006-pointers_3.go`

```text
true
not set
false 0

```

### 0006-pointers.html / 5

`go run work/go-check/0006-pointers_4.go`

```text
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x0 pc=0x211d6f6]

goroutine 1 [running]:
main.main()
	/Users/leo/Documents/Codex/2026-09-12/gan/work/go-check/0006-pointers_4.go:7 +0x16
exit status 2

```

### 0006-pointers.html / 6

`go run work/go-check/0006-pointers_5.go`

```text
15 99 15 99

```

