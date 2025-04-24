import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import { parseDisplayName } from '../lib/string'
import { Button, Heading, Hr, Img, Link, Section, Text } from './_components'
import Layout from './Layout'

const NewReplyCommentEmail = ({
  postLink = 'https://spot.bicheng.me',
  postTitle = '测试文章 Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  postImageUrl = 'https://cn.zolplay.com/api/og?title=测试文章',
  userFirstName = 'Cali',
  userLastName = 'Castle',
  userImageUrl = 'https://cali.so/icon.png',
  commentContent = '*测试评论*\n- Wow wtf\n- Cool',
}: {
  postLink?: string | null
  postTitle?: string | null
  postImageUrl?: string | null
  userFirstName?: string | null
  userLastName?: string | null
  userImageUrl?: string | null
  commentContent?: string | null
}) => {
  const user = parseDisplayName({
    firstName: userFirstName,
    lastName: userLastName,
  })
  const title = `👋 Someone replied to your message`

  return (
    <Layout previewText={title}>
      <Heading>{title}</Heading>
      <Section className="mt-[24px]">
        {postImageUrl && (
          <Img
            src={postImageUrl}
            alt=""
            width="100%"
            className="mx-auto my-0"
          />
        )}
        <Text className="text-[14px] leading-[24px] text-black">
          {userImageUrl && (
            <Img
              src={userImageUrl}
              alt=""
              width="24"
              height="24"
              className="rounded-full"
            />
          )}
        </Text>
        {postLink && (
          <Text className="text-[14px] leading-[24px] text-black">
            <b>{user}</b>&nbsp;replied to 「
            <Link href={postLink} className="font-bold underline">
              {postTitle}
            </Link>
            」：
          </Text>
        )}
      </Section>

      <Section className="px-2 text-[14px] leading-[16px] text-zinc-700">
        {commentContent && <ReactMarkdown>{commentContent}</ReactMarkdown>}
      </Section>

      <Hr className="mx-0 my-[26px] h-px w-full bg-zinc-100" />

      <Section className="mb-[32px] mt-[32px] text-center">
        {postLink && (
          <Button
            pX={20}
            pY={12}
            className="rounded-xl bg-zinc-900 text-center text-[12px] font-semibold text-white no-underline"
            href={postLink}
          >
            Check original post
          </Button>
        )}
      </Section>
      {postLink && (
        <Text className="text-[14px] leading-[24px] text-black">
          or copy the link and open in browser：
          <br />
          <Link href={postLink} className="text-blue-600 no-underline">
            {postLink}
          </Link>
        </Text>
      )}
    </Layout>
  )
}

export default NewReplyCommentEmail
