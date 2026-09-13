# 视觉系统规范

## 设计方向

界面是克制的技术教程与编辑阅读系统。辨识度来自冷灰纸面、深色代码面板、Go 青色、精确规则线和语言对照，不依赖装饰插画、渐变或大面积阴影。

设计参数：

- `DESIGN_VARIANCE: 5`
- `MOTION_INTENSITY: 2`
- `VISUAL_DENSITY: 6`

## 色彩

课时与速查的色值以 `assets/style.css` 中 `.compiler-lesson` 的变量为准；首页与目录采用下方的学习入口视觉。

| Token | 浅色值 | 用途 |
|---|---:|---|
| `--compiler-ink` | `#102129` | 主文字、品牌标记 |
| `--compiler-paper` | `#fbfdfc` | 阅读卡片 |
| `--compiler-fog` | `#e7eef1` | 页面背景 |
| `--compiler-go` | `#007e9e` | Go、当前状态、主要强调 |
| `--compiler-go-dark` | `#006b87` | 浅色背景上的链接与小文字 |
| `--compiler-ts` | `#647782` | TypeScript 次级标识 |
| `--compiler-rule` | `#bfcbd0` | 边框和分隔线 |

代码块使用本地 Highlight.js One Dark（Atom One Dark） 主题（`assets/vendor/highlight-one-dark.css`），浅色与暗色模式统一使用 `#282c34` 底色和 `#abb2bf` 默认文字色。语法颜色由主题文件维护，不在共享样式中覆盖。网页代码示例每级缩进使用 2 个空格，制表符显示宽度也设为 2；可运行 Go 源文件继续遵循 `gofmt`。

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

## 首页与课程目录的学习入口视觉

首页和 `lessons/0000-course-list.html` 共用 `assets/home.css`，保留静态 HTML、本地高亮和 IconPark。课时与速查继续使用 `assets/style.css`，避免入口布局规则影响教学组件。

入口采用接近中性的冷白底色与低饱和 Go 青色：背景 `#f5f7f7`、表面 `#fcfdfd`、正文 `#243338`、次要文字 `#637276`、边线 `#d7dfdf`、强调 `#287887`。暗色使用相同语义 token，具体值以 home.css 为准。

- 字体：Avenir Next / Segoe UI Variable 与中文 PingFang SC / Microsoft YaHei；代码使用 SFMono-Regular / Cascadia Code / Consolas。本地系统字体回退，不请求远程字体。
- 标题以 600 字重和自然中文行高呈现；桌面 H1 最大 46px，H2 最大 32px，正文 15px、行高约 1.85。标签不使用窄体、大写与扩张字距。
- 内容最大宽度 1200px。桌面章节间距 80px，手机 52px。按阅读顺序保持左对齐；手机折成单列。
- 首屏采用学习入口与真实代码两栏。代码是完整、可验证的第一课程序；不用装饰性伪代码代替示例。
- 课程重点块与主教材可使用容器；阶段路线、项目与其他资料使用细线和留白，避免逐项套卡片。
- 首页首屏保留包含第一课标题的行动按钮。导航移动端保持可访问名称和至少 44px 目标。
- 动效只保留代码区一次轻微入场和按钮反馈；减少动态效果设置下停用。

## 品牌与 favicon

全站导航与 favicon 共用 `assets/go-logo.svg`，来源为 [Go 官方蓝色标志](https://go.dev/images/go-logo-blue.svg)，使用说明见 [Go 品牌页](https://go.dev/blog/go-brand)。保留官方形状、比例与颜色，作为品牌资产使用；界面功能图标继续采用 IconPark。

导航中的标志附随站点名称，使用空 alt 避免重复朗读。桌面宽 64px、手机宽 46px，高度按原比例计算。所有课时、目录与速查页使用本地 SVG favicon。

## 代码行号与缩进参考线

所有 `pre code` 通过 `assets/highlight-init.js` 在高亮完成后增强，样式集中在 `assets/code-blocks.css`。每段代码从 1 编号，按两列缩进显示参考线，制表符遵循两列 tab stop。

行号与参考线是不可选中的装饰，使用 `aria-hidden`；保留原始代码文本、换行和语法高亮。长行在代码容器内水平滚动，不通过折行破坏行号对应关系。修改增强逻辑后，核对代码 textContent 与原始 HTML 一致，并在展开参考答案后验证选择代码所得文本不含行号。

## 课时与速查的代码面板排版

代码面板使用 Rust 项目 reader 的布局比例，配色保留 One Dark。语言与文件名放在面板外，采用自然大小写、16px / 1.6、600 字重；面板内工具栏左侧显示语言，右侧提供复制按钮。桌面代码 14px / 1.8、内边距 20px，手机 13px、内边距 16px，面板圆角 6px。等宽字体使用 Cascadia Code / Consolas 回退栈。

Go、异同说明、TypeScript 保持原阅读顺序，各代码面板独立，间隔约 28px；异同说明使用无外框的正文排版。首页已有独立编辑器展示，保留其专用标题栏。

复制按钮只写入原始代码文本；成功后显示“已复制”并复原，浏览器拒绝剪贴板访问时选中代码并提示手动复制。反馈使用 role=status，按钮支持键盘与至少 44px 点击高度。

缩进线几何约束：行号右侧留 12px，再以 1px 线分隔；分隔线到代码固定 16px。空行参考线沿用前后非空行共同的缩进层级，连续空行保持贯通，首尾空行不补线。每行容器保留完整行高，避免空行装饰高度为零。
