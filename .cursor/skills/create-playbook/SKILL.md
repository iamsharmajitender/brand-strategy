---
name: create-playbook
description: >-
  Draft step-by-step implementation playbooks: the "how to build / deploy /
  observe" guides that Insights deliberately leave out, published on
  jitendersharma.dev/playbooks (Build Enterprise RAG, Agentic Systems Design,
  AI Observability, ...). Playbooks ship last in the stack, after an anchor
  Insight and optional Blueprint prove the pattern. Untagged, numbered
  implementation roadmap plus key practices, one dominant G.A.I.N pillar. Use
  when writing, planning, or editing a playbook, a /playbooks/* page, or when the
  user asks for a step-by-step implementation guide.
---

# Create Playbook

Write playbooks that match the published style (Build Enterprise RAG). Each is a **structured path from design decisions to production readiness**.

**Template:** [template.md](template.md) — read before drafting.

**Source docs:** catalog `docs/30 playbook/30 Types.mdx` · structure `docs/30 playbook/20 Template-Example.mdx` · channel rules `docs/30 playbook/10 Overview.mdx` · worked example `docs/30 playbook/article/10 Example-Build-Enterprise-RAG.mdx`.

## What a playbook is

A playbook is the **implementation depth** an Insight omits: numbered stages, key practices, exit criteria, and anti-patterns. It assumes the reader **already accepts the pattern** and wants to build it.

| | Insight | Blueprint | Playbook |
| --- | --- | --- | --- |
| Job | prove the argument | visual reference model | step-by-step implementation |
| When to ship | 2/week on cadence | after anchor Insight | after pattern is accepted |
| Tags | Core pillar + voice + topics | none | **none** (untagged) |
| Route | `/insights/*` | `/blueprints/*` | `/playbooks/*` |

## Ships last

```text
Insight  ->  Blueprint (optional)  ->  Playbook
```

- Playbooks are **untagged** — no Core pillar or voice tags, no Insights cadence.
- Ship **after** the anchor Insight (and optional Blueprint) are live and the pattern is proven.
- Capture the outline in the same cycle as the Insight so the Insight has somewhere to point, but publish the full playbook later.

## Workflow

1. **Confirm the pattern is proven** — anchor Insight (and optional Blueprint) live.
2. **Name the prerequisite** — the Insight + Blueprint that prove the pattern.
3. **Pick the dominant G.A.I.N pillar** — G, A, I, or N.
4. **Write the subtitle** — outcome-focused, enterprise scope.
5. **Define the roadmap** — numbered stages, each with a one-line outcome.
6. **Write key practices** — 3-5 non-negotiables ("do this · not that").
7. **Add one stage detail** — a deeper walkthrough with exit criteria for the riskiest stage.
8. **Cross-link** — Insight, Blueprint, G.A.I.N Signature Article.
9. **Validate** — run the checklist in `template.md`.

## Required elements

Every playbook must include:

- **Subtitle** — outcome-focused, enterprise scope
- **Prerequisite** — the Insight + Blueprint that prove the pattern
- **Implementation roadmap** — numbered stages, each with a clear outcome
- **Key practices** — 3-5 actionable non-negotiables, plus a "Do not" list
- At least one **stage detail** with **exit criteria**
- **Related assets** — Insight, Blueprint, G.A.I.N Signature Article

## Voice rules

- **Actionable, not aspirational** — every stage has a concrete outcome; every practice is something you do.
- **Assumes acceptance** — do not re-argue the pattern; link back to the Insight.
- **Exit criteria over vibes** — define "done" for the riskiest stage (recall measured, P95 within SLO, access verified).
- **Name the anti-patterns** — "Do not ship without identity-scoped retrieval", "Do not treat similarity score as confidence".
- **One playbook at a time** — ship when demand is clear.

## Writing constraints

**Never use em dashes (`—`)** in playbooks that contain mermaid or flow diagrams. Em dashes break Mermaid parsing. Use colon, period, comma, parentheses, or hyphen-minus (`-`) for compound words. Inside mermaid: ASCII labels only, no unicode numerals, no ampersands in labels, no reserved subgraph IDs (`index`, `class`, `style`, `end`).

## Mermaid

Reuse the shared palette where a stage flow helps: blue input (`#dbeafe`/`#93c5fd`), purple process (`#ede9fe`/`#c4b5fd`), orange/red gates (`#ffedd5`/`#fdba74`, `#fee2e2`/`#fca5a5`), green output (`#dcfce7`/`#86efac`), gray audit (`#f1f5f9`/`#94a3b8`).

## Anti-patterns

- Adding Core pillar or voice tags (that makes it an Insight)
- Shipping a playbook before the pattern is proven by an Insight
- Re-arguing the pattern instead of linking back to the Insight
- Stages without outcomes; practices without actions
- Generic advice instead of citeable, enterprise-grade steps
- No exit criteria on any stage
- Em dashes anywhere a mermaid diagram appears

## Pre-publish checklist

```
- [ ] Anchor Insight (and Blueprint if applicable) already live
- [ ] Untagged: no Core pillar tag, no primary voice tag
- [ ] One dominant G.A.I.N pillar chosen
- [ ] Subtitle is outcome-focused, enterprise scope
- [ ] Numbered roadmap — each stage has a clear outcome
- [ ] Key practices are actionable, plus a "Do not" list
- [ ] At least one stage detail with exit criteria
- [ ] No em dashes in prose, tables, or mermaid (diagrams present)
- [ ] Cross-links to Insight, Blueprint, G.A.I.N Signature Article
- [ ] Listed in Types catalog (docs/30 playbook/30 Types.mdx)
```
