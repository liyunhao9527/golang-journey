# 第 3 课交付:控制流(if / for / switch)

交付物:lessons/0003-control-flow.html + demos/03-control-flow/(control.go 已用 /usr/local/go/bin/go 验证运行)+ reference/0003-control-flow.html。

教学要点与预期难点:

- **核心心智模型:"一种事只有一种写法"**——没有 while(用 `for cond`)、没有三元(写 if/else)、switch 默认不贯穿。这三个"删除"是本课的故事线。
- **if/switch 带初始化语句**是 TS 完全没有的形态,练习已安排"出块即编译错误"的亲手验证。
- **range 字符串:按 rune 走、索引按字节跳**(demo 输出索引 0、1、2、5)——我初稿曾把索引写错成 0、1、2、3,靠运行 demo 纠正。用户做练习 4 时大概率也会惊讶,是好的 desirable difficulty。
- 呼应第 2 课:`_` 豁免"未使用变量"规则,练习 2(b) 安排再触发一次该编译错误。

练习核心:FizzBuzz(无条件 switch 实现)是本课的实战胜利。

下一步 ZPD:复合类型 I(数组与 slice:值类型数组、slice 是主力、append 扩容)——已写进第 3 课预告。map 和指针随后。
