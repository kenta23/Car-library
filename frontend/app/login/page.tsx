import Image from 'next/image'
import React from 'react'

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
                            <Image src={'/car library logo.png'} alt='car library logo' width={170} height={500}/>
                            <h1 className='text-2xl font-medium text-white'>Sign in to your account</h1>
                       </div>


                       {/**FORMS */}

                       <form action="">
                          <div className='flex flex-col items-start gap-2'>
                             <label htmlFor="email">Email</label>
                             <input type="email" name="email" id="email" />

                          </div>
                       </form>
                  </div>
              </div>
        </div>
    </div>
  )
}
