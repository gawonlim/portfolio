import { Routes, Route } from 'react-router-dom'
import { HeroCard } from './components/HeroCard'
import { Section } from './components/Section'
import { TrustworthyAIPage } from './pages/TrustworthyAIPage'
import { GameAIPage } from './pages/GameAIPage'
import { AboutPage } from './pages/AboutPage'

function HomePage() {
  return (
    <>
      <img
        src="/keyboard.jpg"
        alt="Keyboard"
        className="keyboard-bg"
      />
      <img
        src="/controller1.png"
        alt="Controller"
        className="controller-bg"
      />

      <HeroCard />

      <main id="more" className="content">
        <Section title="About" index={0} to="/about">
          <p className="muted">
            I am a researcher and developer passionate about building <strong>trustworthy AI systems</strong> and <strong>intelligent games</strong>.
            My goal is to lead innovations at the intersection of <strong>AI research</strong> and <strong>game development</strong>, creating fair, reliable, and engaging digital experiences through machine learning, generative AI, computer vision, and large language models.
            I earned my B.S. in Information Science with minors in Computer Science and Game Studies & Design at the <strong>University of Illinois Urbana-Champaign</strong>, where I am now pursuing my <strong>M.S. in Information Management</strong>.
          </p>
        </Section>
        <Section title="Game AI" index={1} to="/game-ai">
          <p className="muted">
            My work in Game AI focuses on how <strong>LLMs and agentic systems</strong> can reshape both player experiences and game development workflows. At <strong>Smilegate AI Center's Behavior AI Team</strong>, I worked on a production-facing <strong>AI Companion</strong> that learns from player feedback, and developed <strong>CHARM-QA</strong>, an end-to-end QA/QC pipeline where autonomous <strong>Player Agents</strong> play conversational game content and <strong>Evaluator Agents</strong> assess NPC behavior. At <strong>Stu/dio</strong>, I continue building <strong>conversational NPC systems</strong> and <strong>multi-agent architectures</strong> for interactive simulation games.
          </p>
          <p className="muted">
            Through these experiences, I have explored Game AI across three roles: <strong>Companion</strong>, <strong>Creator</strong>, and <strong>Evaluator</strong> — AI that builds relationships with players, generates and orchestrates game experiences, and autonomously tests and improves game content. My long-term goal is to build <strong>player-aware AI systems</strong> that can remember, reason, adapt, and continuously evolve with each player — making AI not simply a feature inside games, but a fundamental part of how games are created, played, and improved.
          </p>
        </Section>
        <Section title="Trustworthy AI" index={2} to="/trustworthy-ai">
          <p className="muted">
            Trustworthy AI is essential to ensure that intelligent systems act <strong>fairly, reliably, and transparently</strong>. My research focuses on enhancing the credibility and balance of AI models—from addressing class imbalance in traditional machine learning and long-tailed distributions in deep learning for image classification, to exploring uncertainty and fairness in large language models. Through this work, I aim to build <strong>AI systems</strong> that are both <strong>technically robust</strong> and <strong>aligned with human values</strong>.
          </p>
        </Section>
      </main>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/trustworthy-ai" element={<TrustworthyAIPage />} />
      <Route path="/game-ai" element={<GameAIPage />} />
    </Routes>
  )
}

export default App
