# G.A.I.N Signature Article Template

Use when **planning or drafting** a Signature Article on [/frameworks/gain-*](https://jitendersharma.dev/frameworks). The user must name the topic (e.g. G.A.I.N LLM, G.A.I.N RAG, G.A.I.N Observability). If no topic was given, ask once; if still not provided, abort — do not draft.

**Example:** [example-1.md](example-1.md) (G.A.I.N LLM full draft).

Voice, mermaid, and writing constraints → [SKILL.md](SKILL.md).

> Untagged: no Core pillar tag · no primary voice tag · no Content Bank entry. One dominant G.A.I.N letter (two only if genuinely split).

---

## Planning block

Copy before you draft. Replace `[Domain]` with the name the user gave:

```text
Article: G.A.I.N [Domain]
Route: /frameworks/gain-[kebab-domain]
Dominant pillar: [G / A / I / N — one, occasionally two]
One-line angle: [how this domain works through G.A.I.N in one sentence]
Opening thesis: [architectural reframe in one sentence — not hype]
Sections: Why [Domain] needs G.A.I.N · Domain on one page · Grounded (G) · Adaptive (A) · Intelligent (I) · Native (N) · Related assets
Blueprint sibling: [/blueprints/... — optional]
Playbook (later): [/playbooks/... — optional]
Status: 💡 Idea | 📋 Planned | 📝 Draft | ✅ Live
```

---

## Page structure (published MDX)

### Frontmatter

```yaml
---
sidebar_position: [number]
slug: gain-[kebab-domain]
title: G.A.I.N [Domain]
description: [One-line angle — architectural, not marketing.]
authors: [iamsharmajitender]
---
```

### Body outline

```text
1. H1 + link back to core G.A.I.N framework (/frameworks)
   Spell out "Governed AI-Native Systems" on first use.

2. One-line angle + opening thesis (architectural, not hype)
   Reframe systems over models — quotable, not vendor pitch.

3. Why [Domain] needs G.A.I.N (not generic AI advice)
   Failure-mode bullets + dominant pillar callout (G / A / I / N).

4. Domain on one page
   Overview mermaid (left-to-right layer flow + feedback loop)
   Layer table: Layer | Owns | Does not own

5–8. Grounded (G) · Adaptive (A) · Intelligent (I) · Native (N)
   Each pillar section (see below). Diagram on dominant pillar(s).

9. Related assets — table: Asset | Route | Role

10. Planning metadata (draft/preview)
```

### Each pillar section

Use the same shape for G, A, I, and N:

```text
## [Pillar name] ([letter])

[Optional: **Dominant pillar.** or **Co-dominant pillar.** opening paragraph]

### Patterns
- [what good looks like in this domain]

### Decisions
- [bullets, or table when comparing demo vs production / architecture answers]

### Anti-patterns
- [what breaks at enterprise scale]

[Optional: ### [Pillar] flow (dominant pillar diagram) — mermaid TB flow — required on dominant pillar]
```

---

## Before publishing

- [ ] **Topic** matches user request (title, slug, route)
- [ ] **One dominant G.A.I.N pillar** — G · A · I · N (lead or expand that section; two only if genuinely split)
- [ ] **Untagged** — no Core pillar or voice tags, no Content Bank entry
- [ ] **Frontmatter** — slug · title · description (one-line angle) · authors
- [ ] **One-line angle + opening thesis** present (architectural, not hype)
- [ ] **Why [Domain] needs G.A.I.N** section with dominant pillar callout
- [ ] **Domain on one page** — overview mermaid + layer table (Owns / Does not own)
- [ ] **All four pillars** mapped: Patterns · Decisions · Anti-patterns each
- [ ] **Diagram on dominant pillar** section(s) (article-level diagram minimum)
- [ ] **Related assets** table: core framework + Blueprint + Architecture + Playbook
- [ ] **No em dashes** in prose, tables, or mermaid
- [ ] Reads as **your** framework, not generic AI content
- [ ] **One domain only** — the domain the user named
