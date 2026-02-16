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
        <Section title="Trustworthy AI" index={1} to="/trustworthy-ai">
          <p className="muted">
            Trustworthy AI is essential to ensure that intelligent systems act <strong>fairly, reliably, and transparently</strong>. My research focuses on enhancing the credibility and balance of AI models—from addressing class imbalance in traditional machine learning and long-tailed distributions in deep learning for image classification, to exploring uncertainty and fairness in large language models. Through this work, I aim to build <strong>AI systems</strong> that are both <strong>technically robust</strong> and <strong>aligned with human values</strong>.
          </p>
        </Section>
        <Section title="Game AI" index={2} to="/game-ai">
          <p className="muted">
            I currently work as a <strong>Game AI Programmer</strong> at <strong>Stu/dio</strong>, where I develop intelligent systems that enable adaptive and interactive gameplay experiences. My current work includes building <strong>conversational NPC systems</strong> powered by <strong>large language models</strong> and exploring <strong>AI-driven optimization techniques</strong> to improve game production workflows.
          </p>
          <p className="muted">
            While these projects focus on enhancing gameplay and development efficiency today, my long-term vision is to build <strong>player-aware AI systems</strong> that learn from individual behavior, patterns, and preferences — ultimately enabling the autonomous generation of <strong>personalized game content</strong> tailored to each player's unique play style and needs.
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
