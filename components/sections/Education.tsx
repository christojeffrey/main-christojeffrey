'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { EDUCATION } from '@/app/data'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/animations'

export function Education() {
  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <h3 className="mb-5 text-lg font-medium">Education</h3>
      <div className="flex flex-col space-y-4">
        {EDUCATION.map((education) => (
          <div
            key={education.institution}
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between mb-2">
                <div>
                  <h4 className="font-medium dark:text-zinc-100">
                    {education.institution}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {education.degree}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {education.location}
                  </p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {education.start} - {education.end}
                </p>
              </div>
              {education.gpa && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  GPA: {education.gpa}
                </p>
              )}
              {education.coursework && (
                <div className="mb-2">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                    Relevant Coursework:
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {education.coursework.join(', ')}
                  </p>
                </div>
              )}
              {education.achievements && (
                <div>
                  {education.achievements.map((achievement, index) => (
                    <p key={index} className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                      {achievement}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
} 