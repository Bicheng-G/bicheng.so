export const seo = {
  title: 'Bicheng Gu | Explorer, Diaper Changer',
  description:
    '',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://bicheng.me'
      : 'http://localhost:3000'
  ),
} as const
