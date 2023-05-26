"use client"

import React, { useState } from "react"
import { Stack } from "@/components"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { routes } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { loginFormSchema } from "../validation"

export const LoginForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setLoading(true)
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: routes.root,
    })
    setLoading(false)
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Stack>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email.." {...field} />
                </FormControl>
                <FormDescription>This is your email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password.." type="password" {...field} />
                </FormControl>
                <FormDescription>This is your public password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button loading={loading} type="submit" className="w-fit">
            Log in
          </Button>
        </Stack>
      </form>
    </Form>
  )
}
