type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  location?: string
  achievements?: string[]
}

type Education = {
  institution: string
  degree: string
  start: string
  end: string
  location: string
  gpa?: string
  coursework?: string[]
  achievements?: string[]
}

type Skill = {
  category: string
  skills: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EDUCATION: Education[] = [
  {
    institution: 'Institut Teknologi Bandung (ITB)',
    degree: 'Bachelor of Informatics Engineering',
    start: 'Aug 2020',
    end: 'Oct 2024',
    location: 'Bandung, Indonesia',
    gpa: '3.76',
    coursework: [
      'Algorithm & Data Structure',
      'Object Oriented Programming',
      'Database',
      'Software Engineering',
      'Computational Logic',
      'Operating System'
    ]
  },
  {
    institution: 'University of Waterloo',
    degree: 'Exchange Program',
    start: 'Aug 2023',
    end: 'Dec 2023',
    location: 'Waterloo, Canada',
    achievements: [
      'Awarded fully funded Indonesian International Student Mobility Awards (IISMA) scholarship, selected from 12,000+ applicants',
      'Coursework: Modern Global History (78%), Introductory Psychology (85%), The Physics of How Things Work (92%)'
    ]
  }
]

export const PROJECTS: Project[] = [
  {
    name: 'Resume Forge',
    description: 'Resume builder incorporating shadcn/ui, Lucide icons, MongoDB, and Gemini AI for focused resume feedback with scoring system and chat functionality.',
    link: '#',
    id: 'project1',
  },
  {
    name: 'effie.boo',
    description: 'Project management tool for managing links to resources like Figma, Google Sheets, GitHub, and Docs. Backend in Firebase, middleware in NextJS, with 30 registered users and daily traffic.',
    link: 'https://effie.boo',
    id: 'project2',
  },
  {
    name: 'Freelance Projects',
    description: 'Multiple projects including 3D interactive websites and industrial machine scheduling solutions, consistently meeting deadlines and receiving positive client feedback.',
    link: '#',
    id: 'project3',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'GlobalDeel',
    title: 'Intern',
    start: 'March 2024',
    end: 'Present',
    location: 'Japan',
    link: '#',
    id: 'work1',
    achievements: [
      'Developed 5 full web pages and company landing page, increasing credibility and brand trust',
      'Managed company\'s first hackathon competition, contacting 250+ companies, resulting in 3 confirmed sponsors',
      'Led a team of 3 multinational interns to create proposal materials, media plans, and competition website'
    ]
  },
  {
    company: 'GDP Labs',
    title: 'Software Engineer Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    location: 'Indonesia',
    link: '#',
    id: 'work2',
    achievements: [
      'Developed version 3.0 of a vulnerability assessment tool using microservice architecture',
      'Collaborated to create platform architecture, build the tool, and write user documentation'
    ]
  },
  {
    company: 'tiket.com',
    title: 'Frontend Engineer Intern',
    start: 'Aug 2022',
    end: 'Jan 2023',
    location: 'Indonesia',
    link: '#',
    id: 'work3',
    achievements: [
      'Fixed around 25 frontend bugs in the payment and refund system, enhancing platform stability',
      'Updated division-wide icons in React during the Blibli merger to maintain clear UI',
      'Collaborated with a multinational team in an agile environment'
    ]
  },
  {
    company: 'reekan',
    title: 'Backend Engineer Intern',
    start: 'Jun 2022',
    end: 'Jul 2022',
    location: 'Indonesia',
    link: '#',
    id: 'work4',
    achievements: [
      'Built the backend for an MVP education platform from scratch, delivering 9 endpoints within one month',
      'Implemented authentication features including login, registration, and password reset with OTP via email'
    ]
  }
]

export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Go']
  },
  {
    category: 'Frameworks',
    skills: ['React', 'NextJS', 'Gin', 'FastAPI']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Supabase', 'Firebase']
  },
  {
    category: 'Tools & Libraries',
    skills: ['ThreeJS', 'Jotai', 'shadcn/ui', 'Vercel AI SDK', 'Podman', 'RabbitMQ', 'Google Tag Manager', 'Google Analytics', 'Microsoft Clarity', 'Vercel', 'Kinde']
  },
  {
    category: 'Languages',
    skills: ['English (Duolingo English Test 140)', 'Indonesian (Native)']
  }
]

export const COMPETITIONS = [
  {
    title: '5th Place GarudaHacks 5.0 - Hackathon',
    description: 'Team of 3',
    date: 'July 2024'
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/christopherjeffrey',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/christopherjeffrey',
  },
  {
    label: 'Portfolio',
    link: 'https://christojeffrey.effie.boo/me',
  },
]

export const EMAIL = 'christopherjeffrey492@gmail.com'
