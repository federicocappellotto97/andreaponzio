'use client'
import { cx } from 'class-variance-authority'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

type LinkProps = {
  children?: ReactNode
  target?: string
  className?: string
} & NextLinkProps

export const Link = React.forwardRef<any, LinkProps>(
  (
    {
      as,
      children,
      href = '/',
      target = '_self',
      locale,
      className,
      passHref,
      legacyBehavior,
      shallow,
      ...rest
    }: LinkProps,
    ref
  ) => {
    const pathname = usePathname()

    const active = pathname === href

    if (
      href &&
      typeof href === 'string' &&
      (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'))
    ) {
      return (
        <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
          {children}
        </a>
      )
    }

    return (
      <NextLink
        ref={ref}
        as={as}
        href={typeof href === 'string' ? href : { pathname: href?.pathname, query: href?.query }}
        shallow={shallow}
        target={target}
        scroll={false}
        passHref={passHref}
        prefetch={false}
        legacyBehavior={legacyBehavior}
        locale={locale ? locale : undefined}
        {...rest}
        onClick={(e) => {
          if (active) {
            e.preventDefault()
          }
          rest.onClick && !legacyBehavior && rest.onClick(e)
        }}
        className={cx(active ? 'pointer-events-none' : undefined, className)}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'
