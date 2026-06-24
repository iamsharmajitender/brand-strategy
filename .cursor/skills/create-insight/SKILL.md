---
name: create-insight
description: >-
  Draft long-form enterprise Insights in Jitender Sharma's architecture-driven
  style — contrarian openings, THE CLAIM admonitions, mermaid system diagrams,
  comparison tables, regulated-industry stakes. Use when writing, planning, or
  editing Insights for jitendersharma.dev/insights, or when the user asks to
  create an insight article in this voice.
---

# Create Insight

Write Insights that match the published corpus (Policy-Governed Agent Runtime, Hallucinations, AI Observability, How LLM Works, RAG Is Not a Database).

**Template:** [docs/50 insight/20 Template-Example.mdx](../../docs/50%20insight/20%20Template-Example.mdx) — read before drafting.

## When to use

- User asks for a new Insight, architecture article, or long-form piece for `/insights`
- User wants the same tone/style as existing Insights
- Planning or expanding a Content Bank idea into a full draft

## Workflow

1. **Clarify the tension** — What is the wrong question? What misconception does the piece dismantle?
2. **Write THE CLAIM** — One memorable "X is not Y" reframe. Must work as a pull quote.
3. **Pick voice + tags** — One core pillar + one primary voice (`pov` | `lrn` | `arch` | `exp`) + optional topics.
4. **Draft frontmatter** — `slug`, `title`, `description`, `image`, `tags`, `authors: [iamsharmajitender]`.
5. **Structure the body** — Follow template order (hook → CLAIM → truncate → system view → deep sections → TAKEAWAY).
6. **Add diagrams** — At least one mermaid for `arch`/`exp`; sequence diagram when tracing a request end-to-end.
7. **Validate** — Run checklist at bottom of this file.

## Required elements

Every Insight must include:

- `:::tip[THE CLAIM]` — opening thesis (after hook, before `<!-- truncate -->`)
- `:::tip[TAKEAWAY]` — closing one-liner
- `<!-- truncate -->` — after opening block
- Framing that positions the piece as **architecture**, not opinion or news

Strong Insights usually also include:

- **"The whole system on one page"** — numbered boundaries/stages + mermaid + bridge sentence
- **Comparison table** — wrong/default approach vs correct architecture
- **`:::important`** — at least one hard boundary (model vs system, proposal vs permission, etc.)
- **Enterprise stakes** — auditors, regulators, compliance, or operational cost where relevant

## Voice rules

### Opening

Start by reframing the conversation. Never start with "In this article we will…" or a definition.

**Pattern:**
```
[Common belief or wrong question — 1 sentence.]
[Why that fails — 1–2 sentences.]
[What actually decides the outcome — 1 sentence.]
This is an **architecture breakdown** of [topic].
```

**Examples from corpus:**
- "Everyone says 'monitor your AI.' Almost nobody draws the system that does it."
- "Every time a model invents a citation, the conversation jumps to 'which model hallucinates less?' That's the wrong question."

### THE CLAIM

- Bold the core reframe inside the admonition
- Expand in 2–4 sentences
- Must be quotable standalone

**Formula:** `[Common thing] is not [what people think]. It is [architectural reality].`

### Body sections

- **H2 headers** state assertions: "Why prompt guardrails aren't authorization" — not "Background"
- **Tables** for contrasts (2+ columns: wrong vs right, signal vs retention, model vs system)
- **Bullets** for principles and implications — short, parallel structure
- **JSON blocks** when showing trust-boundary contracts (what LLM sees vs what PEP sends)
- **Cross-links** to sibling Insights when sharing the "system around the model" thesis

### Closing

`:::tip[TAKEAWAY]` repeats THE CLAIM in closing form + one line on production vs demo.

Optional: "Where I actually land" section for `pov` voice — acknowledge nuance, then restate position.

## Voice by type

| Voice | Emphasis | Diagram depth |
| --- | --- | --- |
| `arch` | Trust boundaries, contracts, sequence flows, examiner questions | Heavy — flow + sequence + JSON |
| `pov` | Contrarian thesis, objection handling, personal landing | Medium — pipeline or concept flow |
| `exp` | Clear stages, analogies, teach the mechanism | Medium — staged flowcharts |
| `lrn` | What broke, what changed, lessons from practice | Light–medium |

## Mermaid

Use consistent `classDef` colors across diagrams:

- Input/user: `#dbeafe` / `#93c5fd`
- Process/app: `#ede9fe` / `#c4b5fd`
- Gates/policy: `#ffedd5` / `#fdba74` or `#fee2e2` / `#fca5a5`
- Output/success: `#dcfce7` / `#86efac`
- Audit/neutral: `#f1f5f9` / `#94a3b8`

Label subgraphs with numbers (① ② ③) for architecture pieces.

## Tags (frontmatter)

**Core pillar (one):** `strategy-architecture` · `platforms-engineering` · `ai-intelligence` · `governance-trust`

**Primary voice (one):** `pov` · `lrn` · `arch` · `exp`

**Topics (optional):** `rag` · `agents` · `observability` · `policy` · `llm` · `hallucinations` · `compliance` · `gain`

## Anti-patterns

- Generic AI hype or vendor comparisons
- Opening with history of AI or LLM definitions (unless `exp`/`lrn` teaching piece)
- Blaming "the model" without naming the missing system layer
- Summary paragraph instead of TAKEAWAY admonition
- Diagrams without a numbered list explaining boundaries first
- Policy/rules described only in prose — use tables or JSON for `arch` pieces
- Hedging THE CLAIM — state the position clearly

## Pre-publish checklist

```
- [ ] Wrong question named in first 3 sentences
- [ ] THE CLAIM admonition present and quotable
- [ ] TAKEAWAY admonition present
- [ ] <!-- truncate --> after opening block
- [ ] At least one mermaid diagram (arch/exp)
- [ ] At least one comparison table (arch/pov)
- [ ] One core pillar + one primary voice in tags
- [ ] description field is one architectural thesis line
- [ ] Cross-link related Insight if thesis connects
- [ ] 2000+ words for flagship arch/pov pieces
```

## Reference excerpts

**THE CLAIM (hallucinations):**
> Hallucination is not the model failing. It's the model succeeding at the wrong objective — fluent continuation — in a system that never gave it the right one: grounded truth.

**THE CLAIM (observability):**
> AI observability is not "a dashboard". It's a capture-and-retention architecture: each signal has a different consumer, retention window, and blast radius.

**THE CLAIM (PGAR):**
> Proposal is not permission. An agent proposes tool calls. Governance decides whether they run.

**Recurring thesis thread:** Intelligence in the LLM. Truth, control, and governance in the system around it.
