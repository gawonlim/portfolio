import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { trustworthyAINodes, connections, type NodeData, type NodeDetail } from './trustworthyAIData'
import './TrustworthyAIPage.css'

const LAYER_LABELS: Record<string, string> = {
  input: 'INPUT LAYER',
  mlai: 'ML/AI LAYER',
  llm1: 'LLM RESEARCH LAYER',
  llm2: 'LLM PROJECT LAYER',
  output: 'OUTPUT LAYER',
}

function getNodePositions(nodes: NodeData[]) {
  const byLayer = { input: [] as NodeData[], mlai: [] as NodeData[], llm1: [] as NodeData[], llm2: [] as NodeData[], output: [] as NodeData[] }
  nodes.forEach((n) => byLayer[n.layer].push(n))
  const colX = { input: 12, mlai: 32, llm1: 50, llm2: 68, output: 88 }
  const positions: Record<string, { x: number; y: number }> = {}
  const spread = (arr: NodeData[], baseY: number) => {
    if (arr.length === 0) return
    if (arr.length === 1) {
      positions[arr[0].id] = { x: colX[arr[0].layer as keyof typeof colX], y: 50 }
      return
    }
    const step = 70 / (arr.length + 1)
    arr.forEach((n, i) => {
      positions[n.id] = { x: colX[n.layer as keyof typeof colX], y: baseY + (i + 1) * step }
    })
  }
  spread(byLayer.input, 15)
  spread(byLayer.mlai, 15)
  spread(byLayer.llm1, 15)
  spread(byLayer.llm2, 15)
  spread(byLayer.output, 15)
  return positions
}

export function TrustworthyAIPage() {
  const [selected, setSelected] = useState<NodeDetail | null>(null)
  const positions = useMemo(() => getNodePositions(trustworthyAINodes), [])

  return (
    <div className="nn-page">
      <img
        src="/keyboard.jpg"
        alt="Keyboard"
        className="keyboard-bg"
      />
      <div className="nn-header-wrapper">
        <Link to="/" className="nn-back">
          ← Back
        </Link>
        <motion.header
          className="nn-header-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="nn-title">Trustworthy AI</h1>
          <p className="nn-subtitle">
            Each node represents an experience or focus. Click any node to see details.
          </p>
        </motion.header>
      </div>

      <div className="nn-viz-wrapper">
        <div className="nn-viz">
        <svg className="nn-connections" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(91,143,185,0.4)" />
              <stop offset="100%" stopColor="rgba(74,155,142,0.4)" />
            </linearGradient>
          </defs>
          {connections.map(([fromId, toId], i) => {
            const from = positions[fromId]
            const to = positions[toId]
            if (!from || !to) return null
            return (
              <line
                key={`${fromId}-${toId}-${i}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#lineGrad)"
                strokeWidth="0.35"
                className="nn-line"
              />
            )
          })}
        </svg>

        {(['input', 'mlai', 'llm1', 'llm2', 'output'] as const).map((layer) => (
          <div key={layer} className="nn-column" data-layer={layer}>
            <span className="nn-layer-label">{LAYER_LABELS[layer]}</span>
            <div className="nn-nodes">
              {trustworthyAINodes
                .filter((n) => n.layer === layer)
                .map((node) => (
                  <motion.button
                    key={node.id}
                    type="button"
                    className="nn-node"
                    style={{
                      ['--node-color' as string]: node.color,
                    }}
                    onClick={() => setSelected(node.detail)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="nn-node-icon">{node.icon}</span>
                    <span className="nn-node-label">{node.label}</span>
                    <span className="nn-node-sublabel">{node.sublabel}</span>
                  </motion.button>
                ))}
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="nn-footer">
        <span className="nn-propagation">→ FORWARD PROPAGATION →</span>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="nn-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="nn-modal"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="nn-modal-close"
                aria-label="Close"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              <span className="nn-modal-layer">{selected.layerLabel}</span>
              <h2 className="nn-modal-title">{selected.title}</h2>
              {selected.degrees && selected.degrees.length > 0 ? (
                <>
                  {selected.degrees.map((degree, idx) => (
                    <div key={idx} className="nn-modal-degree">
                      <h3 className="nn-modal-degree-title">{degree.title}</h3>
                      <p className="nn-modal-meta">
                        {degree.affiliation}
                        {degree.dates && ` · ${degree.dates}`}
                      </p>
                      <p className="nn-modal-desc">{degree.description}</p>
                      {idx < selected.degrees!.length - 1 && <hr className="nn-modal-divider" />}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <p className="nn-modal-meta">
                    {selected.affiliation}
                    {selected.dates && ` · ${selected.dates}`}
                  </p>
                  <p className="nn-modal-desc">{selected.description}</p>
                  {selected.link && (
                    <div className="nn-modal-link-section">
                      <a href={selected.link} target="_blank" rel="noopener noreferrer" className="nn-modal-link">
                        {selected.linkText || 'View Publication'} →
                      </a>
                    </div>
                  )}
                  {selected.highlights && selected.highlights.length > 0 && (
                    <div className="nn-modal-section">
                      <h3 className="nn-modal-heading">KEY HIGHLIGHTS</h3>
                      <ul className="nn-modal-highlights">
                        {selected.highlights.map((h, i) => (
                          <li key={i}><span className="nn-modal-arrow">→</span> {h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selected.skills && selected.skills.length > 0 && (
                    <div className="nn-modal-section">
                      <h3 className="nn-modal-heading">TECHNOLOGIES & SKILLS</h3>
                      <p className="nn-modal-skills">{selected.skills.join(' · ')}</p>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
