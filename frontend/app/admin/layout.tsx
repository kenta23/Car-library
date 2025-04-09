import React from 'react'
import Client from './client'

export default function RootLayout({ children }:  { children: Readonly<React.ReactNode> }) {

  return (
    <div className='w-full h-full max-h-screen min-h-screen bg-dark'>
        <Client>
            {children}
        </Client>
    </div>
  )
}
