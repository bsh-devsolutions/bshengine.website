import { vars } from "."

export interface HeroData {
  badge: {
    text: string
    icon: string
  }
  headline: {
    line1: string
    line2: string
  }
  subheadline: {
    text: string
    highlight: string
    additional: string
  }
  cta: {
    primary: {
      text: string
      href: string
    }
    secondary: {
      text: string
      href: string
    }
  }
  image: {
    src: string
    alt: string
  }
}

export const heroData: HeroData = {
  badge: {
    text: 'Backend Engine',
    icon: '✨',
  },
  headline: {
    line1: 'Build APIs',
    line2: 'Effortlessly',
  },
  subheadline: {
    text: 'A powerful backend tool that helps you',
    highlight: 'start and scale',
    additional: 'your backend with ease. Eliminate boilerplate code and accelerate your development.',
  },
  cta: {
    primary: {
      text: 'Get Started',
      href: vars.bshEngineDocs + '/installation',
    },
    secondary: {
      text: 'View Documentation',
      href: vars.bshEngineDocs,
    },
  },
  image: {
    src: '/bsgengine.png',
    alt: 'BshEngine Screenshot',
  },
}

