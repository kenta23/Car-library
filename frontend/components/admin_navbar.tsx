import React from 'react'
import Image from 'next/image';
import { Bell, UserRound } from 'lucide-react';


export default function AdminNavbar() {
  return (
    <div className="w-full h-[70px]">
      <div className="w-full px-[2rem] py-4 border-b-[1px] border-white justify-between items-center flex">
        <Image
          src={"/car library logo.png"}
          width={70}
          height={500}
          alt="car library logo"
        />

        
      <div className='flex justify-between items-center gap-3'>
            {/** notifications */}
            <Bell color='#E4C39C' size={25}/>

            <div className='flex bg-white rounded-full size-[40px] border-[#E0953F] border-[1px] items-center justify-center'>
               <UserRound className='text-center' color='#7F9A7D' size={25}/>  
            </div>
      </div>
      </div>
    </div>
  );
}
