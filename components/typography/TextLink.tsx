import React from "react"
import Link from "next/link"

type TextLinkProps = {
  href: string
}

type Props = TextLinkProps

const TextLink = React.forwardRef<HTMLHeadingElement, Props>(
  ({ href }, ref) => {
    return (
      <Link href={href}>
        <div ref={ref}>lol</div>
      </Link>
    )
  }
)

TextLink.displayName = "TextLink"

export { TextLink }
