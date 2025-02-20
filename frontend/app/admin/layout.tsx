import AdminNavbar from '@/components/admin_navbar'
import AdminSidebar from '@/components/admin_sidebar'
import React from 'react'
import Provider from '../provider/Provider'

export default function RootLayout({ children }:  { children: Readonly<React.ReactNode> }) {
  return (
    <div className='w-full h-full bg-dark min-h-screen max-h-screen'>
          <AdminNavbar />
       
 
          <div className='flex w-full flex-row text-white'>
               {/**Side bar */}
               <AdminSidebar />
               {children}
          </div>
  
    </div>
  )
}
