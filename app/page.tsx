'use client'
import { motion } from 'motion/react'
import {
  Header,
  Education,
  WorkExperience,
  Projects,
  Skills,
  Competitions,
  Blog,
  SocialLinks,
} from '@/components/sections'
import { VARIANTS_CONTAINER } from '@/lib/animations'

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <Education />
      <WorkExperience />
      <Competitions />
      <SocialLinks />
    </motion.main>
  )
}
