# Agent instructions

## Agent skills

### Issue tracker

Issues and specs are tracked as local markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Course design

Creating or revising lessons, demos, exercises, reference pages, navigation, icons, learning progress, or course UI: read `docs/standards/README.md` and follow its task-specific pointers.

### 课程教学与写作

- 新建课程、设计练习或根据学习反馈调整教学时，读取并使用 [.agents/skills/teach/SKILL.md](.agents/skills/teach/SKILL.md)。
- 编写或重写课程正文、速查与概念解释时，读取并使用 [.agents/skills/writing-clearly-and-concisely/SKILL.md](.agents/skills/writing-clearly-and-concisely/SKILL.md)。
- 中文讲解先说重点，每段只讲一个主题；用具体代码或例子解释抽象概念，交代因果和先后关系，保留理解所需的推理步骤。

### 辅助技能

- 调查资料、核实 API 或收集一手来源：使用 [.agents/skills/research/SKILL.md](.agents/skills/research/SKILL.md)。
- 排查可复现的错误或性能问题：使用 [.agents/skills/diagnosing-bugs/SKILL.md](.agents/skills/diagnosing-bugs/SKILL.md)。
- 用交互图解释概念：使用 [.agents/skills/visualize/SKILL.md](.agents/skills/visualize/SKILL.md)；课程站点内的交付仍遵循本地资源与 IconPark 规范。
- 用户要求重新讲清楚方案或补足上下文：使用 [.agents/skills/wait-what/SKILL.md](.agents/skills/wait-what/SKILL.md)。
