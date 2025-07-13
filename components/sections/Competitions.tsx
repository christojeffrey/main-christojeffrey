'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { COMPETITIONS } from '@/app/data'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/animations'

export function Competitions() {
  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <h3 className="mb-5 text-lg font-medium">Competitions</h3>
      <div className="flex flex-col space-y-2">
        {COMPETITIONS.map((competition) => (
          <div
            key={competition.title}
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-medium dark:text-zinc-100">
                    {competition.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {competition.description}
                  </p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {competition.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
} 