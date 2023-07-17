export const seo = {
  title: 'Bicheng Gu | Explorer, Father-of-one',
  description:
    '',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://bicheng.me'
      : 'http://localhost:3000'
  ),
} as const
