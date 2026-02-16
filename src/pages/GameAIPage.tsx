import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './GameAIPage.css'

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
        <motion.section
          className="gameai-section-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
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
