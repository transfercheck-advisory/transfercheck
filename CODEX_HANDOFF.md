# Transfer Compass Codex Handoff

This file is a handoff note for continuing the same project from another Codex account.

## Project Location

Workspace:

`C:\Users\user\OneDrive\바탕 화면\transfer app`

Current local app URL:

`file:///C:/Users/user/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/transfer%20app/index.html`

Strategy Engine section:

`file:///C:/Users/user/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/transfer%20app/index.html#demo`

## Core Files

- `index.html`: static page structure and sections.
- `styles.css`: full UI styling.
- `app.js`: app logic, strategy/risk rendering, search controls, roadmap, local auth, feedback.
- `transfer-data.js`: generated university/major requirement database.
- `course-catalog.js`: normalized common course catalog and matching patterns.
- `uc-verification-review.csv` / `uc-verification-review.json`: generated UC-only data quality review files.
- `needs-review-items.*`: earlier broader review exports.

## Current Product Direction

The app should be positioned as a:

`Transfer Strategy Engine`

It is not an admissions predictor and must not imply admissions guarantees.

Avoid these user-facing phrases:

- `지원 가능`
- `합격`
- `조건 충족`
- `충족`
- `미충족`
- `지원 자격`
- `보완 필요`

Preferred wording:

- `추천 검토`
- `추천`
- `리스크`
- `리스크 높음`
- `커버됨`
- `requirement coverage`
- `strategy`
- `risk factors`
- `official source check`

The current UI already changed most major wording:

- Page title: `Transfer Strategy Engine`
- Main CTA: `전략 커버리지 보기`
- Result status: `추천 검토`, `추천 검토 · 확인 필요`, `리스크 높음`
- Individual checks: `커버됨` / `리스크`
- Extra suggested schools: `추가 추천 대학`

## Current Feature State

### Strategy Engine

The main tab lets users enter:

- GPA
- credits
- international student toggle
- English score type and score
- completed common courses
- up to 10 target university/major pairs

Then it shows requirement coverage and risk elements for selected programs.

The result buttons now scroll:

- `전략 리스크 보기` scrolls to `#eligibilityResults`
- `추가 추천 학교 보기` scrolls to `#recommendationPanel`

### Course Order

The course input UI and displayed result order use this order:

1. Math
2. Physics
3. Chemistry
4. Science
5. English
6. Computer
7. Engineering

Labs are separate selectable items and are no longer counted as lecture course units in roadmap logic.

### Requirement Search

Requirement search supports typing and scrolling by school/major.

### Roadmap

The roadmap tries to place up to 4 lecture courses per term, with labs co-scheduled and not counted as separate lecture units. English 1 and English 2 are fixed to the first and second terms.

### Feedback

Feedback is at the bottom of the page. It is stored locally in browser `localStorage` under:

`transferCompassFeedback`

This is only a local/static prototype. Real cross-user feedback collection needs a backend, Firebase/Supabase, Formspree, Google Sheets API, or similar.

### Login / Signup

Login and signup have been added to the top header.

Current implementation is a local static demo only:

- account data stored in browser `localStorage`
- key: `transferCompassAuth`
- passwords are hashed with browser `crypto.subtle.digest("SHA-256")`
- not production-grade authentication

Production auth should use secure server-side auth or a hosted auth provider.

## Data Status

Current database size:

- 25 schools
- 307 engineering programs/majors

Schools currently included:

- University of Washington
- University of Michigan
- Columbia University
- Ohio State University
- UIUC
- NYU Tandon
- Texas A&M
- UC San Diego
- UC System
- UC Irvine
- Cornell (Duffield)
- UW-Madison
- UT Austin (Cockrell)
- Purdue
- Georgia Tech
- UC Berkeley (COE)
- Penn State
- Virginia Tech
- University of Virginia (UVA)
- Washington University in St. Louis (WashU)
- UNC Chapel Hill
- MIT
- Stanford University
- Yale University
- Harvard University

## Important Data Fixes Already Done

### English Score Parsing

Fixed TOEFL parsing errors caused by dates such as `Jan 21, 2026`.

Verified examples:

- Cornell: TOEFL 100, revised TOEFL 5.0, IELTS 7.5, Duolingo 130
- Purdue: TOEFL 88, revised TOEFL 4.5, IELTS 6.5, Duolingo 115
- Penn State: TOEFL 80, revised TOEFL 4.5, IELTS 6.5, Duolingo 120
- Yale: TOEFL 100, revised TOEFL 5.0
- Stanford: TOEFL/IELTS/Duolingo null because English testing is optional/no minimum in the local data

### MIT

MIT was incorrectly showing the same GIR preparation courses as both required and recommended.

Current correction:

- MIT required courses are empty because MIT does not publish required transfer prerequisite courses.
- MIT GIR preparation remains recommended/strategy preparation only.

### Cornell

The old phrase `필수 추가 조건` was changed to:

`나머지 필수 요건`

with explanatory text that these are requirement coverage/risk items, not separate recommendations.

### UC

UC data is considered high-risk and now shows a warning badge:

`UC 데이터 검증 필요`

Reason: UC campus/major/ASSIST requirements vary heavily, and current UC data likely has mistakes.

Generated review files:

- `uc-verification-review.csv`
- `uc-verification-review.json`

These contain 45 UC-related programs. 44 were classified as high-priority review.

## Known Data Risk / Next Priority

The highest priority is data quality.

Recommended next task:

Create a full non-UC data quality audit file, e.g.

`data-quality-audit.csv`

Suggested columns:

- school
- major
- risk_level
- source_present
- official_source_type
- required_recommended_mixed
- numeric_score_suspect
- gpa_suspect
- credit_suspect
- same_requirements_as_other_majors
- needs_official_check
- notes

Use automation to reduce manual checking. The user should not manually read hundreds of entries unless flagged.

Suggested risk signals:

- UC or ASSIST required
- major-specific wording but identical requirements across many majors
- `official required courses 없음`
- `recommended`, `generally`, `competitive`, `holistic` mixed into required
- dates parsed as scores
- TOEFL outside 60-120
- TOEFL 2026 revised outside 0-6
- IELTS outside 0-9
- Duolingo outside 80-160
- GPA above 4.0 or below 0
- missing raw source/note

## Legal / Monetization Direction

The app should avoid guarantee-like claims. Keep it as strategy/risk guidance.

Before monetization, add:

- Terms of Service
- Privacy Policy
- Refund/Cancellation Policy
- clear pricing page
- cancellation flow for subscriptions
- clear distinction between free/pro features
- data accuracy disclaimer
- official source verification disclaimer

Legal risk areas to keep in mind:

- deceptive advertising/unsupported claims
- subscription auto-renewal and cancellation
- privacy/security for student profile data
- testimonials/affiliate disclosures
- payment dispute/refund rules
- minors or under-13 use if relevant

Need lawyer review before paid launch.

## Current Cache Version

Current cache-busting version in `index.html`:

`20260528-8`

If changing CSS/JS/data, bump all three script/style query params.

## Verification Commands

Use the bundled Node runtime if ordinary `node` is blocked:

`C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe`

Syntax checks:

```powershell
& 'C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check app.js
& 'C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check transfer-data.js
& 'C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check course-catalog.js
```

Database count check:

```powershell
@'
const fs=require('fs');
const vm=require('vm');
const sandbox={window:{}};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('transfer-data.js','utf8'),sandbox);
const db=sandbox.window.transferDatabase;
console.log({schools:db.schools.length, programs:db.schools.flatMap(s=>s.majors).length});
'@ | & 'C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' -
```

## Browser Note

Codex browser automation may reject direct `file://` navigation because of browser security policy. If that happens, rely on syntax checks and ask the user to open/refresh the local file manually.

User should refresh with:

`Ctrl + F5`

## Suggested Next Steps

1. Build `data-quality-audit.csv` for all schools.
2. Put non-UC schools into confidence buckets: `verified`, `needs source check`, `high risk`.
3. Add visible `Verified / Needs Review` badges per school/program.
4. Add production-grade auth plan if deployment is next.
5. Draft Terms/Privacy/Pricing pages before adding paid plans.
6. For UC, use `uc-verification-review.csv` as the source of truth for correction work.

