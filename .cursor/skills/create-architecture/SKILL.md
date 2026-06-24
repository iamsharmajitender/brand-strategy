---
name: create-architecture
description: >-
  Draft architecture notes: durable, untagged systems-reference pages on
  distributed systems, event-driven design, API boundaries, AI production
  patterns, and governance, published on jitendersharma.dev/architecture. These
  hold the end-to-end systems depth (sequence flows, contracts, design
  principles) that single-tension Insights point to. Untagged reference pages,
  no Core pillar or voice tags, no weekly cadence. Use when writing, planning, or
  editing an architecture note, a /architecture/* page, or when the user asks for
  a systems reference that holds Insight depth.
---

# Create Architecture Note

Write architecture notes that match the published Architect's Handbook style (Distributed Systems). Each is a **durable systems reference**, not a weekly cadence essay.

**Template:** [template.md](template.md) — read before drafting.

**Source docs:** categories `docs/20 architecture/30 Types.mdx` · structure `docs/20 architecture/20 Template-Example.mdx` · channel rules `docs/20 architecture/10 Overview.mdx` · worked example `docs/20 architecture/article/10 Example-Distributed-Systems.mdx`.

## What an architecture note is

An architecture note is the **end-to-end systems detail** that an Insight deliberately omits: design principles, sequence flows, integration patterns, trust boundaries, and the key decisions behind them. When an Insight raises a systems question it should not fully answer, that depth lands here.

| | Insight | Architecture note | Blueprint |
| --- | --- | --- | --- |
| Job | prove one tension | durable systems reference | one-page visual model |
| Form | ~1000-1500 words, tagged | patterns + diagram + decisions | layer table · flow · decision tree |
| Cadence | 2/week | ship when citeable (no cadence) | after anchor Insight |
| Tags | Core pillar + voice + topics | **none** (untagged) | none |
| Route | `/insights/*` | `/architecture/*` | `/blueprints/*` |

## Not an Insight

- **Untagged** reference page — no Core pillar tag, no primary voice tag, no Content Bank Insights cadence.
- Notes may **inform** Blueprints (e.g. distributed-systems patterns feed G.A.I.N Architecture layers) but are not duplicate long-form Insights.
- Ship when the note is **citeable** — there is no weekly deadline.

## Note categories

| Category | Covers |
| --- | --- |
| **Distributed systems** | Resilience, scale, observability, microservices, EDA |
| **Event-driven systems** | Loose coupling, streams, async workflows |
| **API design** | Contracts, versioning, integration boundaries |
| **AI systems** | Production patterns for LLMs, RAG, agents |
| **Governance & security** | Policy, compliance, operational trust |

## Workflow

1. **Identify the gap** — a platform or systems topic not yet on `/architecture`.
2. **Pick the category** — one of the five note categories.
3. **Write the subtitle** — enterprise scope in one line, not a tutorial intro.
4. **Write the section lead** — why this matters at enterprise scale.
5. **List design principles** — 3-5 named, citeable principles (not fluff).
6. **Draw the flow** — one diagram or layer table.
7. **Name key patterns** — a table of patterns with what each covers.
8. **Add enterprise implications** — blast radius, consistency, golden paths.
9. **Cross-link** — related Insights, Blueprint sibling, G.A.I.N.
10. **Validate** — run the checklist in `template.md`.

## Required elements

Every architecture note must include:

- **Subtitle** stating enterprise scope (not a tutorial intro)
- **Section lead** — why this matters at scale
- **Design principles** — 3-5 named principles
- At least one **diagram or layer table**
- **Key patterns** table — citeable, not generic bullets
- **Enterprise implications** — what changes at scale
- **Related assets** — Insights, Blueprint sibling

## Voice rules

- **Architectural, not marketing** — subtitle states scope, not a sales pitch.
- **Durable over timely** — write the reference a CTO can cite in six months.
- **Patterns are citeable** — each key pattern names a real decision, not a buzzword.
- **Separate intelligence from control** — model proposes; system decides (for AI-systems notes).
- Enterprise stakes where they fit: blast radius, data consistency, golden paths, incident archaeology.

## Writing constraints

**Never use em dashes (`—`)** in notes that contain mermaid. Em dashes break Mermaid parsing. Use colon, period, comma, parentheses, or hyphen-minus (`-`) for compound words. Same rule inside mermaid: ASCII labels only, no unicode numerals, no ampersands in labels, no reserved subgraph IDs (`index`, `class`, `style`, `end`).

## Mermaid

Reuse the shared palette: blue input (`#dbeafe`/`#93c5fd`), purple process (`#ede9fe`/`#c4b5fd`), orange/red gates (`#ffedd5`/`#fdba74`, `#fee2e2`/`#fca5a5`), green output (`#dcfce7`/`#86efac`), gray audit (`#f1f5f9`/`#94a3b8`). Use `flowchart` for layers, `sequenceDiagram` for end-to-end flows. Label subgraphs with numbers or short ASCII names.

## Anti-patterns

- Adding Core pillar or voice tags (that makes it an Insight)
- Tutorial-style subtitle instead of enterprise scope
- Generic bullet fluff instead of citeable patterns
- Duplicating a long-form Insight instead of holding the durable reference
- A note with no diagram or layer table
- Em dashes anywhere a mermaid diagram appears

## Pre-publish checklist

```
- [ ] Untagged: no Core pillar tag, no primary voice tag
- [ ] Category chosen (distributed / event-driven / API / AI systems / governance)
- [ ] Subtitle states enterprise scope, not a tutorial intro
- [ ] Section lead explains why this matters at scale
- [ ] 3-5 named design principles
- [ ] At least one diagram or layer table
- [ ] Key patterns table is citeable, not generic
- [ ] Enterprise implications present
- [ ] No em dashes in prose, tables, or mermaid (diagrams present)
- [ ] Cross-links to related Insights and Blueprint sibling
- [ ] Listed in Types catalog (docs/20 architecture/30 Types.mdx)
```
