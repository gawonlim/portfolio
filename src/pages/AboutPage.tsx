import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AboutPage.css'

export function AboutPage() {
  return (
    <div className="about-page">
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

      <div className="about-header-wrapper">
        <Link to="/" className="about-back">
          ← Back
        </Link>
        <motion.header
          className="about-header-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="about-title">About</h1>
        </motion.header>
      </div>

      <div className="about-content">
        <motion.section
          className="about-section-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="about-section-title">Who am I, really?</h2>
          <p className="about-paragraph">
            <strong>I am a "why" person.</strong>
          </p>
          <p className="about-paragraph">
            For me, asking why is not optional—it is foundational.
          </p>
          <p className="about-paragraph">
            Why is this system designed this way?<br />
            Why do we solve this problem using this approach?<br />
            Why not another way?
          </p>
          <p className="about-paragraph">
            Throughout my education, I was the student who asked the most questions—not to challenge authority, but because questioning is how I learn. My curiosity naturally evolved into research. One question led to another, and soon "Why?" became "Why not?" That mindset led me into research early in my undergraduate years—and I have not stopped since.
          </p>
          <p className="about-paragraph">
            <strong>I do not believe expertise comes from already knowing the answers. I believe it comes from struggling with hard problems and discovering deeper structure through the process of solving them.</strong> Whether in academia or industry, I value the ability to identify the right questions, design thoughtful solutions, and grow through uncertainty.
          </p>
          <p className="about-paragraph">
            In a world where knowledge quickly becomes outdated, <strong>I do not aim to be someone who simply knows.<br />
            I aim to be someone who keeps asking.</strong>
          </p>
        </motion.section>
      </div>
    </div>
  )
}
