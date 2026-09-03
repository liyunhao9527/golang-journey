# 视觉系统规范

## 设计方向

界面是克制的技术教程与编辑阅读系统。辨识度来自冷灰纸面、深色代码面板、Go 青色、精确规则线和语言对照，不依赖装饰插画、渐变或大面积阴影。

设计参数：

- `DESIGN_VARIANCE: 5`
- `MOTION_INTENSITY: 2`
- `VISUAL_DENSITY: 6`

## 色彩

最终色值以 `assets/style.css` 中 `.compiler-lesson` 的变量为准：

| Token | 浅色值 | 用途 |
|---|---:|---|
| `--compiler-ink` | `#102129` | 主文字、品牌标记、代码底色 |
| `--compiler-paper` | `#fbfdfc` | 阅读卡片 |
| `--compiler-fog` | `#e7eef1` | 页面背景 |
| `--compiler-go` | `#007e9e` | Go、当前状态、主要强调 |
| `--compiler-go-dark` | `#006b87` | 浅色背景上的链接与小文字 |
| `--compiler-ts` | `#647782` | TypeScript 次级标识 |
| `--compiler-rule` | `#bfcbd0` | 边框和分隔线 |

只使用一个主要强调色 Go 青色。TypeScript 使用中性蓝灰，不与主要操作争夺注意力。

## 字体与层级

- H1 与 H2：窄体倾向的系统无衬线回退栈，紧字距、高字重。
- 正文：中文系统无衬线，基准 `17px / 1.78`。
- 代码和工具标签：`IBM Plex Mono`、`Cascadia Code`、Consolas 回退栈。
- H1 只承担页面主题；导语负责解释范围。
- 正文行宽以 `46rem` 为上限，速查数据面可以扩展至 `60rem`。

## 形状与间距

- 课时章节与速查卡片之间固定 `16px`。
- 主结构卡片圆角 `4px`；代码、对照轨和导航控件使用 `2px`。
- 主要层级依靠边线、底色和留白，不使用漂浮式阴影。
- 概念卡使用青色上边线。
- 行动卡使用青色左边线和稍柔和的背景。
- 参考卡使用较低对比度背景。

对应 class：

```text
lesson-section--concept
lesson-section--action
lesson-section--reference
lesson-section--quiz
reference-section
```

## IconPark

项目只使用本地 IconPark 图标，资源位于 `assets/icons/icon-park.svg`，许可和来源见 `assets/icons/README.md`。

允许的用途：

- 课程目录、上一页、下一页和速查入口；
- 阅读时间和外部资料；
- 测验正确与错误反馈。

正文标题保持纯文字。图标与文字同时出现时使用 `aria-hidden="true"`，语义由文字承担：

```html
<a href="0000-course-list.html">
  <svg class="ip-icon" aria-hidden="true">
    <use href="../assets/icons/icon-park.svg#ip-application-menu"></use>
  </svg>
  <span>课程目录</span>
</a>
```

新增图标时，从 IconPark 官方包提取 SVG，保持 `48 × 48` viewBox、outline 风格、`currentColor` 和统一描边。同步更新 `assets/icons/README.md`，不能混用其他图标库。

## 响应式与动效

- 重点检查宽度：375、768、1024、1440px。
- 640px 以下导航只显示图标，但可访问文字继续保留在 DOM 中。
- 移动端正文卡片在 375px 视口下约为 336px，不贴边。
- 页面不能横向滚动；宽代码和数据表在自身容器内滚动。
- 交互目标至少 44px，测验按钮保持约 48px。
- 动效只用于一次性映射提示和状态反馈，遵守 `prefers-reduced-motion`。
- 暗色模式复用同一语义层级，不新增另一套装饰语言。
