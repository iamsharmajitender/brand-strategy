# LinkedIn Voice Post Template & Example

Use when **planning or drafting** a LinkedIn voice post paired to an Insight. Channel rules → `docs/100 post/10 Overview.mdx` · tags → `docs/00 content-bank/50 Tagging-Guidelines.mdx`.

> **One Insight to one post.** Same voice, same tags as the parent Insight. Link back to the Insight on site.

---

## Planning block

Copy before you draft:

```text
Parent Insight: [Title — must be published on site]
Voice: [pov / lrn / arch / exp — same as the Insight]
Core pillar: [strategy-architecture / platforms-engineering / ai-intelligence / governance-trust]
Topic tags: [same as parent Insight — rag, agents, observability, ...]
Takeaway: [one idea from THE CLAIM]
Closing line: [the memorable principle to repeat]
Insight URL: [link back to site]
Status: 💡 Idea | 📝 Draft | ✅ Ready
```

---

## Pick the voice (match the Insight)

| Voice | Core question | Length | Use when |
| --- | --- | --- | --- |
| **POV** | What belief am I challenging? | 150-400 words | Contrarian take; reframe a common belief |
| **LRN** | What did I learn in the field? | 200-500 words | Field lesson; what broke or changed your thinking |
| **ARC** | What is the architecture pattern? | 300-600 words | One flow or layer table, not the full Insight |
| **EXP** | How do I simplify without losing truth? | 200-400 words | Dense, jargon-heavy, misunderstood topic |

---

## POV template

```text
[Strong claim]

Most teams think [common belief].
But the real problem is [deeper issue].

At enterprise scale, this creates [risk or failure].

The real architecture shift is not [surface thing].
It is [deeper architectural truth].

[Memorable closing principle]
```

**Worked example (RAG):**

> RAG is not an architecture strategy.
>
> Most teams think adding a vector database makes enterprise AI production-ready. It doesn't.
>
> RAG solves retrieval. It does not solve policy, correctness, or decision authority.
>
> At enterprise scale, this creates hidden risk: similarity gets treated as truth.
>
> The real shift is not retrieval augmentation. It is governance augmentation.
>
> **Retrieval informs. Deterministic systems decide.**

**Checklist:** opens with a challengeable claim · names the belief you push against · reframes the problem · enterprise consequence · one memorable closing line.

---

## LRN template

```text
While working on [context or problem], one thing became clear:

[Unexpected observation]

What looked simple at first broke because:

* [Learning 1]
* [Learning 2]
* [Learning 3]

My biggest takeaway:

[Reframed lesson]
```

**Worked example (Agents):**

> While breaking down agentic workflows, one thing became clear: most failures are not model failures. They are system boundary failures.
>
> What repeatedly broke:
>
> - Agents owning decisions
> - Missing policy checkpoints
> - Tool calls without auditability
> - Context injected too late
>
> **My biggest takeaway:** Agent design is mostly architecture design.

**Checklist:** specific context · names what broke or surprised you · 3-5 concrete learnings · one reframed takeaway · reads like experience, not argument.

---

## ARC template

```text
Here's how I think about [system or problem]:

Flow:
[Step 1] -> [Step 2] -> [Step 3] -> [Step 4] -> [Step 5]

Why this matters:

* [Layer 1] controls [responsibility]
* [Layer 2] controls [responsibility]
* [Layer 3] controls [responsibility]

Key principle:
[Architecture truth]
```

**Worked example (RAG):**

> Here's how I think about enterprise RAG systems:
>
> **Flow:** User -> Identity -> Policy -> Retrieval -> Validation -> LLM -> Response
>
> **Why this matters:**
>
> - Identity scopes retrieval
> - Policy scopes access
> - Retrieval scopes relevance
> - Validation scopes correctness
>
> **Key principle:** Similarity should never own truth.

**Checklist:** states the problem first · clear linear flow · a responsibility per layer · at least one design principle · no marketing language.

---

## EXP template

```text
Most explanations of [topic] stop at [oversimplified version].

That's useful, but incomplete.

The simple truth:
[One clear sentence that captures the real idea]

Think of it like this:
[Mental model or analogy]

What you must not lose:
* [Nuance 1]
* [Nuance 2]

What to do with this:
[Practical takeaway]
```

**Worked example (Agents):**

> Most explanations of AI agents stop at "give the model tools and let it act."
>
> That's useful, but incomplete.
>
> **The simple truth:** An agent is a planner that proposes actions. Execution, permission, and audit still belong to the system.
>
> **Think of it like this:** An agent is a project manager, not a contractor. It coordinates work. It should not unilaterally sign contracts.
>
> **What you must not lose:**
>
> - Autonomy without boundaries is risk
> - Tool access is a permission problem, not a model problem
> - Every action needs a trace
>
> **What to do with this:** Design the agent as one layer in a governed stack.

**Checklist:** names the oversimplification · one "simple truth" sentence · a memorable mental model · preserves nuance · ends with something actionable.

---

## Full worked post — POV on Hallucinations

From `docs/100 post/article/10 Example-POV-Hallucinations.mdx`, paired 1:1 with the published Insight *Hallucinations Is a System Design Problem* (`pov` · `ai-intelligence` · `llm` · `hallucinations`, ~250 words):

> **"Hallucination" is not a model bug. It is a system design gap.**
>
> Most teams respond to hallucinations by swapping models or tightening prompts. That treats the symptom, not the architecture.
>
> At enterprise scale, the real failure mode is this: similarity gets treated as truth, retrieval gets treated as governance, and probabilistic outputs get treated as decisions.
>
> The fix is not a better LLM. It is a grounded system:
>
> -> Identity-scoped context
> -> Policy before generation
> -> Deterministic gates where compliance requires it
> -> Observability on what was retrieved, not just what was said
>
> **Retrieval informs. Systems decide.**
>
> Read the full architecture breakdown -> [Hallucinations Is a System Design Problem](https://jitendersharma.dev/insights/tags/hallucinations)

---

## Before publishing

- [ ] **Voice** matches the parent Insight (pov / lrn / arch / exp)
- [ ] **Tags** identical to the parent Insight (Core pillar + voice + topics)
- [ ] **One takeaway** from THE CLAIM, not a mini-essay
- [ ] **Length** within the voice's range
- [ ] **Memorable closing line** present
- [ ] **Links back** to the parent Insight on site
- [ ] Per-voice checklist above passes

**Related:** `docs/100 post/10 Overview.mdx` · `docs/100 post/20 POV.mdx` · `30 LRN.mdx` · `40 ARC.mdx` · `50 EXP.mdx`
