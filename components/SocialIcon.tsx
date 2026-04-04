import type { SVGProps } from 'react'

type SocialIconName = 'Facebook' | 'X' | 'Instagram'

type SocialIconProps = SVGProps<SVGSVGElement> & {
  name: SocialIconName
}

export default function SocialIcon({ name, ...props }: SocialIconProps) {
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    )
  }

  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21l-6.56 7.494L22 22h-6.093l-4.77-6.236L5.687 22H2.93l7.007-8.006L2 2h6.138l4.312 5.651L18.244 2Zm-1.069 18h1.52L7.415 3.893H5.79L17.175 20Z" />
    </svg>
  )
}
