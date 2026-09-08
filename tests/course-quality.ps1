Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path $PSScriptRoot -Parent
$failures = [System.Collections.Generic.List[string]]::new()

function Read-RepoFile([string] $relativePath) {
  return Get-Content -Raw (Join-Path $repoRoot $relativePath)
}

function Assert-Contains(
  [string] $content,
  [string] $expected,
  [string] $message
) {
  if (-not $content.Contains($expected)) {
    $script:failures.Add($message)
  }
}

function Assert-NotContains(
  [string] $content,
  [string] $unexpected,
  [string] $message
) {
  if ($content.Contains($unexpected)) {
    $script:failures.Add($message)
  }
}

$lesson1 = Read-RepoFile "lessons/0001-hello-world-and-toolchain.html"
$lesson2 = Read-RepoFile "lessons/0002-variables-and-types.html"
$lesson3 = Read-RepoFile "lessons/0003-control-flow.html"
$lesson4 = Read-RepoFile "lessons/0004-arrays-and-slices.html"
$reference1 = Read-RepoFile "reference/0001-js-go-quick-reference.html"
$reference3 = Read-RepoFile "reference/0003-control-flow.html"
$reference4 = Read-RepoFile "reference/0004-arrays-slices.html"
$helloGo = Read-RepoFile "demos/01-hello/hello.go"
$varsGo = Read-RepoFile "demos/02-variables/vars.go"
$varsTs = Read-RepoFile "demos/02-variables/vars.ts"
$controlGo = Read-RepoFile "demos/03-control-flow/control.go"
$controlTs = Read-RepoFile "demos/03-control-flow/control.ts"
$arraysSlicesGo = Read-RepoFile "demos/04-arrays-slices/arrays_slices.go"
$arraysSlicesTs = Read-RepoFile "demos/04-arrays-slices/arrays_slices.ts"

Assert-NotContains $lesson1 "拷到任何机器" "lesson 1 must not promise that one binary runs on any machine"
Assert-Contains $lesson1 "目标操作系统和 CPU 架构" "lesson 1 must explain binary platform compatibility"
Assert-Contains $lesson1 "go install &lt;pkg&gt;@&lt;version&gt;" "lesson 1 must distinguish installing Go tools"
Assert-Contains $reference1 "go install &lt;pkg&gt;@&lt;version&gt;" "reference 1 must distinguish installing Go tools"
Assert-Contains $lesson1 "data-explain=" "lesson 1 quizzes must provide interactive feedback"
Assert-Contains $lesson1 "参考代码" "lesson 1 exercise must include reference code"
Assert-NotContains $helloGo "index" "lesson 1 baseline demo must not contain unrelated experiments"
Assert-Contains $helloGo 'fmt.Println("Hello, Go!")' "lesson 1 baseline demo must match its embedded example"
Assert-NotContains $helloGo "Hello, Leo!" "lesson 1 completed exercise must not replace the baseline demo"

Assert-NotContains $lesson2 "引用类型(slice/map/指针等)" "lesson 2 must not group slice, map, and pointers as reference types"
Assert-Contains $lesson2 "零值为 <code>nil</code> 的类型" "lesson 2 must use precise nil terminology"
Assert-Contains $lesson2 "不等于任何操作都安全" "lesson 2 must explain that defined zero values can still panic"
Assert-Contains $lesson2 "未类型化常量" "lesson 2 must explain Go untyped constants"
Assert-Contains $lesson2 "练习参考答案与复原" "lesson 2 must give feedback for every exercise"
Assert-Contains $varsTs "string | undefined = undefined" "lesson 2 TypeScript demo must model undefined while passing strict checks"
Assert-Contains $varsTs "console.log(typeof short, typeof n); // string undefined" "lesson 2 TypeScript demo must describe typeof undefined accurately"
foreach ($experiment in @("strconv", "Atoi", "number1", "myName")) {
  Assert-NotContains $varsGo $experiment "lesson 2 baseline demo contains unrelated experiment: $experiment"
}

Assert-NotContains $lesson3 "也不允许)括号" "lesson 3 must not claim parentheses are illegal"
Assert-Contains $lesson3 "括号在语法上合法" "lesson 3 must distinguish legal syntax from idiomatic Go"
Assert-Contains $lesson3 "额外的块" "lesson 3 must explain TypeScript block scope accurately"
Assert-NotContains $lesson3 "像 JS 那样拆成两个代理项" "lesson 3 must not misdescribe JavaScript for...of"
Assert-Contains $lesson3 "传统字符串索引" "lesson 3 must identify which JavaScript operation exposes UTF-16 units"
Assert-Contains $lesson3 "FizzBuzz 参考实现" "lesson 3 must include a FizzBuzz reference solution"
Assert-Contains $lesson3 "阶段复习" "lesson 3 must include cumulative retrieval practice"
Assert-Contains $reference3 "顺序未指定" "reference 3 must describe map iteration precisely"
Assert-NotContains $reference3 "每次运行随机" "reference 3 must not promise a different map order every run"
Assert-Contains $controlGo 'range "go语言 🚀"' "Go control-flow demo must use the canonical Unicode input"
Assert-Contains $controlTs 'of "go语言 🚀"' "TypeScript control-flow demo must use the same Unicode input"
Assert-Contains $controlTs 'const day: string = "sun";' "TypeScript control-flow demo must avoid an impossible literal case"
Assert-NotContains $controlGo "注意 switch 后的分号" "Go demo must not mention a nonexistent switch semicolon"

Assert-Contains $lesson4 "数组赋值复制元素" "lesson 4 must explain array value-copy behavior"
Assert-Contains $lesson4 "slice 赋值会复制描述符" "lesson 4 must describe slice assignment precisely"
Assert-Contains $lesson4 "预期编译错误" "lesson 4 must label the discarded append result as a compile error"
Assert-Contains $lesson4 'topics = append(topics, "测试")' "lesson 4 exercise must store append's return value"
Assert-Contains $lesson4 "阶段复习" "lesson 4 must include cumulative retrieval practice"
Assert-Contains $lesson4 "data-explain=" "lesson 4 quizzes must explain their answers"
Assert-Contains $reference4 "不要依赖具体扩容倍数" "reference 4 must not promise an append growth factor"
Assert-Contains $reference4 "语法示意，不可直接运行" "reference 4 syntax-only snippets must be labelled"
Assert-Contains $arraysSlicesGo 'numbers = append(numbers, 42)' "Go arrays/slices demo must store append's return value"
Assert-Contains $arraysSlicesGo 'copied := copy(cloned, original)' "Go arrays/slices demo must demonstrate an independent copy"
Assert-Contains $arraysSlicesTs 'const alias = languages;' "TypeScript demo must expose reference assignment behavior"
Assert-Contains $arraysSlicesTs 'const copied = [...languages];' "TypeScript demo must show an explicit shallow copy"

$sandboxPath = Join-Path $repoRoot "demos/03-control-flow/sandbox/index.go"
$oldSandboxPath = Join-Path $repoRoot "demos/03-control-flow/index.go"
foreach ($preservedExperiment in @(
  "demos/01-hello/sandbox/hello.go",
  "demos/02-variables/sandbox/experiments.go"
)) {
  if (-not (Test-Path -LiteralPath (Join-Path $repoRoot $preservedExperiment) -PathType Leaf)) {
    $failures.Add("learner experiment must be preserved: $preservedExperiment")
  }
}
if (-not (Test-Path -LiteralPath $sandboxPath -PathType Leaf)) {
  $failures.Add("lesson 3 experiment must be preserved under sandbox/")
}
if (Test-Path -LiteralPath $oldSandboxPath -PathType Leaf) {
  $failures.Add("lesson 3 experiment must not create a second main in the baseline demo directory")
}

if ($failures.Count -gt 0) {
  $failures | ForEach-Object { Write-Host "FAIL: $_" }
  exit 1
}

Write-Host "Course quality checks passed."
