import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface SectionProps {
  title: string
  children: React.ReactNode
  index?: number
  to?: string
}

export function Section({ title, children, index = 0, to }: SectionProps) {
  const sectionContent = (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {children}
      </motion.div>
      {to && (
        <motion.div
          className="section-hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Click for more details
        </motion.div>
      )}
    </>
  )

  const motionProps = {
    className: 'section',
    initial: { opacity: 0, y: 44 } as const,
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true, margin: '0px 0px -60px 0px', amount: 0.2 } as const,
    transition: {
      duration: 0.55,
      delay: index * 0.18,
      ease: [0.22, 0.61, 0.36, 1],
    },
    whileHover: {
      y: -4,
      boxShadow:
        '0 16px 36px rgba(0,0,0,.1), 0 6px 16px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.9), inset 0 -1px 0 rgba(0,0,0,.02)',
      transition: { duration: 0.2 },
    },
  }

  if (to) {
    return (
      <Link to={to} className="section-link-wrapper">
        <motion.section {...motionProps}>
          {sectionContent}
        </motion.section>
      </Link>
    )
  }

  return <motion.section {...motionProps}>{sectionContent}</motion.section>
}
