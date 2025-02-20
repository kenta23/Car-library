import Link from 'next/link'
import React from 'react'
import Image from 'next/image'



export default function page() {
    
  return (
    <div className='w-full h-full'>
    <div className="flex w-full">
          <div className='w-[47.5rem] flex-1 h-full'>
             <Image src={'/background_car_red.png'} alt='red car'  width={500} height={500}/>
          </div>

          <div className='flex items-center justify-center flex-1 w-full px-6 py-3 '>
              <div className='flex flex-col items-center justify-center'>
                   <div className='flex flex-col items-center gap-3 '> 
                        <Image className='select-none' src={'/car library logo.png'} alt='car library logo' width={170} height={500}/>
                        <h1 className='text-2xl font-medium text-white'>Sign in to your account</h1>
                   </div>


                   {/**FORMS */}

                   <form action="" className='flex flex-col items-start gap-6 mt-10 max-w-80 w-72'>
                      <div className='flex flex-col items-start w-full gap-2 text-white'>
                         <label htmlFor="email">Email</label>
                         <input className='w-full h-10 p-2 bg-transparent border-2 border-white rounded-full outline-none' type="email" name="email" id="email" />
                      </div>

                      <div className='flex flex-col items-start w-full gap-2 text-white'>
                         <label htmlFor="password">Password</label>
                         <input className='w-full h-10 p-2 bg-transparent border-2 border-white rounded-full outline-none' type="password" name="password" id="password" />
                      </div>

                      <div className='w-full mt-4'>
                          <button className='w-full h-12 text-white rounded-full bg-primaryColor' type='submit'>
                               <span>Log in</span>
                          </button>
                      </div>
                   </form>


                   <div className='mt-5 text-white'>
                        <span>Don&#39;t have an account? </span><Link href={'/'}><span className='underline cursor-pointer'>Sign up</span></Link>
                   </div>
              </div>
          </div>
    </div>
</div>
  )
}
