'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { ExternalLinkIcon } from '~/assets'
import { Card } from '~/components/ui/Card'
import { urlForImage } from '~/sanity/lib/image'
import { type Project } from '~/sanity/schemas/project'

export function ProjectCard({ project }: { project: Project }) {
  const { _id, url, icon, name, description } = project

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card
        as="li"
        key={_id}
        className="transition-shadow duration-200 hover:shadow-lg dark:hover:shadow-zinc-800/30"
      >
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={urlForImage(icon)?.size(100, 100).auto('format').url()}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full"
            unoptimized
          />
        </div>
        <h2 className="mt-6 text-base font-bold text-zinc-800 dark:text-zinc-100">
          <Card.Link href={url} target="_blank">
            {name}
          </Card.Link>
        </h2>
        <Card.Description>{description}</Card.Description>
        <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-lime-600 dark:text-zinc-200 dark:group-hover:text-lime-400">
          <span className="mr-2">{new URL(url).host}</span>
          <ExternalLinkIcon className="h-4 w-4 flex-none" />
        </p>
      </Card>
    </motion.div>
  )
}