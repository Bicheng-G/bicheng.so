export const seo = {
  title: 'Bicheng Gu | B for Benevolent',
  description:
    "I'm Bicheng, a Senior Product Analyst passionate about data-driven product management. Join me as I explore self-actualization, metacognition, and the unique lessons of parenting.",
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://bicheng.me'
      : 'http://localhost:3000'
  ),
} as const
