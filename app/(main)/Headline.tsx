'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
// import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>Data
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      Product
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>Explorer</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span>Diaper Changer</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:w-max"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，<Designer />，
        <br />
        <OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          Hi, I am Bicheng. I graduated from the National University of Singapore (NUS) with a degree in Business Analytics. Today, with 3 years of experience in launching digital product, I channel my analytical skills into my current role as a Senior Product Analyst. I&apos;m laser-focused on honing my product management skills with the aspiration to become a Product Manager.
          <br />
          <br />
          My proudest title to date? &quot;Diaper Changer&quot; for a lively 2-year-old who ceaselessly reminds me of life&apos;s simple joys and the importance of responsibility.
          <br />
          <br />
          With a passion for our furry companions, I founded &quot;Pet Parents Club&quot;, a pet supply venture born out of love for our furry friends. Though its journey has come to a pause, the experience was invaluable. Much like the ethos behind &quot;B for Benevolent&quot;, I stand firm in my belief in the subtle yet impactful power of goodwill and sincere engagement, both in professional occasions and everyday encounters.  
          <br />
          <br />
          Thank you for stopping by, and I hope my learning exhausts prove valuable to you.

        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://bicheng.me/twitter"
          aria-label="twitter"
          platform="twitter"
        />
        {/* <SocialLink
          href="https://bicheng.me/youtube"
          aria-label="youtube"
          platform="youtube"
        /> */}
        <SocialLink
          href="https://bicheng.me/linkedin"
          aria-label="linkedin"
          platform="linkedin"
        />
        <SocialLink
          href="https://bicheng.me/github"
          aria-label="github"
          platform="github"
        />
        {/* <SocialLink
          href="https://bicheng.me/tg"
          aria-label="telegram"
          platform="telegram"
        /> */}
        <SocialLink
          href="mailto:bicheng.gu@yahoo.com"
          aria-label="email"
          platform="mail"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS Subscription" />
      </motion.div>
    </div>
  )
}
