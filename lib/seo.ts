export const seo = {
  title: 'Bicheng Gu | B for Benevolent',
  description:
    "I'm Bicheng, a Product Manager passionate about self-actualization, metacognition, and parenting.",
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://spot.bicheng.me'
      : 'http://localhost:3000'
  ),
} as const
