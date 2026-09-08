# Progress Log

## Session: 2026-09-07, lesson 4

### Phase 26: Define lesson 4 scope and evidence
- **Status:** complete
- Restored the teaching mission, resources, learning records, course standards, lesson 3, reference 3, shared assets, and repository quality checks.
- Selected “数组与 slice” as the ZPD-aligned fourth lesson.
- Error: the first planning-file patch expected the wrong progress heading and applied no changes; this retry uses the actual `# Progress Log` heading.
- Verified the required rules against the local official Go 1.27.1 specification and built-in documentation.
- Kept the lesson daily-use complete while deferring advanced slice expressions and performance details.

### Phase 27: Build lesson 4 artifacts
- **Status:** complete
- Added baseline Go/TypeScript demos and learner sandbox guidance.
- Added the lesson page with four concept sections, runnable examples, an exercise, cumulative review, four interactive quizzes, and official references.
- Validation caught and corrected an inaccurate claim: discarding `append` is a compile-time error, not a legal no-op. The page now labels and explains the expected error and recovery step.
- The first executable-example test passed four examples but represented the two-line review output differently than the exact expected string; the assertion now accepts platform newline formatting without weakening the checked values.
- A combined validation command was rejected before execution because it included recursive temporary cleanup. The retry is non-destructive: TypeScript checks with `--noEmit` and runs directly under Node 25.
- Added the compact reference page, course-index entries, previous/next navigation, and four-lesson progress labels.

### Phase 28: Verify lesson 4
- **Status:** complete
- Formatted and ran the Go demo successfully; the observed output matches the lesson.
- Extracted five complete Go examples from the final HTML: four ran with the required output and the intentionally invalid `append` example produced the documented compile error.
- TypeScript passed strict `tsc --noEmit` checking and ran under Node 25 with the documented reference/copy behavior.
- Local links, anchors, unique IDs, 16 equal-length quiz option sets, four polite live regions, syntax highlighting, JavaScript syntax, and `git diff --check` passed.
- Real Chrome checks passed for the course index, lesson 4, and reference 4 at 375, 768, 1024, and 1440px: no page-level overflow or goal clipping, every code block highlighted, and mobile navigation targets are at least 44px.
- The lesson 4 quiz passed a wrong-answer-then-correct-answer cycle in real Chrome.
- Browser runtime and console event monitoring reported no page-authored warnings or errors during the representative sweep.
- The repository course-quality script still reports four pre-existing lesson 2 demo failures (`strconv`, `Atoi`, `number1`, `myName`); `demos/02-variables/vars.go` is unchanged in the current diff.

### Phase 29: Deliver lesson 4
- **Status:** complete
- Updated NOTES with the delivered scope and the next topic (`map`).
- Intentionally did not add a learning record: delivery is exposure, and the teaching format requires evidence of user understanding before recording learning.

## Session: 2026-09-03

### Phase 1: Audit current implementation
- **Status:** complete
- Actions taken:
  - Declared the design read and dial values required by the selected design skill.
  - Inspected repository structure, shared CSS, lesson 3 markup, and reusable components.
  - Confirmed the worktree contains pre-existing user changes that must be preserved.
  - Reviewed the exact user diff for lesson 3 and the shared stylesheet.
  - Audited quiz and syntax-highlighting scripts plus their regression test.
  - Captured and reviewed desktop and 390px mobile baselines.
  - Identified a mobile horizontal-overflow defect and weak hierarchy between prose and wide comparison content.
- Files created/modified:
  - `task_plan.md` (created)
  - `findings.md` (created)
  - `progress.md` (created)

### Phase 2: Define the visual system
- **Status:** complete
- Actions taken:
  - Chose a cold technical-publication direction with one Go-cyan accent.
  - Defined a narrow reading column inside a wider technical layout.
  - Defined the joined Go/TypeScript translation surface as the signature pattern.
  - Kept native CSS and the current static architecture.
- Files created/modified:
  - `findings.md` (updated with audit and visual-system decisions)

### Phase 3: Implement the lesson 3 prototype
- **Status:** complete
- Actions taken:
  - Scoped the redesign to lesson 3 before propagation to other pages.
  - Added a skip link, compact course navigation, structured lesson hero, and topic index.
  - Added a scoped native-CSS visual system with a narrow reading column and wider comparison surfaces.
  - Reworked comparisons, exercises, disclosures, quizzes, focus states, dark mode, print mode, and responsive behavior.
  - Removed em-dash separators from the prototype copy while preserving its meaning.
  - Added `min-width: 0` containment to shared comparison children to address mobile overflow.
  - Refined the lesson heading into a one-line subject plus two-line descriptive deck on desktop.
  - Replaced the mobile outline scroller with a 2x2 topic grid.
  - Visually checked light desktop, narrow mobile, dark desktop, comparison, and quiz states.
  - Measured key foreground/background contrast pairs and recalibrated the light muted/accent tokens after two near-threshold failures.
- Files created/modified:
  - `lessons/0003-control-flow.html`
  - `assets/style.css`

### Phase 4: Browser and regression verification
- **Status:** complete
- Actions taken:
  - Verified desktop and mobile structural metrics, including no page overflow.
  - Verified light/dark theme switching and measured contrast ratios.
  - Verified topic navigation, syntax highlighting count, and quiz state transitions.
  - Checked browser errors; only unrelated extension errors were present.
  - Verified reduced-motion behavior disables the entrance animation.
  - Ran syntax highlighting, JavaScript syntax, structural HTML, forbidden-character, focused diff, and mechanical design pre-flight checks.
- Files created/modified:
  - `findings.md`
  - `progress.md`

### Phase 5: Delivery
- **Status:** complete
- Actions taken:
  - Prepared the prototype handoff and identified the safe propagation path for other lessons.
- Files created/modified:
  - `task_plan.md`

## Test Results
| Test | Input | Expected | Actual | Status |
|------|-------|----------|--------|--------|
| Syntax highlighting | `tests/syntax-highlighting.ps1` | All 7 pages use local assets and labelled code blocks | Passed for 7 pages | Pass |
| JavaScript syntax | `node --check` on quiz/highlight initializers | No syntax errors | No syntax errors | Pass |
| Mobile overflow | 390x844 viewport | Document width equals layout viewport | 375px equals 375px | Pass |
| Desktop layout | 1431x912 viewport | Narrow prose, wide comparison, no overflow | 768px prose, 1056px comparison, no overflow | Pass |
| Quiz cycle | Wrong then correct choice | Correct/wrong states, all buttons disabled, feedback announced | Matched expected state | Pass |
| Theme support | Emulated dark and light preferences | One coherent page theme in each mode | Both rendered correctly | Pass |
| Contrast | Key light/dark text and interactive states | WCAG AA, at least 4.5:1 | Minimum measured 5.09:1 after correction | Pass |
| Reduced motion | Emulate `prefers-reduced-motion: reduce` | Entrance animations disabled | Both animation names were `none` | Pass |
| Design pre-flight | Mechanical assertions | All assertions true | All assertions true | Pass |

## Error Log
| Timestamp | Error | Attempt | Resolution |
|-----------|-------|---------|------------|
| 2026-09-03 | Patch context mismatch in mobile heading styles | 1 | Located the exact blocks with `rg` and retried with minimal context. |
| 2026-09-03 | Browser diagnostic reported `parseFloat is not a function` | 1 | Switched the diagnostic to `Number.parseFloat`; page implementation was unaffected. |
| 2026-09-03 | Radius pre-flight regex returned a false failure | 1 | Confirmed every scoped radius is zero and changed the check to inspect declarations line by line. |
| 2026-09-03 | PowerShell parser rejected a quoted `Contains` expression | 1 | Replaced it with a simpler `-notmatch` assertion. |
| 2026-09-03 | Revised PowerShell pre-flight retained an unterminated ID string | 2 | Removed string interpolation from the command entirely. |
| 2026-09-03 | Completion-plan multi-file patch had a context mismatch | 1 | Split the update into small file-specific patches. |

## Session: 2026-09-03, second visual pass

### Phase 6: Second-pass direction and re-audit
- **Status:** complete
- Actions taken:
  - Accepted the user's rejection of the first visual direction without defending it.
  - Ran the required `ui-ux-pro-max` design-system search with balanced variance, subtle motion, and standard density.
  - Rejected the search's child-oriented font pairing as an audience mismatch.
  - Ran supplemental style, typography, color, and UX searches for adult developer education and long-form reading.
  - Defined a softer content-first course-reader direction that prioritizes navigation and code.
- Files created/modified:
  - `task_plan.md`
  - `findings.md`
  - `progress.md`

### Phase 7: Rebuild the lesson experience
- **Status:** complete
- Actions taken:
  - Restructured the page into a compact lesson header, course rail, and focused article surface.
  - Replaced the decorative lesson number with a real syntax overview.
  - Replaced the entire first-pass prototype stylesheet instead of stacking overrides.
  - Added responsive 960px and 640px layout transitions plus 44px minimum navigation targets.
  - Reworked code samples into dark developer-focused surfaces and softened teaching components.
  - Corrected a specificity collision that initially made the syntax overview inherit inline-code colors.
  - Visually reviewed the revised first screen, 375px mobile composition, breakpoint behavior, and the full Go/TypeScript code comparison.
  - Confirmed the lesson retains all 17 code samples, 5 quizzes, 3 disclosures, citations, exercises, and local highlighting behavior.
  - Added polite live regions to quiz feedback and a data favicon to remove the only local browser-console error.
- Files created/modified:
  - `lessons/0003-control-flow.html`
  - `assets/style.css`

### Phase 8: Visual and functional verification
- **Status:** complete
- Actions taken:
  - Captured and reviewed fresh Chrome screenshots at 375px, 768px, 1024px, 1440px, and 1440px dark mode.
  - Measured responsive columns, navigation height, touch targets, horizontal overflow, and sticky-rail behavior through Chrome DevTools Protocol.
  - Verified dark mode, reduced motion, reduced transparency, syntax highlighting, quiz state changes, and live-region output in an uncached browser pass.
  - Measured 25 representative light/dark/code contrast pairs; all passed WCAG AA with a minimum ratio of 5.01:1.
  - Ran the seven-page syntax-highlighting test, both JavaScript syntax checks, structural HTML checks, and focused diff checks successfully.
  - Stopped the temporary HTTP server and headless Chrome QA process.

### Phase 9: Second-pass delivery
- **Status:** complete
- Actions taken:
  - Completed the UI/UX pre-delivery checklist.
  - Kept the redesign scoped to lesson 3 pending the user's visual approval.

### Phase 10: Stack comparison examples vertically
- **Status:** complete
- Actions taken:
  - Changed the comparison grid from two desktop columns to one full-width column at every breakpoint.
  - Removed the comparison code panel's equal-height calculation so short and long examples size naturally.
  - Reviewed a fresh 1440px Chrome screenshot and reran syntax-highlighting, JavaScript syntax, and focused diff checks successfully.
- Files modified:
  - `assets/style.css`

### Phase 11: Prepare the static site for GitHub Pages
- **Status:** complete
- Actions taken:
  - Added a semantic root course index with GitHub project-path-safe relative asset and navigation URLs.
  - Added `.nojekyll` so GitHub Pages serves the static assets without Jekyll processing.
  - Added local-preview and GitHub Pages configuration instructions to the README.
  - Checked all local links across eight HTML documents and received HTTP 200 for the publication entry points and core assets.
  - Reviewed fresh desktop and mobile screenshots of the root URL; both preserve the existing course-index design and remain free of horizontal overflow.
- Files created/modified:
  - `index.html`
  - `.nojekyll`
  - `README.md`

### Error log, second pass
- Full-file CSS replacement patch failed because its generated terminator was attached to the final added line. No CSS changes were applied. The retry adds an explicit newline.
- The retry used delete and add operations on the same path, which `apply_patch` rejects. No CSS changes were applied. The next attempt uses an exact in-place update hunk.
- A browser scroll gesture timed out while preparing the 375px screenshot. The viewport/reload completed; the retry uses the Home key rather than repeating the same gesture.
- A combined PowerShell command that started Chrome and ran a CDP audit was rejected by execution policy. No project files were affected; the retry starts the browser as a normal managed terminal process and audits it separately.
- The first listener-inspection command produced a PowerShell empty-pipe parse error. The retry stored loop output in a variable before formatting it.

### Error log, project-wide continuation
- PowerShell rejected the `Start-Process` command used to launch the local preview server. No project files were affected; the next attempt uses a managed terminal session.

  - The browser wait helper rejected `networkidle`. The next inspection uses the supported `domcontentloaded` state and a fresh rendered-state check.
- Two combined planning-file patches missed an expected progress-log context line. No files were changed by those attempts; the update was split into smaller exact patches.

## 5-Question Reboot Check
| Question | Answer |
|----------|--------|
| Where am I? | Complete |
| Where am I going? | Awaiting user review before propagating the system to all lessons |
| What's the goal? | A polished lesson 3 prototype that preserves content and functionality |
| What have I learned? | See `findings.md` |
| What have I done? | See above |

## Session: 2026-09-03, project-wide continuation

### Phase 11: Re-audit the current prototype and remaining pages
- **Status:** complete
- Actions taken:
  - Restored the completed lesson 3 prototype context and prior visual QA findings.
  - Read repository instructions and confirmed the working tree still contains user-owned lesson/demo changes.
  - Interpreted the latest request as authorization to extend the validated course-reader system across the project.
  - Selected rendered browser inspection as the visual QA path for all page types.
  - Started a local static preview at `http://127.0.0.1:4173/` and connected the in-app browser for responsive inspection.
  - Confirmed the project has seven static HTML pages; lesson 3 alone carries the complete course-reader shell.
  - Visually compared lesson 3 with the course index and lesson 1 at the default desktop viewport.
  - Confirmed the second-pass lesson 3 direction is suitable for project-wide propagation; the legacy pages are the main remaining design weakness.
  - Read the full shared stylesheet and representative index, lesson, and reference markup.
  - Chose to generalize the existing native-CSS reader shell with small page-type variants rather than introduce a framework or another design layer.

### Phase 12: Apply the approved course-reader system site-wide
- **Status:** complete
- Actions taken:
  - Added the shared branded navigation, skip links, structured lesson headers, syntax previews, lesson rails, and article surfaces to lessons 1 and 2.
  - Added page-specific course-index and reference shells to the course home and all three reference pages.
  - Added live-region semantics to the six quiz feedback nodes that were missing them.
  - Extended the shared CSS with index, reference, table, responsive, dark-mode, and navigation states while retaining the established lesson 3 tokens.
  - Verified the redesigned lesson 1 at 1440px: shared shell rendered correctly, all 10 code blocks highlighted, and document width remained within the viewport.
  - Detected stale course-index markup in the browser after static-file edits and queued an explicit reload before evaluation.
  - Explicitly reloaded and verified the course index at 1440px; the new markup, three course rows, navigation, and hero all rendered correctly.
  - Verified reference 1 at 1440px; both tables and both highlighted code blocks rendered inside the compact reference layout without document overflow.
  - Verified lesson 2 at 375px; navigation, hero, syntax overview, lesson outline, quiz touch targets, highlighting, and overflow metrics passed.
  - Found and fixed a mobile course-index overflow caused by table min-content sizing inside the page Grid.
  - Revalidated the course index at 375px; the page no longer overflows and the table is now its own horizontal scroll region.
  - Verified reference 2 at 375px; all four tables remain contained and scrollable, with stable navigation and header layout.

### Phase 13: Cross-page visual and functional verification
- **Status:** complete
- Actions taken:
  - Began repository-level regression checks after desktop and mobile visual validation of all three page types.
  - Passed course-quality, seven-page syntax-highlighting, JavaScript syntax, and focused diff checks.
  - Swept all seven pages at 375px and confirmed stable landmarks, resolved links, initialized highlighting, and zero page-level horizontal overflow.
  - Swept all seven pages at 1440px and confirmed stable header columns, content counts, outline targets, and zero page-level horizontal overflow.
  - The first quiz-interaction locator timed out after navigation. No project state changed; the next step is a fresh DOM inspection before retargeting.
  - Inspected the fresh DOM and confirmed the prior clicks had completed; the first quiz passed the wrong-then-correct cycle with four disabled options, correct feedback, a polite live region, and no console warnings/errors.
  - Replaced the course-index link to the raw README with a direct “开始学习” route and retired the obsolete lesson-3 prototype class.
  - Verified the shared dark theme on the redesigned course index and restored light-mode emulation afterward.
  - Added unique page descriptions and matching light/dark browser theme colors across all seven HTML pages.
  - Re-ran all repository, JavaScript, highlighting, structure, and diff checks successfully after the final refinements.

### Phase 14: Delivery
- **Status:** complete
- Actions taken:
  - Reset the temporary responsive viewport and left the final course index open as a user-facing browser preview.
  - Prepared the project-wide design summary, verification evidence, and working-tree preservation note.
  - The first structural-audit command hit PowerShell's empty-pipeline parse error. No files were affected; the retry stores loop output before formatting it.

## Session: 2026-09-03, UIZZE anti-slop finish gate

### Phase 15: Anti-slop rendered audit
- **Status:** complete
- Actions taken:
  - Generated and read the complete `anti-ui-slop` skill through the CLI's well-known discovery path.
  - Resolved its supporting-files directory and loaded only `reference/polish.md` as required.
  - Defined the scope as a rendered polish pass that preserves the existing course-reader system.
  - Prepared the existing in-app browser workflow for desktop and mobile rendered inspection.
  - Inspected the course index at 1440x900 and identified excessive above-the-fold height as the largest observable hierarchy problem.
  - Inspected the course index and lesson 1 at 375x812. The lesson page works; the course index needs a tighter first screen and a non-scrolling mobile course list.
  - Defined a narrow polish contract limited to the course-index layout and its mobile table presentation.
  - Rechecked lesson 1 at 1440px and confirmed its layout is already balanced; excluded lesson pages from the fix scope.

### Phase 16: Focused polish pass
- **Status:** complete
- Files modified:
  - `assets/style.css`
  - `lessons/0000-course-list.html`
  - `lessons/0001-hello-world-and-toolchain.html`
  - `lessons/0002-variables-and-types.html`
  - `reference/0001-js-go-quick-reference.html`
  - `reference/0002-variables-types.html`
  - `reference/0003-control-flow.html`
- Files modified:
  - `task_plan.md`
  - `findings.md`
  - `progress.md`

## Session: 2026-09-03, lesson 3 compiler-style prototype

### Phase 20: Lesson 3 compiler-style prototype
- **Status:** complete
- Actions taken:
  - Restored the design proposal, repository constraints, and prior audit findings.
  - Confirmed the implementation will be scoped to lesson 3 before wider propagation.
  - Rechecked the dirty working tree and preserved all existing user-owned changes.
  - Added the `compiler-lesson` prototype scope to lesson 3 only.
  - Rebuilt the lesson header around a `TS↳GO` migration map and moved the learning victory into a compact header rail.
  - Added five semantic mapping rails between the existing Go-first and TypeScript-second code examples.
  - Added flat compiler-publication styling for the navigation, header, rail, article, code comparisons, callouts, quizzes, dark mode, mobile layout, and print behavior.
  - Passed course-quality, seven-page syntax-highlighting, both JavaScript syntax checks, structural assertions, and `git diff --check`.
- Error:
  - The first combined read attempted unsupported Node helpers inside code-mode execution and failed before any filesystem action. The retry used a native PowerShell command.
  - The first lesson-structure read used one shell-escaped regex and passed an array through `Select-String -InputObject`, so the regex failed and block line numbers collapsed to line 1. No files were affected; the retry uses separate patterns and path-based matching.

### Phase 21: Prototype verification
- **Status:** complete
- Actions taken:
  - Rendered the new lesson 3 prototype at 1440x900 and 375x812.
  - Confirmed stable desktop columns, five mapping rails, 17 highlighted code blocks, and no page-level horizontal overflow.
  - Identified one mobile hierarchy issue: the 624px header delays the article until 913px.
  - Reduced migration-map row height, shortened the learning-victory sentence, tightened header spacing, and reduced the mobile outline height.
  - Re-rendered after waiting for the intentional entrance animation; desktop and mobile map text reached full opacity and the mobile article moved up by roughly 106px.
  - Removed one redundant “TypeScript 对照” metadata item from the mobile composition only, because the migration map already states that relationship.
  - Fixed a CSS specificity collision that caused the semantic rail to inherit the old dark comparison-panel background.
  - Added an explicit reduced-motion override so all migration-map rows render immediately at full opacity.
  - Measured representative dark-mode contrast pairs; all five were at least 10.10:1.
  - Re-rendered lesson 2 at 375px and confirmed it retains the prior design with no compiler-prototype markup or page overflow.
  - Exercised lesson 3's first quiz at 375px through a wrong choice followed by the correct choice; visual states, disabled controls, explanatory feedback, live-region semantics, and console output all passed.
  - Completed final light/dark contrast checks; all representative pairs pass WCAG AA, with 5.95:1 as the lowest measured light-mode ratio and 10.10:1 as the lowest measured dark-mode ratio.
  - Verified responsive layouts at 375, 768, and 1440px with no page-level horizontal overflow and touch targets at least 48.25px where measured.
  - Re-ran course quality, syntax highlighting for seven pages, both JavaScript syntax checks, prototype structural assertions, and `git diff --check` successfully.
  - Reset temporary browser emulation and kept the final lesson 3 preview available for user review.
- Error:
  - The retained preview tab from the prior turn was stale. The browser binding remained valid, so a fresh tab was obtained instead of reselecting the browser.
  - A combined comparison-component audit completed its desktop measurement but timed out resolving the mobile locator after hash navigation. The mobile check will run separately from a top-of-page reload.

### Phase 17: Hard finish gate
- **Status:** complete
- Actions taken:
  - Re-rendered the course index at 1440x900 and 375x812 after the CSS polish.
  - Confirmed the desktop catalogue enters the first viewport and the mobile catalogue begins at the first viewport boundary.
  - Confirmed the mobile course list renders as three complete stacked cards with no page-level horizontal overflow.
  - Clicked lesson 1 from the course list and verified navigation reused the same browser tab.
  - Passed course-quality checks with PowerShell Core, syntax-highlighting checks for all seven pages, both JavaScript syntax checks, and focused `git diff --check`.
  - Preserved unrelated demo and sandbox changes already present in the working tree.
- Note:
  - Windows PowerShell 5 parses the UTF-8-without-BOM Chinese assertions in `course-quality.ps1` as ANSI; PowerShell Core runs the same script successfully.

## Session: 2026-09-03, distinctive design proposal

### Phase 18: Current-state design audit
- **Status:** complete
- Actions taken:
  - Read the requested `frontend-design` skill and the repository's course-design constraints.
  - Restored the existing planning files and preserved all user-owned working-tree changes.
  - Audited the live 1440px course index and lesson 3 render.
  - Confirmed the current system is usable and polished, but its identity relies on familiar docs/SaaS motifs more than the course's translation-based teaching method.
  - Audited the same two surfaces at 375x812 and confirmed stable responsive behavior with a too-late course catalogue and an under-expressive collapsed brand.
  - Audited a representative reference page at desktop and mobile sizes; its information density and overflow behavior pass, while its hero silhouette remains too similar to the other page types.
- Error: a PowerShell page-inventory command used a pipeline directly after `foreach`, producing an empty-pipe parser error. No files were affected; the retry stores results before formatting.

### Phase 19: Distinctive design proposal
- **Status:** complete
- Actions taken:
  - Defined the “Mental Model Compiler” product framing and the `TS ↳ GO` brand expression.
  - Designed a semantic mapping rail that preserves Go-first, TypeScript-second comparison order while adding explicit “retain/change” teaching cues.
  - Specified exact colors, type roles, spacing, shape, motion, responsive behavior, accessibility gates, and page-type wireframes.
  - Self-critiqued and removed generic terminal-card, oversized rounded-Hero, mascot, and scattered-animation directions.
  - Wrote a three-phase implementation path and measurable acceptance criteria.
- Files created:
  - `docs/design-direction.md`
- Production files intentionally unchanged:
  - `assets/style.css`
  - `lessons/*.html`
  - `reference/*.html`
  - `assets/*.js`
- Verification:
  - Confirmed all required proposal sections, all three implementation phases, and the established Go-first comparison rule are present.
  - `git diff --check` completed without whitespace errors; output contains only the repository's existing LF-to-CRLF warnings.
  - Reset the temporary responsive browser viewport and stopped the local preview server.
- Files modified:
  - `task_plan.md`
  - `findings.md`
  - `progress.md`

## 2026-09-03: IconPark and site-wide style propagation started
- User approved IconPark as the sole icon family and requested all remaining pages to match lesson 3.
- Re-read the course-design constraints and established a three-phase implementation and verification plan.
- Current target: official local SVG assets, shared accessible icon markup, then index/lesson/reference alignment.
- Verified the official IconPark package metadata and inspected the current structural differences across all seven pages.
- Added an eight-symbol IconPark outline sprite, source notes, and the upstream Apache-2.0 license under `assets/icons/`.
- Validated the sprite as XML; all symbols use the shared 48 by 48 coordinate system and `currentColor`.
- Added shared IconPark navigation, time, source, and quiz-feedback affordances without adding a runtime dependency.
- Promoted the flat lesson 3 compiler style to the index, lessons 1–2, and all reference pages; lesson and reference content now use 16px card rhythm.
- Added plain-language `相同点 / 不同点` rails to the remaining Go/TypeScript comparison blocks.
- Browser-verified the course index and lesson 1 at 1440 by 900; IconPark renders from the local sprite and the lesson card rhythm matches lesson 3.
- Browser-verified reference 2 at desktop and the index at 375px; simplified the index headline after the mobile audit exposed unnecessary hero height.
- Rechecked the revised mobile index and lesson 2 at 375px; the first course title is now visible and the lesson retains 336px cards, 16px gaps, and accessible quiz target sizes.
- Browser-verified reference 3 at 375px; page width remains stable and the dense table scrolls only inside its card.
- Verified a dark desktop reference page and the lesson 3 quiz feedback cycle; IconPark check/close states render correctly and browser logs are clean.
- Swept all seven pages at 768px with no page-level overflow or unresolved icon markup.
- Re-ran course quality, syntax highlighting, JavaScript syntax, and diff checks; all passed.
- Phase 24 complete. The IconPark asset system and approved lesson 3 visual language are now propagated across the full static course.

## 2026-09-03: Canonical standards directory
- Created `docs/standards/` as the single entry point for product language, course content, visual design, page contracts, and quality gates.
- Updated `AGENTS.md` so future agents must read the standards for lessons, demos, references, navigation, icons, learning progress, and course UI.
- Replaced the prior course-design and exploratory design-direction files with compatibility pointers to prevent stale terminology from competing with the final system.
- Verified all six canonical documents and their entry links, every documented CSS/icon reference, approved terminology, course-quality checks, syntax-highlighting checks, and diff whitespace.
- Phase 25 complete. Future agents now have one task-routed standards entry point and checkable completion criteria.
