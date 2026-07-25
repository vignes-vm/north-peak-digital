import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ParticleBackground() {
  const { isDark } = useTheme();

  // Floating background decorative particles
  const particles = [
    { id: 1, top: '15%', left: '10%', size: 'w-72 h-72', color: isDark ? 'bg-blue-600/15' : 'bg-blue-400/25', duration: 18 },
    { id: 2, top: '45%', left: '75%', size: 'w-96 h-96', color: isDark ? 'bg-purple-600/15' : 'bg-cyan-300/30', duration: 22 },
    { id: 3, top: '70%', left: '20%', size: 'w-80 h-80', color: isDark ? 'bg-cyan-500/15' : 'bg-indigo-300/25', duration: 20 },
    { id: 4, top: '85%', left: '80%', size: 'w-64 h-64', color: isDark ? 'bg-indigo-600/15' : 'bg-blue-300/30', duration: 16 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full blur-3xl ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
