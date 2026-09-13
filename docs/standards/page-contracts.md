# 页面结构规范

## 全站基础

所有 HTML 页面必须包含：

- 唯一且准确的 `description`；
- 浅色与暗色 `theme-color`；
- 本地语法高亮 CSS、JavaScript 和初始化脚本；
- 跳到主内容的 skip link；
- `.course-nav`、一个 `<main>`、一个 H1 和页脚；
- `body.lesson-page.compiler-lesson`；
- 本地 Go 官方品牌标志 `assets/go-logo.svg`。

课程、速查和资源路径当前都只有一层目录，因此共享资源使用 `../assets/...`。

## 课程首页

Body：

```html
<body class="lesson-page compiler-lesson compiler-index course-index-page">
```

结构顺序：

1. 课程导航；
2. `.course-index-shell`；
3. `.lesson-header`，包含标题、导语、第一课入口、完整代码示例和 `.compiler-goal`；
4. `.course-catalog`，依次包含当前课程、阶段路线、项目实践与参考资料；
5. 页脚。

首页与目录共享 `assets/home.css`；目录 Header 使用课程数量与路线入口替代代码示例。

完整课程表保留在 `lessons/0000-course-list.html`。首页与目录的已开放数量须一致，计划课程明确标记待更新，阶段安排详见 `ROADMAP.md`。

首页的工作是让读者选择课程。375 × 812 下至少露出第一课标题。

## 课时页

Body：

```html
<body class="lesson-page compiler-lesson">
```

结构顺序：

1. 课程导航；
2. `.lesson-shell`；
3. `.lesson-header`，包含本课概览和 `.compiler-goal`；
4. `.lesson-rail`，包含锚点目录与 `.lesson-progress`；
5. `.lesson-article`；
6. 多个 `.lesson-section`；
7. 页脚。

章节示例：

```html
<section class="lesson-section lesson-section--concept" aria-labelledby="for">
  <h2 id="for">for：一个关键字，三种循环</h2>
  <!-- explanation and runnable examples -->
</section>
```

课时目标放在 Header 底部，不在正文重复生成独立目标卡。

## Go / TypeScript 对照

固定结构如下：

```html
<div class="compare">
  <div>
    <p class="lang-label">Go</p>
    <pre><code class="language-go">...</code></pre>
  </div>
  <div class="translation-rail" aria-label="Go 与 TypeScript 的异同">
    <span><b>相同点</b>...</span>
    <span><b>不同点</b>...</span>
  </div>
  <div>
    <p class="lang-label">TypeScript</p>
    <pre><code class="language-typescript">...</code></pre>
  </div>
</div>
```

不要交换代码顺序。所有 `<pre><code>` 都必须声明支持的 `language-*` class。

## 速查页

Body：

```html
<body class="lesson-page compiler-lesson compiler-reference reference-page">
```

速查页使用较短 Header，正文由多个 `.reference-section` 组成，每张卡只聚合一个可检索主题。表格优先承担紧凑查询；移动端无法可靠折行时，让表格自身横向滚动。

## 锚点与导航

- 每个侧栏或目录链接必须指向存在且唯一的 ID。
- 第一课不显示上一课，最后一课不显示下一课。
- 每课提供课程目录和本课速查入口。
- 每张速查页提供课程目录、相关课程以及可用的上一张或下一张。
- 移动端隐藏导航文字只是视觉处理，链接的可访问名称保持不变。
