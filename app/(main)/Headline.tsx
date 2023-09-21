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
          Hi, I am <span className="font-semibold">Bicheng</span>. Having earned my degree in Business Analytics from NUS, I now channel that analytical expertise as a <a href="https://www.linkedin.com/in/bicheng-gu" target="_blank" className="no-underline pb-0.5 border-b border-blue-400 hover:border-b-2 dark:border-lime-400">Senior Product Analyst</a>. With 3 years of experience in driving digital product launches, I sharpen my product management skills each day, setting my sights on a future Product Manager role.
          <br />
          <br />
          Driven by a spirit of exploration and a passion for our furry friends, I embarked on the trailhead adventure of co-founding the <a href="https://shopee.sg/petparentsclub" target="_blank" className="no-underline pb-0.5 border-b border-blue-400 hover:border-b-2 dark:border-lime-400">&apos;Pet Parents Club&apos;</a>. Our quest was to deliver top-notch chew toys and cozy beds. While I&apos;ve hit the &apos;paws&apos; button for now, the journey was nothing short of enlightening.
          <br />
          <br />
          My proudest title to date? <span className="font-semibold ">Diaper Changer</span> for a lively 2-year-old who constantly reminds me of life&apos;s simple joys and the depth of responsibility.
          <br />
          <br />
          Living by the ethos of <span className="font-semibold bg-slate-100 dark:bg-slate-800 hover:text-blue-600/75 dark:hover:text-lime-400/75"><svg className="w-3.5 h-3.5 inline-block vertical-align: top" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 2.5 18 14"><path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/></svg> B for Benevolent</span>, I stand firm in my belief in the subtle yet impactful power of goodwill and genuine connections. Thank you for stopping by. I hope it was a valuable pause in your day.
          <br />
          <br />
          <i>
          P.S. Ever signed a digital guestbook? <a href="https://bicheng.me/guestbook" className="no-underline pb-0.5 border-b border-blue-400 hover:border-b-2 dark:border-lime-400" >Do sign in and leave your mark</a>. Who knows, our next great conversation might just start there.
          </i> 
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
