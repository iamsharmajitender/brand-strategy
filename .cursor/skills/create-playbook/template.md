# Playbook Template & Example

Use when **planning or drafting** a playbook on [/playbooks/*](https://jitendersharma.dev/playbooks). Catalog → `docs/30 playbook/30 Types.mdx` · channel rules → `docs/30 playbook/10 Overview.mdx`.

> **Ships last.** Playbooks assume the reader accepts the pattern. Anchor Insight (and optional Blueprint) should be live first. Untagged — no Core pillar or voice tags.

---

## Planning block

Copy before you draft:

```text
Playbook: [Title]
Route: /playbooks/[slug]
Prerequisite: [Insight + Blueprint that prove the pattern]
Dominant G.A.I.N pillar: [G / A / I / N]
Stages: [numbered implementation roadmap]
Key practices: [3-5 non-negotiables]
Status: 💡 Idea | 📋 Planned | 📝 Draft | ✅ Live
```

---

## Page structure (published MDX)

Match the live site style:

```text
1. Title + subtitle — outcome-focused, enterprise scope
2. Implementation roadmap — numbered stages, each with a one-line outcome
3. Key practices — short sections (do this · not that) + a "Do not" list
4. Stage detail — deeper walkthrough + exit criteria for the riskiest stage
5. Related assets — Insight · Blueprint · G.A.I.N Signature Article
```

---

## Voice & tone

| Do | Don't |
| --- | --- |
| Every stage has a concrete outcome | List stages with no outcome |
| Every practice is something you do | Offer aspirational advice |
| Define exit criteria for risky stages | Leave "done" undefined |
| Name the anti-patterns ("Do not...") | Pretend there are no failure modes |
| Link back to the Insight that proves it | Re-argue the pattern |

**No em dashes (`—`)** in playbooks with mermaid or flow diagrams. Use colon, period, comma, parentheses, or hyphen-minus for compound words.

---

## Worked example — Build Enterprise RAG

From `docs/30 playbook/article/10 Example-Build-Enterprise-RAG.mdx` (live draft at [/playbooks/build-enterprise-rag](https://jitendersharma.dev/playbooks/build-enterprise-rag)):

| | |
| --- | --- |
| **Route** | `/playbooks/build-enterprise-rag` |
| **Dominant pillar** | **G** (Grounded) |
| **Prerequisite** | RAG pipeline Insight · [RAG Architecture](https://jitendersharma.dev/blueprints/rag-architecture) blueprint |

**Subtitle:** A step-by-step playbook to build production-ready RAG systems at scale.

**Implementation roadmap:**

| Stage | Step | Outcome |
| --- | --- | --- |
| 1 | Define the Use Case | Problem, audience, and success metrics locked |
| 2 | Data Ingestion | Collect, clean, structure, classify source documents |
| 3 | Index & Retrieval | Indexes built · retrieval tuned · access control applied |
| 4 | Generation Layer | LLMs integrated with grounded, policy-scoped context |
| 5 | Evaluation & Monitoring | Quality, latency, cost, drift measured |
| 6 | Operate & Improve | Feedback loops · re-embed · rollback paths |

**Key practices:**

- **Start with evaluation criteria** — define "good" before choosing vector DB or model.
- **Instrument from day one** — log every query, retrieval set, policy decision, generation.
- **Iterate on retrieval first** — most RAG failures are retrieval problems, not prompts.

**Do not:**

- Ship without identity-scoped retrieval in regulated environments
- Treat similarity score as confidence
- Skip shadow mode before full rollout

**Stage detail — Index & Retrieval (Stage 3):**

```text
Source docs -> Parse/chunk -> Embed -> Index (versioned)
                    |
User query -> Embed -> Filter by policy -> Retrieve top-k -> Re-rank -> Context pack
```

**Exit criteria:** Retrieval recall measured on eval set · P95 latency within SLO · access control verified on test identities.

---

## Pairing guide

| When this Insight proves the pattern... | Ship this playbook |
| --- | --- |
| RAG pipeline, layer by layer | Build Enterprise RAG |
| Policy-governed agent runtime | Agentic Systems Design |
| AI observability in enterprise | AI Observability |
| How LLMs work under the hood | LLM Integration Guide |
| Platform / data modernization for AI | Data Pipelines for AI |

---

## Before publishing

- [ ] **Anchor Insight** (and Blueprint if applicable) already live
- [ ] **Untagged** — no Core pillar or voice tags
- [ ] **One dominant G.A.I.N pillar** chosen
- [ ] **Subtitle** is outcome-focused, enterprise scope
- [ ] **Numbered roadmap** — each stage has a clear outcome
- [ ] **Key practices** are actionable, plus a "Do not" list
- [ ] At least one **stage detail with exit criteria**
- [ ] **No em dashes** in prose, tables, or mermaid
- [ ] Cross-links to Insight · Blueprint · G.A.I.N Signature Article
- [ ] Listed in [Types catalog](../../docs/30 playbook/30 Types.mdx)

**Related:** `docs/30 playbook/10 Overview.mdx` · `docs/30 playbook/30 Types.mdx` · `docs/30 playbook/article/10 Example-Build-Enterprise-RAG.mdx`
