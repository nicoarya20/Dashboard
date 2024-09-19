import {AllLayout} from '@/module/_global/layout/all_layout'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <AllLayout>
         {children}
      </AllLayout>
    </div>
  )
}
