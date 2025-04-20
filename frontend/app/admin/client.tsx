'use client';

import AdminNavbar from '@/components/admin_navbar';
import AdminSidebar from '@/components/admin_sidebar';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Client ({ children }:  { children: Readonly<React.ReactNode> }) {
    const pathname = usePathname();

  return (
    <>
        {pathname !== '/admin/login' && <AdminNavbar /> }
        
       <div className='flex flex-row w-full text-white'>
            {/**Side bar */}
           {pathname !== '/admin/login' && <AdminSidebar />}
            {children}
       </div>
    </>
  )
}
