'use client'
import { motion } from 'motion/react'
import { SKILLS } from '@/app/data'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/animations'

export function Skills() {
  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <h3 className="mb-5 text-lg font-medium">Skills</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skillCategory) => (
          <div key={skillCategory.category} className="space-y-2">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-50">
              {skillCategory.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillCategory.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
} 