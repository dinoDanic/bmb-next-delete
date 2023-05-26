import React from "react"
import { Center, Stack } from "@/components"

import { Heading, Text } from "@/components/typography"

const LoginPage = () => {
  return (
    <Center>
      <Stack gap="lg">
        <Heading level="1" className="text-center">
          WELCOME BACK
        </Heading>
        <Text className="text-center">
          We are happy to invite you to the upgraded platform! Log in to your
          account and start enjoying music.
        </Text>
      </Stack>
    </Center>
  )
}

export default LoginPage
