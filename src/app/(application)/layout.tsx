import { LayoutBackground } from '@/module/_global'
import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <LayoutBackground>
      {children}
    </LayoutBackground>
  )
}
