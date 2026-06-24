# Worked example — G.A.I.N LLM (full draft)

Source: `docs/preview/gain-llm.mdx`

---

---
sidebar_position: 10
slug: gain-llm
title: G.A.I.N LLM
description: The LLM is a governed inference service, not a chat endpoint you paste into every workflow.
authors: [iamsharmajitender]
---

import Details from '@theme/Details';

# G.A.I.N LLM

<div className="gain-doc-subtitle" style={{marginTop: '-0.25rem', marginBottom: '1.75rem'}}>
  How to design enterprise-safe LLM applications: grounded, adaptive, intelligent, native principles applied to production model integration.
</div>

Part of **[G.A.I.N (Governed AI-Native Systems)](https://jitendersharma.dev/frameworks)**: the operating model for enterprise AI where truth, control, and scale live in the system around the model, not inside it.

:::info[G.A.I.N LLM]
**The LLM is a governed inference service, not a chat endpoint you paste into every workflow.**

Enterprise teams debate model brands. G.A.I.N LLM reframes the question: which model, for which task, under which policy, at what cost, with what observability and rollback path from day one.
:::

An LLM in production is a **frozen function wrapped in architecture**: not a chatbot endpoint. The model is one component in a governed system, bounded by policy, validated before it reaches business logic, and operated on platform infrastructure built to scale and control cost.

---

## Why LLM needs G.A.I.N

Most production LLM failures are not model failures. They are architecture failures:

- A chat completion API becomes the integration boundary for regulated workflows.
- Prompt text substitutes for policy enforcement.
- Model swaps ship without eval gates or rollback.
- Cost and latency show up in finance dashboards months after architecture is frozen.

Generic LLM advice stops at "pick a model and call the API." **G.A.I.N LLM** maps the full production domain: how context enters, how routing decides, how feedback closes the loop, and how the platform survives audit, scale, and model change.

**Dominant pillars for this domain:** **G** (Grounded) and **N** (Native). 
- Grounding is what the model is allowed to see and say. 
- Native is how inference runs as a governed platform service.

### What G.A.I.N adds (not generic LLM platform advice)

| G.A.I.N claim | What it means for LLM |
| --- | --- |
| **Intelligence in the call; truth in the system** | The model generates. The architecture owns context assembly, policy verdict, attribution, and audit. |
| **The model proposes; the system decides** | Routing, abstention, tool access, and escalation are not prompt tricks. They are platform decisions before and after inference. |
| **Grounding is a pipeline, not a prompt** | Identity-scoped context packs, registry-approved models, and output filters define what may enter and leave the boundary. |
| **Native is the feedback loop, not hosting** | Trace, cost, eval, and routing feedback close the loop from production back into the path below. |

---

## Domain on one page

**One question:** how should a production LLM request flow so the business is not hostage to model output?

Use **one request-flow diagram** on this page. Platform ingress, registry, and shared ops depth belong in a [blueprint](https://jitendersharma.dev/blueprints/llm-gateway), not a second stack diagram here.

LLMs should **augment** systems, not replace them. The model sits inside a pipeline; never as the only gate between a user and a business outcome.

```mermaid
flowchart LR
    subgraph path["Production LLM path"]
        A[Application]
        C[Context builder]
        L[LLM]
        V[Validator]
        B[Business system]
    end

    A --> C --> L --> V --> B
    V -.->|evaluation · feedback| C

    classDef input fill:#dbeafe,stroke:#93c5fd,color:#1e293b
    classDef process fill:#ede9fe,stroke:#c4b5fd,color:#1e293b
    classDef gate fill:#ffedd5,stroke:#fdba74,color:#1e293b

    class A,B input
    class C,L process
    class V gate
```

:::important[Ask before you ship]
**Is the LLM on the critical path?** **Where does validation happen?**

If the answer to the first is yes and the second is unclear, the design is not ready for production.
:::

- **Validation gate:** deterministic check before anything reaches business logic.
- **Model augments:** the LLM is one step in the pipeline, not the only gate to an outcome.

| Stage | Owns | Does not own |
| --- | --- | --- |
| **Application** | Use-case orchestration, user session | Model choice, policy verdict, raw model output to users |
| **Context builder** | Prompt contracts, retrieval, session context | Ad-hoc secrets, unaudited context assembly |
| **LLM** | Inference for ambiguous steps | Policy enforcement, business outcome |
| **Validator** | Schema, policy, grounding checks | Generating the answer |
| **Business system** | Workflow outcome, records, escalation | Letting unvalidated model text drive state changes |

### Demo vs production (whole path)

| Stage | Demo default | Production default |
| --- | --- | --- |
| **Application** | Calls vendor chat API directly | Calls only the governed pipeline; no embedded API keys |
| **Context builder** | Prompt and context pasted in client code | Versioned contracts, identity-scoped context, audited assembly |
| **LLM** | One latest model for everything | Registry-approved model per use case, data class, region |
| **Validator** | System prompt or none | Schema, policy, and grounding gates before business logic |
| **Business system** | Model output becomes the outcome | Workflow consumes validated output only |
| **Feedback** | Console logs | Eval runs, trace, corrections, feedback into context and routing |
| **Change** | Swap model URL | Canary slice + eval run + rollback tied to change record |

---

## G.A.I.N applied to LLM systems

<Details summary="G · Grounded — controls around model behavior">
**Dominant pillar.** Grounding is not "better prompts." It is the architecture that decides what context the model receives, from which sources, under which identity, and what outputs are allowed to leave the inference boundary.

**Components:** model registry · governed context pipeline · input and output filters · versioned prompt and context templates tied to eval baselines.

**Design questions:** What can be generated? What must be blocked?

**Principle:** Model freedom needs operational boundaries.

**Anti-patterns:** vendor chat endpoint as integration boundary · model swaps without architecture · per-squad model and prompt sprawl · context window as substitute for retrieval and abstention.
</Details>

<Details summary="A · Adaptive — learning from production">
LLM behavior drifts: models update, traffic mixes shift, new use cases piggyback on old routes. Adaptive architecture closes the loop from the platform layer back into routing, prompts, and approval gates.

**Components:** per-use-case eval suites · canary routing · production feedback into the route table · change records tied to eval run IDs.

**Design questions:** How do we know when quality degrades? What triggers rollback or human handoff?

**Principle:** Production feedback is the only benchmark that matters.

**Anti-patterns:** A/B testing without shared metrics · fine-tuning to fix routing or context assembly · ignoring traces until escalation.
</Details>

<Details summary="I · Intelligent — where the model earns its place">
The LLM does not decide which model to use, whether to answer, or which tool to invoke. The **router** does. Use intelligence where ambiguity exists; use code where certainty is required.

**Components:** task-aware routing · abstention as a first-class outcome · capability matrix · governed tool registry.

**Design questions:** Which tasks are probabilistic? Which need deterministic support alongside the model?

**Principle:** The model proposes; the system decides.

**Anti-patterns:** one mega-model for every task · tool use without authorization boundaries · routing logic scattered without shared trace or policy.
</Details>

<Details summary="N · Native — platform and infrastructure">
**Co-dominant pillar.** Native is the platform layer made operational: observable, attributable, multi-region, and survivable under load.

**Components:** end-to-end trace · cost attribution per tenant and use case · caching with policy-aware invalidation · multi-region residency enforced at ingress.

**Design questions:** How do we scale under load? How do we control spend without throttling the business?

**Principle:** LLM systems are infrastructure-heavy systems; Native is the feedback loop, not just hosting.

**Anti-patterns:** API keys in every service · observability of outputs only · scaling replicas without backpressure or budget caps.
</Details>

### Grounded flow (dominant pillar diagram)

```mermaid
flowchart TB
    subgraph ingress["1 Ingress"]
        ID[Identity / claims]
        CTX[Context sources]
    end

    subgraph assemble["2 Context assembly"]
        FIL[Input filters]
        PACK[Context pack]
    end

    subgraph infer["3 Inference"]
        LLM[Model call]
        OUT[Output filter]
    end

  ID --> FIL
  CTX --> FIL
  FIL --> PACK --> LLM --> OUT

    classDef input fill:#dbeafe,stroke:#93c5fd,color:#1e293b
    classDef gate fill:#ffedd5,stroke:#fdba74,color:#1e293b
    classDef process fill:#ede9fe,stroke:#c4b5fd,color:#1e293b

    class ID,CTX input
    class FIL,OUT gate
    class PACK,LLM process
```

---

## Key patterns

<Details summary="Prompt contracts">
Define prompts with structured inputs, output schemas, and failure modes. Prompts are API interfaces: version them, test them, and treat changes as breaking changes.
</Details>

<Details summary="RAG integration">
Combine LLM generation with retrieved context for grounded responses. See [G.A.I.N RAG](https://jitendersharma.dev/frameworks/gain-rag) for retrieval patterns.
</Details>

<Details summary="Caching">
Cache semantically similar requests to reduce latency and cost. Balance hit rates against response freshness: stale cached answers erode trust faster than slow ones.
</Details>

<Details summary="Fallback strategies">
Route to alternative models, cached responses, or human escalation when primary inference fails. Fallback architecture prevents a single model outage from becoming a business outage.
</Details>

<Details summary="Fine-tuning">
Adapt base models to domain-specific tasks with curated datasets and evaluation benchmarks. Highest ROI when retrieval and prompting have reached their limits, not when routing or context assembly is broken.
</Details>

---

## Related depth

| Asset | Role |
| --- | --- |
| [G.A.I.N core](https://jitendersharma.dev/frameworks) | Operating model spine |
| [How to model LLM gateway](https://jitendersharma.dev/blueprints/llm-gateway) | Platform ingress, registry, shared ops (blueprint) |
| [LLM Integration Guide](https://jitendersharma.dev/playbooks/llm-integration-guide) | How to build |
