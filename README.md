# Golang Journey

我的 Go 语言学习之旅。这个仓库记录我学习 Go 过程中的一切:

- **notes/** — 语言特性、标准库、最佳实践的学习笔记
- **demos/** — 验证语法和特性的可运行小示例
- **projects/** — 动手实践的小项目

欢迎浏览,有任何建议也欢迎指出。

## 在线课程

网站入口是根目录的 [`index.html`](index.html)。本地预览时，在仓库根目录运行：

```powershell
python -m http.server 4173
```

然后访问 <http://127.0.0.1:4173/>。

## 发布到 GitHub Pages

1. 将仓库推送到 GitHub。
2. 打开仓库的 `Settings` → `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和 `/ (root)` 目录并保存。

发布完成后，网站地址通常为：

```text
https://<GitHub 用户名>.github.io/<仓库名>/
```

本项目是纯静态网站，不需要安装依赖或填写构建命令。根目录的 `.nojekyll` 会让 GitHub Pages 按原样发布 HTML、CSS、JavaScript 和本地语法高亮资源。
