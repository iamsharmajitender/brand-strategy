---
name: create-gain
description: Create a G.A.I.N Signature Article.
---

# Create G.A.I.N Signature Article

Write Signature Articles that match the published frameworks voice (G.A.I.N LLM, G.A.I.N RAG, G.A.I.N Agents). Each maps **one domain** through **G · A · I · N**.

**Template:** [template.md](template.md) — read before drafting.

**Example:** [example-1.md](example-1.md) (G.A.I.N LLM full draft).

**Reference docs (optional):** channel rules `docs/gain/overview.mdx` · structure `docs/gain/template.mdx` · catalog `docs/gain/types.mdx` (update only when asked).

## Topic (user-provided)

The user **names the topic** in the request. Do not pick from a catalog or invent a topic.

**Examples of valid input:** G.A.I.N LLM · G.A.I.N RAG · G.A.I.N Observability · G.A.I.N Agents · G.A.I.N MCP

**Derive naming from the topic:**

| User says | Title | Slug | Route |
| --- | --- | --- | --- |
| G.A.I.N LLM / GAIN LLM | G.A.I.N LLM | `gain-llm` | `/frameworks/gain-llm` |
| G.A.I.N RAG | G.A.I.N RAG | `gain-rag` | `/frameworks/gain-rag` |
| G.A.I.N Observability | G.A.I.N Observability | `gain-observability` | `/frameworks/gain-observability` |
| G.A.I.N [New Topic] | G.A.I.N [New Topic] | `gain-[kebab-topic]` | `/frameworks/gain-[kebab-topic]` |

New topics are allowed anytime. The skill does not maintain a fixed topic list.

**If no topic was provided:** ask the user which G.A.I.N topic to draft. **If they still do not provide one, abort** — do not start planning or writing the article.

## What a Signature Article is

**G.A.I.N = Governed AI-Native Systems** — the one proprietary idea this brand owns. A Signature Article is the **comprehensive, layer-by-layer reference** for a domain, mapped through the four pillars. It is the permanent depth destination for that domain on `/frameworks/gain-*`.

| Property | Value |
| --- | --- |
| Job | Map a whole domain layer by layer |
| Length | Comprehensive, multi-section |
| Cadence | Permanent IP, one domain per article |
| Tags | **None** (untagged) |
| Route | `/frameworks/gain-*` |

## Channel rules

- **No** Core pillar tag · **no** primary voice tag · **no** Content Bank entry.
- Tag exactly **one dominant G.A.I.N letter** (some articles carry two, e.g. G · N).
- Publish on `/frameworks/gain-*` only.
- **One domain per article** — the domain the user named; do not combine two domains in one piece.

## The four pillars

| Letter | Pillar | Covers |
| --- | --- | --- |
| **G** | Grounded | Truth, context, knowledge alignment — RAG, retrieval, grounding, hallucination controls |
| **A** | Adaptive | Learning, feedback, evolution — eval, rollouts, feedback loops |
| **I** | Intelligent | Reasoning, agents, decision systems — orchestration, routing, boundaries |
| **N** | Native | Scalable, modular, future-ready — observability, ops, scale, compliance |

## Workflow

1. **Confirm the topic** — use the name the user gave; if missing, ask once; if still missing, abort. Derive title, slug, and route (see Topic table above).
2. **Pick the dominant pillar** — one G.A.I.N letter the domain mainly proves (two only if genuinely split, e.g. G · N for LLM); infer from the domain or ask if unclear.
3. **Fill the planning block** — copy from [template.md](template.md) with the confirmed domain.
4. **Write the one-line angle** — how this domain works through G.A.I.N in one architectural sentence.
5. **Write the opening thesis** — the reframe (e.g. "the LLM is a governed inference service, not a chat endpoint").
6. **Write "Why [Domain] needs G.A.I.N"** — enterprise failure modes, not generic AI advice; name dominant pillar(s) here.
7. **Add "Domain on one page"** — overview mermaid flow + layer table (Owns / Does not own) before pillar sections.
8. **Map all four pillars** — G, A, I, N sections with Patterns, Decisions, Anti-patterns; diagram on dominant pillar(s).
9. **Add Related assets** — table linking core framework, Blueprint, Architecture, Playbook.
10. **Cross-link** — back to core `/frameworks`, Blueprint sibling, Architecture note, eventual Playbook.
11. **Validate** — run the checklist in `template.md`.

## Required elements

Every Signature Article must include:

- **MDX frontmatter** — `slug`, `title`, `description` (one-line angle), `authors`; no channel tags
- **Link back** to the core G.A.I.N framework (`/frameworks`); spell out "Governed AI-Native Systems" on first use
- **One-line angle** + **opening thesis** (architectural, not hype)
- **Why [Domain] needs G.A.I.N** — failure-mode bullets + dominant pillar callout
- **Domain on one page** — article-level mermaid flow diagram + layer table before G·A·I·N sections
- **All four pillar sections** — Grounded (G), Adaptive (A), Intelligent (I), Native (N)
- Each pillar: **Patterns** · **Decisions** (bullets or table) · **Anti-patterns** (H3 subsections)
- **Dominant pillar diagram** — extra flow diagram on the dominant pillar section(s); mark with `**Dominant pillar.**` or `**Co-dominant pillar.**`
- **Related assets** — table (Asset | Route | Role)
- **Planning metadata** block at the end (optional in preview, useful for drafting)

## Page structure (published MDX)

```text
1. Frontmatter (slug, title, description, authors)
2. H1 + link back to /frameworks
3. One-line angle + opening thesis
4. Why [Domain] needs G.A.I.N (+ dominant pillars callout)
5. Domain on one page (overview mermaid + layer table)
6. Grounded (G) — Patterns · Decisions · Anti-patterns [+ diagram if dominant]
7. Adaptive (A) — Patterns · Decisions · Anti-patterns
8. Intelligent (I) — Patterns · Decisions · Anti-patterns
9. Native (N) — Patterns · Decisions · Anti-patterns [+ diagram if co-dominant]
10. Related assets (table)
11. Planning metadata (draft/preview)
```

## Voice & tone

| Do | Don't |
| --- | --- |
| Reframe to "which model, which task, which policy, what cost" | Compare model brands |
| Map the **whole domain** layer by layer | Collapse the domain to one tension or failure mode |
| Write as **your** G.A.I.N framework | Write a generic "intro to RAG/agents" |
| Spell out "Governed AI-Native Systems" on first use | Leave G.A.I.N undefined |
| Lead with the **dominant pillar** | Give all four pillars equal weight by default |
| Architectural, problem-framed titles | Marketing / hype titles |
| Stay on the domain the user named | Stitch two domains into one article |

**Architectural, not marketing** — problem/tension framing, not vendor pitch. **Systems over models** — redirect model-brand debates to architecture decisions.

## Writing constraints

**Never use em dashes (`—`)** in drafts that contain mermaid (most Signature Articles use flow diagrams). Em dashes break Mermaid parsing. Use colon, period, comma, parentheses, or hyphen-minus (`-`) for compound words instead. Same rule inside mermaid: ASCII labels only, no unicode numerals, no ampersands in labels, no reserved subgraph IDs (`index`, `class`, `style`, `end`).

## Mermaid

Reuse the shared palette across diagrams:

| Role | Fill | Stroke |
| --- | --- | --- |
| Input | `#dbeafe` | `#93c5fd` |
| Process | `#ede9fe` | `#c4b5fd` |
| Gate | `#ffedd5` | `#fdba74` |
| Audit / platform | `#f1f5f9` | `#94a3b8` |

Label subgraphs with numbers or short ASCII names.

**Article-level diagram:** left-to-right flow across domain layers (Client → Gateway → Model pool → Inference → Platform), with feedback loop back to routing.

**Dominant pillar diagram:** top-to-bottom flow for the pillar's internal path (e.g. Ingress → Context assembly → Inference for Grounded).

## Anti-patterns

- Picking or inventing a topic the user did not name
- Drafting when no topic was provided after asking once
- Adding Core pillar or voice tags (wrong channel)
- Mapping fewer than all four G.A.I.N pillars
- Skipping "Domain on one page" (the article-level overview before pillar sections)
- Generic AI content that does not read as **your** framework
- Model-brand comparisons instead of architecture decisions
- Combining two domains in one article
- Em dashes anywhere a mermaid diagram appears
- Proving one narrow topic instead of mapping the full domain
- Giving all four pillars equal weight when one (or two) should dominate

## Pre-publish checklist

```
- [ ] Topic matches what the user requested (title, slug, route)
- [ ] One dominant G.A.I.N pillar chosen (G · A · I · N; two only if genuinely split)
- [ ] Untagged: no Core pillar tag, no primary voice tag, no Content Bank entry
- [ ] Frontmatter: slug · title · description (one-line angle) · authors
- [ ] One-line angle + opening thesis present (architectural, not hype)
- [ ] "Why [Domain] needs G.A.I.N" section with dominant pillar callout
- [ ] "Domain on one page": overview mermaid + layer table (Owns / Does not own)
- [ ] All four pillars mapped: Patterns · Decisions · Anti-patterns each
- [ ] Diagram on dominant pillar section(s)
- [ ] Related assets table: core /frameworks + Blueprint + Architecture + Playbook
- [ ] No em dashes in prose, tables, or mermaid (diagrams present)
- [ ] Reads as your G.A.I.N framework, not generic AI content
- [ ] One domain only — not two stitched together
```
