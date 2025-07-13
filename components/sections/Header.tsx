'use client'
import { motion } from 'motion/react'
import { EMAIL } from '@/app/data'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/animations'

export function Header() {
  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Christopher Jeffrey
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Software Engineer focused on creating intuitive and performant web experiences.
          Bridging the gap between design and development with expertise in full-stack development.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </motion.section>
  )
} 