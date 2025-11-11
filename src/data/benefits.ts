import { Zap, Shield, Code2, LucideIcon, Settings } from 'lucide-react'

export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  iconBg: string
  stat: string
  statLabel: string
}

export const benefits: Benefit[] = [
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Get your backend running in minutes with Docker. No complex configuration needed.',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'from-amber-50 to-orange-50',
    stat: '< 5 min',
    statLabel: 'Setup Time',
  },
  {
    icon: Code2,
    title: 'Zero Boilerplate',
    description: 'Let us handle the repetitive tasks while you focus on what matters most, building your business logic.',
    gradient: 'from-blue-500 to-indigo-600',
    iconBg: 'from-blue-50 to-indigo-50',
    stat: '90%',
    statLabel: 'Less Code',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in authentication, RBAC, and audit trails. Production-ready from day one with industry best practices.',
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'from-emerald-50 to-teal-50',
    stat: '100%',
    statLabel: 'Secure',
  },
  {
    icon: Settings,
    title: 'Configurable',
    description: 'Everything is configurable. You can change the way the engine works to fit your needs.',
    gradient: 'from-purple-500 to-pink-600',
    iconBg: 'from-purple-50 to-pink-50',
    stat: '100%',
    statLabel: 'Customizable',
  },
]

export const keyPoints: string[] = [
  'Docker-based deployment',
  'PostgreSQL support',
  'RESTful APIs',
  'JWT Authentication',
  'Advanced search',
  'File management',
  'Email system',
  'RBAC & permissions',
  'Audit trails',
  'Postman collection',
  'Developer SDK',
  'Full documentation',
]

