import React from 'react'
import CustomersTable from './customers-table'

export default function page() {
  return (
    <div className="w-full h-full p-6 max-h-screen overflow-y-auto">
       <h1 className='text-2xl font-medium'>
           Customers
       </h1>

       <div>
           <CustomersTable />
       </div>
    </div>
  )
}
