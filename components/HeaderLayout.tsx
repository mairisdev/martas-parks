'use client'

import React from 'react'
import Menu from './menu/Menu'

export default function HeaderLayout() {
  return (
    <>
      <Menu />
    </>
  )
}

// Eksportējam arī atsevišķos komponentus
export { default as TopBar } from './topbar/TopBar'
export { default as Menu } from './menu/Menu'