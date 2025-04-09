'use client';


import { TrendingUp } from 'lucide-react';
import React from 'react'

export default function Rentals() {
  return (
    <div className='flex flex-row items-start gap-10'>
     <div className="h-full px-4 py-3 rounded-lg bg-white/15 w-80 min-h-60 max-h-72">
      <h1 className="mt-2 mb-4 text-lg font-medium text-white">
        Rental type total sales
      </h1>


      <div className="flex flex-col items-start justify-start gap-3">
        <div className="flex flex-col items-start gap-2">
          <progress className='w-60' value={60} max={100} id="subscription" />
          <label htmlFor="subscription" className="text-sm">
            Subscription
          </label>    
        </div>

        <div className="flex flex-col items-start gap-2">
          <progress className='w-60' value={60} max={100} id="subscription" />
          <label htmlFor="subscription" className="text-sm">
            Day rent
          </label>
        </div>

        <div className="flex flex-col items-start gap-2">
          <progress className='w-60' value={60} max={100} id="subscription" />
          <label htmlFor="subscription" className="text-sm">
            With a driver
          </label>
        </div>
      </div>
    </div>


   {/** total revenue */}

   <div className="h-full px-4 py-3 rounded-lg bg-white/15 w-80 min-h-60 max-h-72">
      <h1 className="mt-2 mb-4 text-lg font-medium text-white">
        Total revenue this day
      </h1>

      <div className="flex flex-col items-center justify-center w-full gap-3 mt-8">
        <h1 className="text-3xl font-semibold">$1,000</h1>

        <div className='flex flex-row items-center justify-center w-full'>
          <p className="text-lg me-2">vs last day</p>
          <TrendingUp color="#51E05B" />
          <span className="text-[#51E05B] ms-1 text-lg">
            20%
          </span>
        </div>
      </div>
    </div>
    </div>

  )
}
