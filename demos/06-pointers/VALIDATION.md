# 第六课验证（2026-09-08）

教学范围：前置为变量、if；基本操作为取地址与解引用；边界为 nil；练习为指针复制、重新绑定及间接修改。未引入自定义函数或 struct。

- 从最终 lessons/0006-pointers.html 提取五段完整 Go 程序，以 /usr/local/go/bin/go run 运行：第一节输出 20 10 20 和 *int；第二节输出 11 99 11 99 和 true true；第三节输出 true、not set、false 0；nil 错误示例确认运行时报 nil pointer dereference，按页面修复后输出 0；练习输出 15 99 15 99。
- 从 reference/0006-pointers.html 提取局部片段，按页面指示替换 main 函数体，输出 8。
- TypeScript 页面与 demo 对齐，Node 运行输出 10 10 20；tsc --strict --noEmit --target es2020 通过。
- Go demo 已 gofmt；共享两个 JS 文件 node --check 通过；git diff --check 通过。
- 首页、第五课、第六课和新速查的本地链接及锚点检查通过。
- 未执行成功：两个 PowerShell 检查，环境缺少 pwsh。
- 未验证：浏览器响应式、暗色模式、键盘交互与控制台，本会话无浏览器控制能力。复用共享 CSS、语法高亮与测验组件，不视为视觉验收通过。
