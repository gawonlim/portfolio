import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './GameAIPage.css'

type FlowItem = string | { label: string; terminal?: boolean }

function FlowRow({ items, label }: { items: FlowItem[]; label?: string }) {
  return (
    <div className="gameai-flowcase">
      {label && <span className="gameai-flow-label">{label}</span>}
      <ol className="gameai-flow">
        {items.map((item, i) => {
          const text = typeof item === 'string' ? item : item.label
          const terminal = typeof item === 'string' ? false : item.terminal
          return (
            <li key={`${text}-${i}`} className={terminal ? 'is-terminal' : undefined}>
              <span className="gameai-flow-node">{text}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function StackNode({
  title,
  steps,
  note,
  variant,
}: {
  title: string
  steps?: string[]
  note?: string
  variant?: 'strong' | 'future'
}) {
  const className = ['gameai-stack-node', variant ? `is-${variant}` : ''].filter(Boolean).join(' ')
  return (
    <div className={className}>
      <span className="gameai-stack-title">{title}</span>
      {steps && steps.length > 0 && (
        <span className="gameai-stack-steps">
          {steps.map((step, i) => (
            <Fragment key={step}>
              {i > 0 && (
                <span className="gameai-stack-inner-arrow" aria-hidden="true">
                  ↓
                </span>
              )}
              <span className="gameai-stack-step">{step}</span>
            </Fragment>
          ))}
        </span>
      )}
      {note && <span className="gameai-stack-note">{note}</span>}
    </div>
  )
}

function StackArrow() {
  return (
    <span className="gameai-stack-arrow" aria-hidden="true">
      ↓
    </span>
  )
}

function Metric({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="gameai-metric">
      <span className="gameai-metric-value">{value}</span>
      <span className="gameai-metric-label">{label}</span>
      {note && <span className="gameai-metric-note">{note}</span>}
    </div>
  )
}

export function GameAIPage() {
  return (
    <div className="gameai-page">
      <img
        src="/controller1.png"
        alt="Controller"
        className="controller-bg"
      />

      <div className="gameai-header-wrapper">
        <Link to="/" className="gameai-back">
          ← Back
        </Link>
        <motion.header
          className="gameai-header-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gameai-title">Game AI</h1>
        </motion.header>
      </div>

      <div className="gameai-content">
        <motion.div
          className="gameai-rail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Featured Industry Work
        </motion.div>

        <motion.section
          className="gameai-section-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="gameai-eyebrow">Featured Industry Case Study</span>
          <div className="gameai-section-title-wrapper">
            <h2 className="gameai-section-title">Smilegate AI Center</h2>
            <span className="gameai-section-date">May 2026 – Aug 2026</span>
          </div>
          <p className="gameai-role">Language AI Research Intern — Behavior AI Team</p>

          <div className="gameai-section-content">
            <p className="gameai-paragraph gameai-lede">
              At Smilegate AI Center, I worked on both sides of conversational Game AI: building AI characters that learn and adapt to players, and building agentic systems that automatically play and evaluate those characters. My work spanned production-facing AI Companion systems, autonomous Player Agents, LLM-based evaluation, and end-to-end Game QA/QC automation.
            </p>

            <p className="gameai-tags">
              LLM Agents · AI Companion · Memory Systems · Game AI · LLM-as-a-Judge · Multi-Agent Systems · QA/QC Automation
            </p>

            <ol className="gameai-index">
              <li>
                <span className="gameai-index-num">01</span>
                <span>
                  <strong>Project Soulmate</strong> — AI Companion Behavior Correction
                </span>
              </li>
              <li>
                <span className="gameai-index-num">02</span>
                <span>
                  <strong>CHARM-QA</strong> — End-to-End Game AI QA/QC Automation
                </span>
              </li>
            </ol>

            {/* ---------------------------------------------------------- */}
            {/* PROJECT 01 — SOULMATE                                       */}
            {/* ---------------------------------------------------------- */}
            <div className="gameai-project">
              <span className="gameai-eyebrow">Project 01</span>
              <h3 className="gameai-project-title">Project Soulmate</h3>
              <p className="gameai-project-sub">AI Companion Behavior Correction</p>

              <div className="gameai-approach">
                <h4 className="gameai-approach-title">Project Overview</h4>
                <p className="gameai-paragraph">
                  Soulmate is a conversational AI Companion project where the character is expected not only to converse with the player, but to remember them and continuously adapt its behavior through accumulated interactions.
                </p>
              </div>

              <div className="gameai-approach">
                <h4 className="gameai-approach-title">My Role</h4>
                <p className="gameai-paragraph">
                  I developed the <strong>Behavior Correction system</strong>, enabling player requests such as “answer more briefly” or “change the way you speak” to persist beyond the immediate conversation context and modify the character’s long-term behavior.
                </p>
              </div>

              <div className="gameai-block">
                <h4 className="gameai-subsection-title">The Problem</h4>
                <p className="gameai-paragraph">
                  A player could explicitly ask the AI Companion to change its behavior. The character might temporarily follow the request while the conversation remained inside the context window, but eventually revert to its previous behavior.
                </p>

                <FlowRow
                  label="Before"
                  items={[
                    'User Correction',
                    'Recent Conversation Context',
                    'Temporary Behavior Change',
                    'Context Window Ends',
                    { label: 'Behavior Rolls Back', terminal: true },
                  ]}
                />

                <FlowRow
                  label="After"
                  items={[
                    'User Correction',
                    'Feedback Extraction',
                    'Persistent Behavior State',
                    'Update Decision',
                    'Character State Update',
                    { label: 'Persistent Behavior Change', terminal: true },
                  ]}
                />

                <p className="gameai-callout">Treat behavior correction as state, not conversation.</p>

                <p className="gameai-paragraph">
                  Behavior requests were therefore converted into structured, persistent records rather than being carried only by conversational history. Each request was normalized onto a defined behavior target so that it could be stored, updated, and applied independently of the current context window.
                </p>

                <p className="gameai-tags gameai-tags--mono">
                  tone · response_length · speech_ending · question_frequency · sound_effect · etc
                </p>
              </div>

              <div className="gameai-block">
                <span className="gameai-eyebrow">Engineering Challenge</span>
                <h4 className="gameai-subsection-title">Keeping Words and Actions Consistent</h4>

                <p className="gameai-paragraph gameai-lede">
                  A behavior correction is only trustworthy when what the character says matches what the system actually applies.
                </p>

                <p className="gameai-paragraph">
                  The system needed to decide whether a requested correction should actually be accepted, without adding perceived response latency. The initial implementation coupled that update decision with the much heavier update-content generation, which created the possibility that conversational response generation could finish before the persistent-state decision had been finalized.
                </p>

                <p className="gameai-paragraph">The important problem was therefore not only latency:</p>

                <p className="gameai-callout">
                  The character could verbally agree to change while the underlying persistent state did not actually change.
                </p>

                <figure className="gameai-figure">
                  <div className="gameai-figure-scroll">
                    <img
                      src="/soulmate-behavior-correction-flow.png"
                      width={2640}
                      height={1375}
                      alt="Two execution timelines comparing the Behavior Correction pipeline. In the Before timeline, feedback extraction and update generation run as one long serial chain that continues well past the point where the conversational response has already been generated. In the After timeline, a lightweight binary update decision is split out from the heavier update-content generation, and acceptance and rejection responses are pre-generated in parallel, so the persistent-state decision resolves alongside the response instead of after it."
                      loading="lazy"
                    />
                  </div>
                  <span className="gameai-figure-hint" aria-hidden="true">
                    Scroll horizontally to view the full timeline →
                  </span>
                  <figcaption className="gameai-figure-caption">
                    Behavior Correction execution flow — before and after separating update decision from update generation.
                  </figcaption>
                </figure>
              </div>

              <div className="gameai-block">
                <h4 className="gameai-subsection-title">The Solution</h4>

                <div className="gameai-approach">
                  <h5 className="gameai-approach-title">Parallel Pre-generation</h5>
                  <p className="gameai-paragraph">
                    Acceptance and rejection responses are generated in parallel while the update decision is still being resolved, hiding much of the decision latency from the user.
                  </p>
                </div>

                <div className="gameai-approach">
                  <h5 className="gameai-approach-title">Single Decision Source</h5>
                  <p className="gameai-paragraph">
                    A lightweight binary update decision becomes the single source of truth, controlling both the conversational response and whether the persistent behavior state is updated.
                  </p>
                </div>

                <div className="gameai-approach">
                  <h5 className="gameai-approach-title">Fail-safe Behavior</h5>
                  <p className="gameai-paragraph">
                    If the update decision fails or cannot be reliably resolved, the system defaults to rejection rather than allowing the character to promise a behavior change that may not actually occur.
                  </p>
                </div>

                <p className="gameai-callout">
                  The optimization was not simply about reducing latency; it was about making the character’s words and persistent behavior structurally consistent.
                </p>
              </div>

              <div className="gameai-block">
                <h4 className="gameai-subsection-title">Outcome</h4>
                <ul className="gameai-list">
                  <li>Integrated into the production-facing Soulmate build</li>
                  <li>Persistent behavior correction history stored as structured state</li>
                  <li>Used in internal testing and an executive demo</li>
                </ul>
                <p className="gameai-paragraph gameai-conclusion">
                  Reliable AI characters require more than strong generation. Memory, persistent state, latency, failure handling, and consistency between what the model says and what the system actually does are equally important.
                </p>
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* PROJECT 02 — CHARM-QA                                       */}
            {/* ---------------------------------------------------------- */}
            <div className="gameai-project">
              <span className="gameai-eyebrow">Project 02</span>
              <h3 className="gameai-project-title">CHARM-QA</h3>
              <p className="gameai-project-sub">Context-Aware Human-AI Roleplay Monitoring for QA</p>

              <div className="gameai-block">
                <h4 className="gameai-subsection-title">The Problem</h4>
                <h5 className="gameai-approach-title">How Do We QA LLM-driven Game Content?</h5>

                <div className="gameai-contrast">
                  <div className="gameai-contrast-item">
                    <span className="gameai-contrast-lead">Traditional game QA asks</span>
                    <p className="gameai-contrast-quote">“Did the player clear the quest?”</p>
                  </div>
                  <div className="gameai-contrast-item">
                    <span className="gameai-contrast-lead">Conversational AI also requires</span>
                    <p className="gameai-contrast-quote">“Did the NPC remain believable throughout the experience?”</p>
                  </div>
                </div>

                <p className="gameai-paragraph">
                  LLM-driven NPCs introduce subjective behavioral dimensions that traditional QA metrics cannot sufficiently capture:
                </p>
                <ul className="gameai-list">
                  <li>Persona Consistency</li>
                  <li>Dialogue Naturalness</li>
                  <li>Behavioral Failures</li>
                  <li>Player Experience</li>
                  <li>Evaluation Reproducibility</li>
                </ul>
                <p className="gameai-paragraph">
                  Human review also becomes difficult to scale once autonomous simulations generate thousands of conversational traces.
                </p>
              </div>

              <div className="gameai-block">
                <span className="gameai-eyebrow">My Solution</span>
                <h4 className="gameai-subsection-title">An End-to-End Agentic QA/QC Pipeline</h4>
                <p className="gameai-paragraph">
                  I designed and developed major components of <strong>CHARM-QA</strong>, an automated Game AI QA/QC pipeline that plays the game autonomously and evaluates the resulting conversations without manual review in the loop.
                </p>

                <div className="gameai-stack">
                  <StackNode
                    title="Player Agent"
                    steps={['Planning', 'Decision', 'Dialogue']}
                    variant="strong"
                  />
                  <StackArrow />
                  <StackNode title="Game / NPC Interaction" />
                  <StackArrow />
                  <StackNode title="Play Logs" />
                  <StackArrow />
                  <StackNode
                    title="Evaluator Agent"
                    note="Quantitative Signals + Context-aware LLM Judge"
                    variant="strong"
                  />
                  <StackArrow />
                  <StackNode title="QA/QC Results" />
                  <StackArrow />
                  <StackNode title="Future: Optimization / Re-test" variant="future" />
                </div>

                <p className="gameai-paragraph gameai-lede">
                  I designed and implemented the <strong>Player Agent architecture</strong>, the <strong>Persona Consistency Evaluator</strong>, and the <strong>Connector</strong> that turns autonomous gameplay directly into automated evaluation.
                </p>
              </div>

              <div className="gameai-block">
                <span className="gameai-eyebrow">Player Agent</span>
                <h4 className="gameai-subsection-title">A Game-specific Variant of ReAct</h4>
                <p className="gameai-paragraph">
                  The Player Agent was inspired by ReAct, but adapted specifically for a game environment, where the action space is bounded by what the game actually exposes and where progress is observable in game state rather than in the model’s own narration.
                </p>

                <FlowRow items={['Plan', 'Decide', 'Talk / Act', 'Observe', 'Re-plan']} />

                <div className="gameai-approach">
                  <h5 className="gameai-approach-title">Planning Agent</h5>
                  <p className="gameai-paragraph">
                    Uses game state, current progress, memory, and previous decisions to define long-term goals and sub-goals.
                  </p>
                </div>

                <div className="gameai-approach">
                  <h5 className="gameai-approach-title">Decision Agent</h5>
                  <p className="gameai-paragraph">
                    Determines the next game action, its target, and the reason for choosing that action.
                  </p>
                </div>

                <div className="gameai-approach">
                  <h5 className="gameai-approach-title">Dialogue Agent</h5>
                  <p className="gameai-paragraph">
                    Generates the actual player utterance toward an NPC, while also producing control signals about whether to continue, stop, or re-decide.
                  </p>
                </div>

                <figure className="gameai-figure">
                  <div className="gameai-figure-scroll">
                    <img
                      src="/player-agent-architecture.png"
                      width={2609}
                      height={1826}
                      alt="Player Agent architecture showing the three agents and the data that flows through them. Each agent receives a distinct filtered input and returns a structured output: the Planning Agent takes game state, progress, and prior goals and returns a goal with its reasoning and sub-goals; the Decision Agent takes the current plan, scene, dialogue history, and available objects and returns an action type, target, and reason; the Dialogue Agent takes the conversation goal and known facts and returns the player utterance plus a control signal for whether to continue, finish, or re-decide. Each agent's output feeds the next agent's input, and feedback flows back to earlier stages."
                      loading="lazy"
                    />
                  </div>
                  <span className="gameai-figure-hint" aria-hidden="true">
                    Scroll horizontally to view the full diagram →
                  </span>
                  <figcaption className="gameai-figure-caption">
                    Player Agent structure — the filtered input each agent receives and the structured output it returns.
                  </figcaption>
                </figure>

                <p className="gameai-paragraph">
                  Around these LLM agents sits a <strong>Stop Controller</strong> — a deterministic safety and control layer that decides when a run should end rather than leaving that judgment to the model.
                </p>
              </div>

              <div className="gameai-block">
                <h4 className="gameai-subsection-title">Design Principles</h4>
                <ul className="gameai-list">
                  <li>
                    Split reasoning into <strong>Planning / Decision / Dialogue</strong>
                  </li>
                  <li>
                    Map the action space directly to available <strong>game actions / APIs</strong>
                  </li>
                  <li>Filter observations so the Agent only receives information a real player should know</li>
                  <li>
                    Use deterministic <strong>hard rails</strong> for conditions that code can determine reliably
                  </li>
                  <li>
                    Ground quest completion in <strong>actual game-state changes</strong>, not LLM self-report
                  </li>
                </ul>
                <p className="gameai-callout">Do not ask an LLM what code already knows.</p>
              </div>

              <div className="gameai-block">
                <span className="gameai-eyebrow">Memory Design</span>
                <h4 className="gameai-subsection-title">From Complex Graph Memory to a Lightweight Claim Store</h4>

                <FlowRow
                  items={[
                    'External Graph Memory',
                    'Triple Store',
                    'Claim Schema',
                    'Graph + Embedding',
                    { label: 'Claim Store + Embedding Deduplication', terminal: true },
                  ]}
                />

                <p className="gameai-paragraph">
                  I initially experimented with graph-based memory architectures, but found that at the scale of a single quest session, graph maintenance complexity exceeded its retrieval benefit. I ultimately simplified the system into claim-level storage with embedding-based deduplication and selective retrieval.
                </p>
              </div>

              <div className="gameai-block">
                <span className="gameai-eyebrow">Evaluator Agent</span>
                <h4 className="gameai-subsection-title">Metrics Are Signals, Not Verdicts</h4>

                <p className="gameai-callout">
                  Quantitative metrics tell the system where to look — not what to conclude.
                </p>

                <p className="gameai-paragraph">
                  Quantitative signals such as speech-register consistency, honorific behavior, and emotion or state changes were used to <em>locate</em> suspicious utterances. The final judgment stayed context-aware: an utterance that looks anomalous in isolation is often entirely appropriate given what happened earlier in the conversation.
                </p>

                <div className="gameai-stack">
                  <StackNode title="Dialogue" />
                  <StackArrow />
                  <StackNode
                    title="Quantitative Signals"
                    note="Register · Honorific · Emotion"
                    variant="strong"
                  />
                  <StackArrow />
                  <StackNode title="Candidate Utterances" />
                  <StackArrow />
                  <div className="gameai-branch">
                    <div className="gameai-branch-item">
                      <span className="gameai-branch-label">Part 1 — Metric-Guided Evaluation</span>
                      <p className="gameai-branch-desc">
                        Checks whether metric-flagged utterances are actually problematic in conversational context.
                      </p>
                    </div>
                    <div className="gameai-branch-item">
                      <span className="gameai-branch-label">Part 2 — Blind Context Exploration</span>
                      <p className="gameai-branch-desc">
                        Reads the full conversation independently to discover issues the predefined metrics may miss.
                      </p>
                    </div>
                  </div>
                  <StackArrow />
                  <StackNode title="Merge" variant="strong" />
                  <StackArrow />
                  <StackNode title="Rationale Generation" variant="strong" />
                  <StackArrow />
                  <StackNode title="Final Problematic Utterances" />
                </div>
              </div>

              <div className="gameai-block">
                <span className="gameai-eyebrow">Evaluating the Evaluator</span>
                <h4 className="gameai-subsection-title">Reliability Before Optimization</h4>
                <p className="gameai-paragraph">
                  After improving recall, reproducibility turned out to be the more important bottleneck: an evaluator that reaches a different verdict on the same conversation from run to run cannot support a model-selection decision, no matter how good any single run looks.
                </p>

                <div className="gameai-metrics">
                  <Metric value="68%" label="of judgment flips" note="localized to Part 2" />
                  <Metric value="0.571 → 0.747" label="Part 2 inter-run Jaccard" note="after redesign" />
                  <Metric value="26 / 31" label="conversations improved" />
                </div>

                <p className="gameai-paragraph">
                  Instead of continuing prompt tuning blindly, I decomposed the evaluator and measured which stage was responsible for instability. The analysis localized most judgment flips to Part 2, leading to a targeted multi-judge panel redesign.
                </p>

                <FlowRow items={['Measure', 'Localize Failure', 'Redesign', { label: 'Verify', terminal: true }]} />
              </div>

              <div className="gameai-block">
                <span className="gameai-eyebrow">Human Validation</span>
                <h4 className="gameai-subsection-title">Does the Player Agent Actually Play Like a Human?</h4>

                <div className="gameai-table-wrap">
                  <table className="gameai-table">
                    <thead>
                      <tr>
                        <th scope="col">Metric</th>
                        <th scope="col">Agent vs. Human</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Turns to Completion</th>
                        <td>
                          <strong>×1.00</strong>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">NPC Transitions</th>
                        <td>
                          <strong>×1.03</strong>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Number of Quests</th>
                        <td>×1.09</td>
                      </tr>
                      <tr>
                        <th scope="row">Utterance Length</th>
                        <td>
                          <strong>×1.71</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="gameai-paragraph">
                  The Player Agent was compared against <strong>218 real player logs</strong>. Overall quest progression behavior was similar to humans, while utterance length remained a clear divergence and an identified improvement target.
                </p>
              </div>

              <div className="gameai-block">
                <h4 className="gameai-subsection-title">Automation &amp; Impact</h4>

                <div className="gameai-metrics">
                  <Metric value="~75%" label="Lower estimated cost" note="at 100-playthrough scale" />
                  <Metric value="~27×" label="Daily throughput" note="through unattended parallel execution" />
                  <Metric value="50 Runs" label="Actual model-comparison use case" />
                </div>

                <p className="gameai-paragraph">
                  The ~27× figure is daily throughput under unattended parallel execution — not a 27× reduction in the latency of an individual playthrough.
                </p>

                <p className="gameai-paragraph">
                  CHARM-QA was used in an actual NPC model-comparison workflow: five candidate models were evaluated through 50 autonomous playthroughs, combining automated gameplay and Persona Consistency evaluation to support the final model-selection decision.
                </p>
              </div>

              <div className="gameai-block">
                <h4 className="gameai-subsection-title">What I Built</h4>
                <ul className="gameai-list gameai-list--split">
                  <li>Player Agent</li>
                  <li>Persona Consistency Evaluation Agent</li>
                  <li>Player → Evaluation Connector</li>
                  <li>QA Dataset Labeling Tool</li>
                  <li>Player Agent Viewer</li>
                  <li>Player Agent Simulator</li>
                  <li>Human / Synthetic Evaluation Datasets</li>
                </ul>

                <FlowRow
                  items={[
                    'Research',
                    'System Architecture',
                    'Code',
                    'Tool',
                    { label: 'Actual QA Workflow', terminal: true },
                  ]}
                />
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* TAKEAWAYS                                                   */}
            {/* ---------------------------------------------------------- */}
            <div className="gameai-takeaways">
              <h3 className="gameai-subsection-title">Engineering Takeaways</h3>
              <ol className="gameai-takeaway-list">
                <li>Treat persistent behavior as state, not conversation.</li>
                <li>Do not ask an LLM what deterministic code already knows.</li>
                <li>Metrics should guide attention, not replace contextual judgment.</li>
                <li>An AI evaluator is only useful if its judgments reproduce.</li>
              </ol>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="gameai-rail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Previous / Supporting Game AI Experience
        </motion.div>

        <motion.section
          className="gameai-section-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="gameai-section-title-wrapper">
            <h2 className="gameai-section-title">Stu/dio Game AI Programmer</h2>
            <span className="gameai-section-date">Nov 2025 - Present</span>
          </div>
          <div className="gameai-section-content">
            <div className="gameai-subsection">
              <h3 className="gameai-subsection-title">What is Stu/dio?</h3>
              <p className="gameai-paragraph">
                Stu/dio is the University of Illinois' student-led game production studio operating in a professional, client-driven environment. The studio develops commissioned games for commercial, educational, and experimental purposes, managing the full production lifecycle — from client meetings and project scoping to budgeting, development, and deployment.
              </p>
              <p className="gameai-paragraph">
                Operating like an industry studio, Stu/dio brings together students from diverse disciplines — including Computer Science, Art & Design, English, and other fields — collaborating alongside domain experts to deliver complete, production-ready games.
              </p>
            </div>

            <div className="gameai-subsection">
              <h3 className="gameai-subsection-title">My Role</h3>
              <p className="gameai-paragraph">
                I joined Stu/dio as a Programmer and currently lead the development and optimization of AI systems for three conversational simulation games in active production.
              </p>
              <p className="gameai-paragraph">
                Each project centers around deep, player–NPC interaction, but client priorities differ significantly — requiring distinct architectural approaches.
              </p>

              <div className="gameai-approach">
                <h4 className="gameai-approach-title">Hybrid Conversational System</h4>
                <p className="gameai-paragraph">
                  For clients prioritizing low latency and narrative control, I designed a hybrid conversational system that integrates local small-scale models (SLMs) with structured branching dialogue frameworks (Ink/Inkle), ensuring deterministic story flow and fast response times.
                </p>
              </div>

              <div className="gameai-approach">
                <h4 className="gameai-approach-title">Multi-Agent LLM Architecture</h4>
                <p className="gameai-paragraph">
                  For clients emphasizing high conversational quality and creative flexibility, I implemented multi-agent LLM-based architectures leveraging APIs such as Gemini and GPT-4o, optimizing response generation speed while maintaining narrative coherence.
                </p>
              </div>

              <div className="gameai-focus">
                <h4 className="gameai-focus-title">Focus Areas</h4>
                <ul className="gameai-list">
                  <li>NPC response latency</li>
                  <li>Narrative consistency and control</li>
                  <li>Conversational realism</li>
                  <li>System scalability and optimization</li>
                </ul>
              </div>

              <p className="gameai-paragraph gameai-conclusion">
                Through this work, I design AI systems that are not only technically efficient but also aligned with client-specific experiential goals.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="gameai-section-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="gameai-section-title-wrapper">
            <h2 className="gameai-section-title">Hongik Evolutionary Game Lab</h2>
            <span className="gameai-section-date">May 2024 - Feb 2025</span>
          </div>
          <div className="gameai-section-content">
            <div className="gameai-subsection">
              <h3 className="gameai-subsection-title">Evolutionary Game Lab — Generative Quest Analysis</h3>
              <p className="gameai-paragraph">
                At the Evolutionary Game Lab (Hongik University), I conducted a comparative analysis of generative AI models (including GPT-4 and Gemini) on structured RPG quest generation tasks. The study utilized a curated dataset of 978 quest descriptions collected from six role-playing games, formatted to support controlled generative experiments.
              </p>
            </div>

            <div className="gameai-subsection">
              <h3 className="gameai-subsection-title">My Role</h3>
              <p className="gameai-paragraph">
                In addition to evaluation, I was responsible for fine-tuning selected models on the quest dataset. This required designing model-specific preprocessing pipelines, adapting data formats to meet each model's input requirements, and managing differences in tokenization, metadata structure, and prompt conditioning strategies across architectures.
              </p>

              <div className="gameai-focus">
                <h4 className="gameai-focus-title">Evaluation Metrics</h4>
                <p className="gameai-paragraph">
                  My primary responsibility was to evaluate and compare model outputs using quantitative and linguistic metrics such as:
                </p>
                <ul className="gameai-list">
                  <li>Perplexity</li>
                  <li>Lexical diversity</li>
                  <li>Word count distribution</li>
                  <li>Structural coherence</li>
                </ul>
              </div>

              <p className="gameai-paragraph gameai-conclusion">
                Through this analysis, I investigated how different generative models vary in narrative richness, consistency, and adaptability in game content generation.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
