export default function BlockedPage() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      <h1 className="mb-4 text-4xl font-black tracking-tighter">
        You have been blocked.
      </h1>
      <span className="text-sm">
        If you think it is a mistake, please email me at{' '}
        <a href="mailto:bicheng.gu@yahoo.com" className="font-bold underline">
          bicheng.gu@yahoo.com
        </a>
      </span>
    </main>
  )
}

export const revalidate = 3600 // 1 hour
