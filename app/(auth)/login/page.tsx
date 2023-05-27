import React from "react"
import { Stack } from "@/components"
import { LoginForm } from "@/features/auth/components/LoginForm"

import { Heading, Text } from "@/components/typography"

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
