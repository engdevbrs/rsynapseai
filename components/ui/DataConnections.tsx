'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Node {
  x: number
  y: number
  id: number
}

interface DataConnectionsProps {
  nodeCount?: number
  className?: string
}

export default function DataConnections({
  nodeCount = 8,
  className = '',
}: DataConnectionsProps) {
  const [nodes, setNodes] = useState<Node[]>([])

  useEffect(() => {
    // Generate random node positions
    const newNodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setNodes(newNodes)
  }, [nodeCount])

  // Generate connections between nearby nodes
  const connections = nodes.flatMap((node, i) =>
    nodes.slice(i + 1).map((otherNode) => ({
      from: node,
      to: otherNode,
      distance: Math.sqrt(
        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
      ),
    }))
  ).filter(conn => conn.distance < 40) // Only connect nearby nodes

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full" style={{ opacity: 0.3 }}>
        {/* Connection Lines */}
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 1,
            }}
          />
        ))}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.8)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-accent to-blue-primary"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: node.id * 0.2,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-accent blur-sm animate-pulse" />
        </motion.div>
      ))}
    </div>
  )
}
