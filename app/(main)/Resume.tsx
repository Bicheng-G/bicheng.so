import Image from 'next/image'
import React from 'react'

import { BriefcaseIcon } from '~/assets'

type Resume = {
  company: string
  title: string
  start: string
  end?: string | null
  logo: string
}

export function Resume({ resume }: { resume: Resume[] }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      {/* New container for heading and resume link */}
      <div className="flex items-center justify-between mb-6"> {/* Added flex classes here */}
        <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-5 w-5 flex-none" />
          <span className="ml-2">Experience</span>
        </h2>
        {/* Moved Resume link here and simplified container */}
        <span className="text-sm"> {/* Added text-sm for size consistency if needed */}
           <a href="https://cv.spot.bicheng.me" target="_blank" className="no-underline pb-0.5 border-b border-blue-400 hover:border-b-2 dark:border-lime-400">Resume↗ </a>
        </span>
      </div>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={role.company}
                className="h-8 w-8 rounded-full"
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Title</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-500/80 dark:text-zinc-400/80">
                {role.start}
                <span aria-hidden="true"> - </span> {role.end ?? 'Present'}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}