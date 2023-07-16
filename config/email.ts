export const emailConfig = {
  from: 'bicheng.gu@yahoo.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://bicheng.me`
      : 'http://localhost:3000',
}
