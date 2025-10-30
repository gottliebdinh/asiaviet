"use client"

import React from 'react'

type Props = {
  targetId: string
  className?: string
  children?: React.ReactNode
}

export default function ScrollHint({ targetId, className, children }: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a href={`#${targetId}`} onClick={onClick} className={className}>
      {children}
    </a>
  )
}


