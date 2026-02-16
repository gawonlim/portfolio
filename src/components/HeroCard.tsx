import { motion } from 'framer-motion'

const logoUrl = '/UIUC-Logo.png'
const fallbackLogoUrl = '/uiuc-logo.png'

export function HeroCard() {
  return (
    <motion.section
      className="hero"
      aria-label="Business card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          y: -8,
          boxShadow:
            '0 20px 50px rgba(0,0,0,.28), 0 10px 20px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.95), inset 0 -1px 0 rgba(0,0,0,.05)',
          transition: { duration: 0.25, ease: 'easeOut' },
        }}
      >
        <div className="corner-left ink">gawonlim2002@gmail.com</div>

        <div className="corner-right">
          <img
            src={logoUrl}
            alt="UIUC logo"
            className="uiuc-logo"
            onError={(e) => {
              const target = e.currentTarget
              if (target.src !== fallbackLogoUrl) target.src = fallbackLogoUrl
            }}
          />
        </div>

        <div className="center">
          <div className="name ink">
            G<span className="small">AWON</span> LIM
          </div>
          <div className="title ink">M.S. in Information Management</div>
        </div>

        <div className="address ink">
          Trustworthy AI Researcher · Game AI Developer · Stu/dio Programmer
        </div>
      </motion.div>
    </motion.section>
  )
}
