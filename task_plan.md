# Task Plan: High-taste lesson page prototype

## Goal
Redesign lesson 3 as a polished, distinctive Go learning page while preserving its content, functionality, and dependency-light static architecture.

## Current Phase
Complete

## Phases

### Phase 1: Audit current implementation
- [x] Record existing brand, layout, component, accessibility, and functional patterns
- [x] Separate user changes from redesign work
- [x] Capture baseline screenshots at desktop and mobile sizes
- **Status:** complete

### Phase 2: Define the visual system
- [x] Choose palette, typography, spacing, shape, and motion rules
- [x] Define the signature Go-to-TypeScript comparison treatment
- [x] Confirm native CSS remains the appropriate implementation
- **Status:** complete

### Phase 3: Implement the lesson 3 prototype
- [x] Refine shared CSS without breaking the other lesson/reference pages
- [x] Add only the semantic structure needed by the prototype
- [x] Preserve quiz and syntax-highlighting behavior
- [x] Add dark mode, responsive behavior, focus states, and reduced-motion handling
- **Status:** complete

### Phase 4: Browser and regression verification
- [x] Verify desktop and mobile composition visually
- [x] Test quiz behavior and syntax highlighting
- [x] Run repository tests and inspect all changed files
- [x] Complete the design pre-flight audit
- **Status:** complete

### Phase 5: Delivery
- [x] Summarize the design direction and implementation
- [x] Identify what should be propagated to the remaining pages
- **Status:** complete

### Phase 6: Second-pass direction and re-audit
- [x] Accept the visual-quality rejection and identify why the first direction failed
- [x] Generate a new design system with `ui-ux-pro-max`
- [x] Reject mismatched child-oriented recommendations and supplement with developer/editorial searches
- [x] Record the revised content-first product direction
- **Status:** complete

### Phase 7: Rebuild the lesson experience
- [x] Replace the poster-style hero with a compact course-reading shell
- [x] Add a useful sticky lesson rail on desktop and compact navigation on mobile
- [x] Rework code comparisons, learning callouts, details, and quizzes with softer hierarchy
- [x] Preserve all existing lesson content and behavior
- **Status:** complete

### Phase 8: Visual and functional verification
- [x] Verify 375px, 768px, 1024px, and 1440px layouts
- [x] Verify touch targets, overflow, navigation, quiz, highlighting, and console state
- [x] Verify light/dark contrast and reduced motion
- [x] Run repository tests and focused diff checks
- **Status:** complete

### Phase 9: Second-pass delivery
- [x] Complete the UI/UX checklist
- [x] Summarize the new direction and material changes
- **Status:** complete

### Phase 10: Stack comparison examples vertically
- [x] Replace desktop side-by-side comparison columns with a single full-width flow
- [x] Remove equal-height code behavior so each example uses its natural height
- [x] Recheck the desktop composition and regression tests
- **Status:** complete

### Phase 11: Prepare the static site for GitHub Pages
- [x] Add a root `index.html` with repository-root-safe relative paths
- [x] Add `.nojekyll` and document the Pages configuration
- [x] Verify local links, assets, responsive rendering, and HTTP responses
- **Status:** complete

### Phase 11: Re-audit the current prototype and remaining pages
- [x] Inspect every page, shared asset, and current working-tree diff
- [x] Recheck the lesson 3 prototype visually at desktop and mobile sizes
- [x] Define the smallest safe set of shared patterns to propagate
- **Status:** complete

### Phase 12: Apply the approved course-reader system site-wide
- [x] Bring the course index, lessons, and references into one coherent visual system
- [x] Preserve all lesson content, demos, quiz behavior, and highlighting
- [x] Add page-specific semantic structure only where needed
- **Status:** complete

### Phase 13: Cross-page visual and functional verification
- [x] Verify representative desktop and mobile layouts for every page type
- [x] Check overflow, navigation, focus, contrast, syntax highlighting, and quizzes
- [x] Run repository tests and inspect the final diff
- **Status:** complete

### Phase 14: Delivery
- [x] Summarize the final design system and page coverage
- [x] Report verification results and any preserved user-owned changes
- **Status:** complete

### Phase 15: Anti-slop rendered audit
- [x] Inspect the current course index and representative lesson at desktop and mobile sizes
- [x] Identify only the largest observable finish-quality problems
- [x] Define a narrow design contract for the polish pass
- **Status:** complete

### Phase 16: Focused polish pass
- [x] Fix the related observable problems without changing content or interaction conventions
- [x] Reuse the existing tokens and native CSS components
- **Status:** complete

### Phase 17: Hard finish gate
- [x] Re-render changed surfaces at representative sizes
- [x] Verify clipping, overflow, focus, contrast, links, and existing tests
- **Status:** complete

### Phase 18: Current-state design audit
- [x] Re-read the repository and course-design constraints
- [x] Inspect the current course index and representative lesson at 1440px
- [x] Inspect the current course index and representative lesson at 375px
- [x] Identify the strongest product-specific direction and the weakest generic patterns
- **Status:** complete

### Phase 19: Distinctive design proposal
- [x] Define the subject, audience, and single product job
- [x] Produce color, type, layout, motion, component, and responsive decisions
- [x] Critique the proposal for generic AI-design defaults and revise it
- [x] Deliver a phased implementation plan without changing production files
- **Status:** complete

### Phase 20: Lesson 3 compiler-style prototype
- [x] Re-audit lesson 3 markup and the shared CSS cascade
- [x] Add a lesson-3-only prototype scope and semantic mapping rails
- [x] Implement the revised header, reading surface, code comparisons, and responsive states
- [x] Preserve lesson content, Go-first comparison order, quizzes, and highlighting
- **Status:** complete

### Phase 21: Prototype verification
- [x] Run course, syntax-highlighting, JavaScript, and diff checks
- [x] Inspect lesson 3 at desktop, tablet, mobile, dark, and reduced-motion states
- [x] Verify no horizontal overflow and no regressions on a non-prototype lesson
- [x] Deliver the prototype for visual review
- **Status:** complete

### Phase 22: IconPark asset system
- [x] Select a small functional icon set from the official IconPark source
- [x] Vendor optimized SVG assets and retain the upstream license notice
- [x] Define one accessible icon component pattern for static HTML
- **Status:** complete

### Phase 23: Propagate the approved lesson 3 style
- [x] Align the course index, lessons 1–2, and three reference pages with lesson 3
- [x] Apply icons only to navigation, metadata, external links, and feedback affordances
- [x] Preserve all content, URLs, anchors, Go-first comparison order, quizzes, and highlighting
- **Status:** complete

### Phase 24: Cross-page finish gate
- [x] Run repository and syntax checks
- [x] Inspect all three page types at desktop and mobile widths
- [x] Verify dark mode, overflow, focus, icon accessibility, and quiz interaction
- **Status:** complete

### Phase 25: Canonical project standards
- [x] Create one standards entry point under `docs/standards/`
- [x] Record product language, course content, visual system, page contracts, and quality gates
- [x] Point `AGENTS.md` at the new source of truth and retire conflicting proposal documents
- [x] Verify links, terminology, and documented class/icon references
- **Status:** complete

## Key Questions
1. How can the page feel like a purpose-built Go learning publication rather than a generic documentation template?
2. Which shared CSS changes are safe for all current pages, and which should remain lesson-3-specific during the prototype stage?
3. Does the redesign remain readable, responsive, accessible, and fast without introducing a framework?

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Redesign mode: preserve | Keep lesson content, URL, information order, quiz markup, and existing JavaScript behavior. |
| Native CSS foundation | The site is static, already tokenized, and has a small component vocabulary. |
| Dials: variance 6, motion 4, density 4 | Enough character for a premium editorial result while protecting long-form reading. |
| Split the title into subject plus descriptive deck | Keeps the main heading concise while preserving the original lesson promise and improving responsive line control. |
| Retire the first-pass cold technical-poster direction | User feedback confirms that its oversized heading, sparse first screen, and hard geometry do not produce the desired learning experience. |
| Use Content First plus a soft developer-docs shell | Matches a long-form adult learning product and keeps navigation and code examples more prominent than decoration. |
| Ignore Baloo 2 and Comic Neue from the initial search | The database matched generic education rather than an adult developer audience; supplementary searches favor Noto Sans SC plus a developer monospace. |
| Stack Go and TypeScript examples vertically | Full article width accommodates longer code and preserves a clear Go-first reading order. |
| Use a real root course index instead of a redirect | The Pages root remains useful to users, search engines, and browsers without JavaScript. |
| Treat the latest request as approval to continue beyond lesson 3 | The user asked to design the project as a whole after the prototype work; implementation will remain inside the existing static stack. |
| Use “Mental Model Compiler” as the new direction | It turns the course's real TS-to-Go teaching method into the identity rather than applying another developer-site theme. |
| Make the semantic mapping rail the signature element | It explains what knowledge transfers and what changes while preserving the required Go-first, TypeScript-second order. |
| Keep production code unchanged in this turn | The request is for analysis and a design proposal; implementation should begin with an explicitly reviewed two-page prototype. |
| Scope the implementation with `body.compiler-lesson` | The user asked to change lesson 3 first; this prevents visual experimentation from leaking into approved pages. |
| Vendor a small IconPark SVG set | The user prefers IconPark and the static site does not need a package or runtime for a small fixed icon vocabulary. |
| Keep icons functional rather than decorative | Navigation and state recognition improve, while lesson headings remain typographic and content-first. |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Combined patch missed the mobile heading context | 1 | Inspected exact line context and applied a narrower patch. |
| Browser line-count diagnostic could not call global `parseFloat` | 1 | Use `Number.parseFloat` in the next read-only diagnostic. |
| Radius pre-flight regex falsely rejected `border-radius: 0` | 1 | Replace the backtracking regex with a line-based nonzero-value check. |
| PowerShell pre-flight command had a quoted method-call parse error | 1 | Simplify the assertion to a direct regex test. |
| Revised pre-flight still had an unterminated interpolated ID string | 2 | Remove interpolation and validate IDs through direct regex matches. |
| Completion-plan patch had an oversized multi-file context mismatch | 1 | Split the update into small file-specific patches. |
| Generated full-file CSS patch missed a newline before its terminator | 1 | Rebuild the same patch with an explicit newline before `*** End Patch`. |
| `apply_patch` rejected delete-and-add operations for the same CSS file | 2 | Generate one update hunk that replaces the exact prototype suffix in place. |
| Mobile screenshot scroll-to-top gesture timed out | 1 | Use a keyboard Home action and then read the page state instead of repeating the gesture. |
| Combined Chrome/CDP PowerShell command was rejected by execution policy | 1 | Start Chrome as a managed terminal process, then run the CDP audit separately. |
| Listener-inspection pipeline had an empty-pipe parse error | 1 | Assign the loop output to a variable before formatting it. |
| PowerShell rejected the background HTTP server launch command | 1 | Run the server as a managed terminal session instead of retrying `Start-Process`. |
| In-app browser wait helper does not support `networkidle` | 1 | Use its supported `domcontentloaded` state and verify the rendered DOM separately. |
| Combined planning-file patch missed a progress-log context line | 1 | Inspect the exact file tails and apply a smaller context-specific patch. |
| PowerShell structural-audit loop caused an empty pipeline parse error | 1 | Assign the loop results to a collection before formatting, as in the prior known fix. |
| Browser quiz locator timed out on lesson 1 after navigation | 1 | Inspect the current DOM state before retargeting the interaction; do not repeat the same locator sequence blindly. |
| Exact `skills use` URL command rejected the homepage as a SKILL.md | 1 | Use the CLI's well-known discovery path with `--full-depth`; it generated the requested skill and supporting-files directory. |
| Skills Directory page fetch timed out after a partial response | 1 | Stop fetching the large page; rely on the CLI well-known discovery and generated skill output. |
| PowerShell rejected a pipeline directly after the page-inventory `foreach` block | 1 | Store the loop output in a collection before formatting, matching the repository's prior known workaround. |
| Initial multi-read orchestration used unsupported Node helpers inside code-mode exec | 1 | Replace it with one native PowerShell `exec_command`; no repository files were affected. |
| Lesson structure search had a shell-escaped regex and array-input line-number error | 1 | Use multiple `rg -e` patterns and `Select-String -LiteralPath` so PowerShell returns real file line numbers. |
| The browser tab retained from the prior turn was no longer in the active session | 1 | Reuse the existing browser binding but obtain a fresh live tab, as required by the browser workflow. |
| Combined desktop/mobile comparison inspection timed out on the mobile locator | 1 | Keep the completed desktop measurement, then reload to the top and inspect the mobile comparison in a separate browser call. |
| Lesson 4 review-output assertion expected one exact newline representation | 1 | Match the two numeric lines with whitespace-tolerant output validation while keeping all other assertions exact. |
| Combined Go/TypeScript validation command was rejected by execution policy because it included recursive temp cleanup | 1 | Split validation into non-destructive commands; use `tsc --noEmit` and Node's direct TypeScript execution so no output directory needs cleanup. |
| Recursive cleanup of the verified temporary IconPark package directory was blocked by command policy | 1 | Do not retry a destructive operation; leave the isolated OS temp directory in place because it is outside the repository and does not affect delivery. |

## Notes
- Existing working-tree edits belong to the user and must be preserved.
- The skill pre-flight forbids visible em-dashes in newly designed page copy.
- The second-pass prototype is complete; do not propagate it to other lessons until the user approves this visual direction.

### Phase 26: Define lesson 4 scope and evidence
- [x] Restore the mission, learning records, course standards, and nearby lesson patterns
- [x] Verify array, slice, capacity, append, and copy behavior against official Go sources
- [x] Define the smallest complete learning path for a TypeScript developer
- **Status:** complete

### Phase 27: Build lesson 4 artifacts
- [x] Add the runnable Go and TypeScript demos plus learner sandbox guidance
- [x] Add the lesson and compact reference page using shared components
- [x] Update course, previous/next, and reference navigation
- **Status:** complete

### Phase 28: Verify lesson 4
- [x] Format and run Go examples; type-check and run the TypeScript comparison
- [x] Extract and validate page examples, expected outputs, links, quizzes, and anchors
- [x] Run repository quality gates and inspect representative browser layouts
- **Status:** complete

### Phase 29: Deliver lesson 4
- [x] Record verified learning coverage and hand off the new lesson
- **Status:** complete
