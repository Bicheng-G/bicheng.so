import * as React from 'react'

import { emailConfig } from '../config/email'
import { Button, Heading, Hr, Img, Link, Section, Text } from './_components'
import Layout from './Layout'

const ConfirmSubscriptionEmail = ({ link = 'link.com/confirm?fake-token' }) => {
  const previewText = `Comfirm subscribing to Bicheng？`

  return (
    <Layout previewText={previewText}>
      <Section className="mt-[24px]">
        <Img
          src={`${emailConfig.baseUrl}/subscription-email-header.jpg`}
          width="250"
          height="129.28"
          alt="Bicheng"
          className="mx-auto my-0"
        />
      </Section>
      <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black">
        Subscribe to Bicheng
      </Heading>
      <Text className="text-[14px] leading-[24px] text-black">Hello!</Text>
      <Text className="text-[14px] leading-[24px] text-black">
        To verify this action, please click the button below to confirm your subscription to Bicheng's updates. Thank you 🙏.
      </Text>
      <Section className="mb-[32px] mt-[32px] text-center">
        <Button
          pX={20}
          pY={12}
          className="rounded-xl bg-zinc-900 text-center text-[12px] font-semibold text-white no-underline"
          href={link}
        >
          Confirm Subscription
        </Button>
      </Section>
      <Text className="text-[14px] leading-[24px] text-black">
        or copy the link and open in browser:
        <br />
        <Link href={link} className="text-blue-600 no-underline">
          {link}
        </Link>
      </Text>
      <Hr className="mx-0 my-[26px] h-px w-full bg-zinc-100" />
      <Text className="text-[12px] leading-[24px] text-[#666666]">
        If this action was not initiated by you, feel free to ignore this email. If you have any questions, don't hesitate to contact me.
      </Text>
    </Layout>
  )
}

export default ConfirmSubscriptionEmail
