export const emailConfig = {
  from: 'hi@bicheng.me',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://bicheng.me`
      : 'http://localhost:3000',
}
