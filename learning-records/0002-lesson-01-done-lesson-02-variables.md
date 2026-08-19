# 第 1 课完成 + 第 2 课交付:变量与类型

用户确认第 1 课(工具链 + Hello World)已完成;Go 1.26.6 已通过官方安装包装在 `/usr/local/go/bin`(不在 brew 里,当前 shell 需全路径或重开终端)。

第 2 课已交付(lessons/0002-variables-and-types.html + demos/02-variables/ + reference/0002)。教学要点与用户反馈的潜在难点:

- **零值是本课核心心智模型**:"Go 没有 undefined"这句话对前端开发者冲击最大,后续课(slice/map/指针)里 nil 的零值概念要反复呼应。
- **未使用变量报错**是用户最容易反复踩的编译错误,课程练习里已安排亲手触发一次。
- `%T` 打印 rune 显示 `int32`(别名背后的真实类型)——参考文档已记录,用户可能在此困惑。

下一步 ZPD:控制流(if/for/switch,无 while 的 for)——已写在第 2 课预告里。
