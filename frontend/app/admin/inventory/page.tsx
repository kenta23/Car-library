import { Metadata } from 'next'
import React from 'react'
import ItemsTable from './items-table'
import CarRentingTypes from './car-renting-types'

export const metadata: Metadata = { 
    title: "Car library Admin",
     description: "Items",
 }


export default function page() {
  return (
    <div className="w-full h-full p-6 max-h-screen overflow-y-auto">
            <h1 className='text-2xl font-medium'>
                Inventory
            </h1>

          {/** Items table */}
         <div className='w-full h-auto mt-8'>
              <ItemsTable />
         </div>

         {/**Car renting types */}
          <CarRentingTypes />
    </div>
  )
}
