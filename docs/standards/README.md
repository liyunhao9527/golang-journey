# Golang Journey 项目规范

本目录是项目内容与界面的唯一规范入口。新增或修改课程、速查页、演示代码、导航、图标或交互前，先阅读本页，再按任务读取对应文档。

## 按任务阅读

| 任务 | 必读文档 |
|---|---|
| 编写或修改课程正文、速查内容、代码示例、练习、测验、演示代码 | [产品与文案](product-and-language.md)、[课程内容](course-content.md) |
| 新建或调整课程页面、课程首页、速查页 | [视觉系统](visual-system.md)、[页面结构](page-contracts.md) |
| 添加图标或交互反馈 | [视觉系统](visual-system.md) |
| 完成任何课程或界面改动 | [质量门槛](quality-gate.md) |

## 不变约束

- 受众是已有 JavaScript 或 TypeScript 经验、正在学习 Go 的开发者。
- 用直接、准确的中文解释迁移差异，不卖弄概念。
- Go 与 TypeScript 对照固定为 Go 在上、TypeScript 在下。
- 对照说明使用“相同点 / 不同点”。
- 学习结果使用“本课目标”，并写成可以观察或验证的能力。
- 页面继续使用静态 HTML、共享 CSS 和少量原生 JavaScript。
- 所有页面使用本地资源，不能依赖 CDN。
- 视觉与交互必须通过移动端、暗色模式、键盘和无横向溢出检查。

## 实现入口

- 共享样式：`assets/style.css`
- 测验交互：`assets/quiz.js`
- 语法高亮：`assets/highlight-init.js` 与 `assets/vendor/`
- IconPark 图标：`assets/icons/icon-park.svg`
- 课程页面：`lessons/`
- 速查页面：`reference/`
- 可运行示例：`demos/`

页面需要新增设计能力时，先扩展共享组件，再在页面中复用。不要为单个页面复制一套近似样式。
