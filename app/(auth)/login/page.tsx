import React from "react"
import { LoginForm } from "@/features/auth/components/LoginForm"

import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

const LoginPage = () => {
  return (
    <div className="place-content-center">
      <Stack gap="lg">
        <Heading level="1" className="text-center">
          WELCOME BACK
        </Heading>
        <Text className="text-center">
          We are happy to invite you to the upgraded platform! Log in to your
          account and start enjoying music.
        </Text>
        <LoginForm />
      </Stack>
    </div>
  )
}

export default LoginPage
