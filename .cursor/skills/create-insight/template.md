# Insight Template & Example

Use when **planning or drafting** an Insight on [/insights/*](https://jitendersharma.dev/insights). Catalog → `docs/50 insight/10 Overview.mdx` · tags → `docs/00 content-bank/50 Tagging-Guidelines.mdx`.

---

## Planning block

Copy before you draft:

```text
Insight: [Title — tension or misconception, not a product name]
Slug: [kebab-case-slug]
Core pillar: [strategy-architecture / platforms-engineering / ai-intelligence / governance-trust]
Primary voice: [pov / lrn / arch / exp]
Topic tags: [rag · agents · observability · policy · … — optional]
THE CLAIM: [One memorable reframe in a sentence — "X is not Y"]
Status: 💡 Idea | ✏️ Draft | ✅ Ready
```

---

## Voice & tone (from published Insights)

Match the style of live pieces like *Policy-Governed Agent Runtime*, *Hallucinations Is a System Design Problem*, and *AI Observability in Enterprise*:

| Do | Don't |
| --- | --- |
| Open by naming the **wrong question** everyone asks | Open with definitions or market overview |
| State **THE CLAIM** early — a contrarian reframe | Hedge with "it depends" in the opening |
| Frame as **architecture breakdown**, not opinion | Frame as thought leadership fluff |
| Use **regulated enterprise** stakes (banking, audit, compliance) where relevant | Stay abstract or vendor-neutral only |
| Separate **intelligence (model)** from **truth / control (system)** | Blame or praise the model in isolation |
| Use **comparison tables** (wrong approach vs correct) | Long prose without structure |
| End with **:::tip[TAKEAWAY]::: — one line to remember** | End with a summary paragraph |
| Cross-link sibling Insights when the thesis connects | Write each piece in a vacuum |

**Sentence rhythm:** short punchy lines for tension; longer lines for mechanism. Bold key terms. Em dashes for contrast.

**Recurring reframes (use when they fit, don't force):**
- "X is not Y" — e.g. observability is not a dashboard; RAG is not a database; proposal is not permission
- "The model proposes / predicts; the system decides / owns truth"
- "Architecture problem, not a sprint item / tooling purchase"

---

## Page structure (published MDX)

### Frontmatter

```yaml
---
slug: [kebab-case]
title: [Title Case]
description: [One-line thesis — problem + architectural answer. No marketing.]
image: ./[slug].png
tags:
  - [core-pillar]      # one: strategy-architecture | platforms-engineering | ai-intelligence | governance-trust
  - [primary-voice]    # one: pov | lrn | arch | exp
  - [topic]            # optional: rag, agents, observability, policy, llm, …
authors: [iamsharmajitender]
---
```

### Body outline

Follow this order. Skip or shorten sections based on voice (`lrn` / `exp` may use fewer contracts; `arch` goes deep on diagrams and payloads).

```text
![Hero](./[slug].png)

# [Title — often with subtitle or tension in parentheses]

[Hook — 2–4 sentences. Name the wrong conversation. State what actually decides trustworthiness.]

[Framing line — e.g. "This is an architecture breakdown of …"]

:::tip[THE CLAIM]
**[Bold reframe.]** [2–4 sentences expanding the claim. Memorable enough to quote.]
:::

<!-- truncate -->

## The whole system on one page

[Numbered boundaries / stages / signals — 3–5 items in a bullet list]

[Mermaid diagram — flowchart or sequence. Use consistent classDef colors.]

[Bridge sentence — "Read it left to right: A → B → C. The rest walks each hop."]

## [Section 2 — why the obvious approach fails]

[Comparison table: wrong approach | correct approach]

:::important[TITLE]
[Non-negotiable boundary — authorization ≠ prompting, prediction ≠ truth, etc.]
:::

## [Section 3 — deep dive / walkthrough]

[Concrete scenario: wire transfer, citation failure, five signals, four training stages, etc.]

[Optional: sequence diagram for end-to-end flow]

[Optional: JSON contracts / payloads when showing trust boundaries]

## [Section 4 — objection or "why architecture, not tooling"]

[Table: "Engineering thinks…" | "Architecture decides…"]

:::note[OPTIONAL CROSS-LINK]
Same thesis as [linked Insight](./other-slug): reliability / control lives in the system around the model.
:::

:::tip[TAKEAWAY]
**[Repeat THE CLAIM in closing form.]** [One sentence on what production requires vs demo.]
:::
```

---

## Admonition cheat sheet

| Type | Use for |
| --- | --- |
| `:::tip[THE CLAIM]` | Opening thesis — required on every Insight |
| `:::tip[TAKEAWAY]` | Closing line — required on every Insight |
| `:::important[…]` | Hard boundaries; things that must not be conflated |
| `:::note[…]` | Auditor/examiner questions; cross-links; nuance |

---

## Mermaid conventions

- **Overview:** `flowchart TB` or `flowchart LR` with numbered subgraphs (① Ingress, ② App, …)
- **Walkthrough:** `sequenceDiagram` with `box rgba(...)` groups per trust zone
- **Pipeline:** layered gates (ground → generate → verify → ship / abstain)
- Reuse palette: blue input, purple process, orange gates, red deny/abstain, green output, gray audit

---

## Worked example — THE CLAIM + opening

From *Hallucinations Is a System Design Problem*:

**Wrong question:** "Which model hallucinates least?"

**THE CLAIM:** Hallucination is not the model failing. It's the model succeeding at the wrong objective — fluent continuation — in a system that never gave it the right one: grounded truth.

**Opening hook:** Every time a model invents a citation, the conversation jumps to model choice. That's the wrong question. The model did exactly what it was built to do.

---

## Worked example — system on one page

From *Policy-Governed Agent Runtime*:

Five trust boundaries. Token and policy never cross the LLM boundary (③).

- **① Ingress** — validate token, issue claims
- **② Agentic App** — holds session; never sends credentials to LLM
- **③ LLM** — conversation + tool schemas only; proposes
- **④ Policy layer** — PEP + PDP; verdict on every proposal
- **⑤ Downstream** — executes only on Allow; re-authorizes

Bridge: *Read it across those five boundaries: ingress → app → LLM proposes → PEP asks PDP → downstream executes.*

---

## Worked example — comparison table

| | Prompt-based guardrails | PGAR |
| --- | --- | --- |
| **Where policy lives** | System prompt | PDP, enforced by PEP |
| **Enforcement** | Probabilistic | Deterministic |
| **Auditability** | "The model was told not to" | Structured verdict log per proposal |
| **Failure mode** | Silent violation | Explicit deny or step-up |

---

## Before publishing

- [ ] Title states a **tension or misconception**, not a product pitch
- [ ] **THE CLAIM** and **TAKEAWAY** admonitions present
- [ ] At least one **system diagram** (mermaid) for `arch` / `exp` voices
- [ ] **One core pillar** + **one primary voice** + topic tags — see `docs/00 content-bank/50 Tagging-Guidelines.mdx`
- [ ] Hero image at `./[slug].png`
- [ ] `<!-- truncate -->` after the opening block (before deep sections)
- [ ] Cross-link related Insights when thesis connects
- [ ] 2000+ words for flagship pieces — see `docs/50 insight/10 Overview.mdx`
