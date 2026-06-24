# Architecture Note Template & Example

Use when **planning or drafting** an architecture note on [/architecture/*](https://jitendersharma.dev/architecture). Categories → `docs/20 architecture/30 Types.mdx` · channel rules → `docs/20 architecture/10 Overview.mdx`.

> **Not an Insight.** Untagged durable reference page — no Core pillar tag, no primary voice tag, no weekly cadence.

---

## Planning block

Copy before you draft:

```text
Note: [Architecture topic]
Route: /architecture/[slug]
Category: [Distributed systems / Event-driven / API design / AI systems / Governance]
One-line angle: [what this note helps architects decide]
Design principles: [3-5 bullets]
Key patterns: [microservices · EDA · CQRS · ...]
May draw from: [Insight titles — optional]
Blueprint sibling: [/blueprints/... — optional]
Status: 💡 Idea | 📋 Planned | 📝 Draft | ✅ Live
```

---

## Page structure (published MDX)

Match the live Architect's Handbook style:

```text
1. Title + subtitle — architectural scope, not marketing
2. Section lead — why this matters at enterprise scale
3. Design principles — 3-5 named, citeable principles
4. Architecture flow — one diagram or layer table
5. Key patterns — table: pattern | what it covers
6. Enterprise implications — blast radius · consistency · golden paths
7. Related assets — Insights · Blueprint sibling · G.A.I.N
```

---

## Voice & tone

| Do | Don't |
| --- | --- |
| Subtitle states enterprise scope | Subtitle reads like a tutorial intro |
| Name 3-5 citeable design principles | List generic best-practice fluff |
| Write the durable reference | Re-run a single-tension Insight |
| One diagram or layer table minimum | Prose-only with no structure |
| Call out blast radius, consistency, golden paths | Stay abstract and vendor-neutral only |

**No em dashes (`—`)** in notes with mermaid. Use colon, period, comma, parentheses, or hyphen-minus for compound words.

---

## Worked example — Distributed Systems

From `docs/20 architecture/article/10 Example-Distributed-Systems.mdx` (live draft at [/architecture/distributed-systems](https://jitendersharma.dev/architecture/distributed-systems)):

| | |
| --- | --- |
| **Route** | `/architecture/distributed-systems` |
| **Category** | Distributed systems |
| **Subtitle** | Building resilient, scalable, and observable systems. |

**Section lead:** Modern systems rarely run on a single machine. As load, team size, and integration complexity grow, distributed architecture becomes the baseline, and the design choices you make early determine whether the system scales gracefully or becomes fragile under pressure.

**Design principles:**

- Loose coupling — services change independently
- High cohesion — bounded contexts with clear ownership
- Fault tolerance — failure is expected, not exceptional
- Observability by default — metrics, logs, tracing from day one
- Event-driven execution — async where sync creates bottlenecks

**Architecture flow:**

```text
Client -> API Gateway -> Services -> Event Bus -> Data Stores
              |
         Observability (metrics, logs, traces)
```

**Key patterns:**

| Pattern | What it covers |
| --- | --- |
| Microservices | Independently deployable services with bounded contexts |
| Event-Driven Architecture | Events as primary integration, async, resilient |
| CQRS | Separate read and write models at scale |
| Saga Pattern | Distributed transactions via compensating actions |
| Observability | End-to-end tracing across service boundaries |

**Enterprise implications:** Blast radius matters (isolate failures per domain). Data consistency is a design choice, not an ORM default. Platform teams need golden paths, not every squad reinventing service mesh.

---

## Before publishing

- [ ] **Untagged** — no Core pillar or voice tags
- [ ] **Category** chosen (distributed / event-driven / API / AI systems / governance)
- [ ] **Subtitle** states enterprise scope, not a tutorial intro
- [ ] **Section lead** explains why this matters at scale
- [ ] **3-5 design principles**, named and citeable
- [ ] At least one **diagram or layer table**
- [ ] **Key patterns** table is citeable, not generic
- [ ] **Enterprise implications** present
- [ ] **No em dashes** in prose, tables, or mermaid
- [ ] Cross-links to related Insights and Blueprint sibling
- [ ] Listed in [Types catalog](../../docs/20 architecture/30 Types.mdx)

**Related:** `docs/20 architecture/10 Overview.mdx` · `docs/20 architecture/30 Types.mdx` · `docs/20 architecture/article/10 Example-Distributed-Systems.mdx`
