'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { handleSignOut } from '@/app/actions/admin';
import { useMutation } from '@tanstack/react-query';



export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const {data, isSuccess, mutate } = useMutation({ 
         mutationFn: handleSignOut,
         onSuccess: (data) => { 
            console.log('Sign out successful', data);
         },
    });

    console.log(data);
    console.log(isSuccess);


    const signOut = async () => { 
         mutate();

         if (isSuccess) {
            console.log('Sign out successful');
           
            router.refresh();
         }
    }
    
  return (
    <div className='border-r-[1px] relative border-r-white w-[16rem] h-full min-h-screen mt-1 bg-dark'>
        <div className={`flex flex-col text-white gap-6 mt-[5rem] justify-self-center items-start w-full px-4`}>
              <Link className={pathname === '/admin/dashboard' ? 'text-primaryColor' : ''} href='/admin/dashboard'>
                   <p>Dashboard</p>
               </Link>
               <Link className={pathname === '/admin/inventory' ? 'text-primaryColor' : ''} href='/admin/inventory'>
                   <p>Inventory</p>
               </Link>
               <Link className={pathname === '/admin/customers' ? 'text-primaryColor' : ''} href='/admin/customers'>
                   <p>Customers</p>
               </Link>
               <Link className={pathname === '/admin/analytics' ? 'text-primaryColor' : ''} href='/admin/analytics'>
                   <p>Anaytics</p>
               </Link>
        </div>


        <div className='absolute flex flex-row items-center w-full px-4 py-4 text-white gap- bottom-3'>
             <button type='button' onClick={signOut} className='flex flex-row items-center gap-2'>
               <LogOut color='#ffff' size={20}/>
               <p className=''>Sign out</p>
             </button>
        </div>
    </div>
  )
}
