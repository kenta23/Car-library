'use client';

import React, { useMemo } from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useReactTable } from '@tanstack/react-table';

type customersType = { 
   id: string, 
   name: string,
   email: string, 
   
}
export default function CustomersTable() {
    const customersData = useMemo(() => [
      {
         
      }
  ], []);


    const table = useReactTable({
         columns: [
            
         ]
    })
  return (
    <div>
      <div>
       <div className="overflow-x-hidden mt-3 space-y-3">
          <div className="flex justify-between w-full gap-4">
            <div className='flex flex-row gap-2 items-center'>
               <span>Show</span> <select className='bg-[#B08C48] text-white px-2 py-1 rounded-lg font-medium'>
                  <option value="10">10</option>
                  <option value="10">20</option>
                  <option value="10">30</option>
                  <option value="10">40</option>
                  <option value="10">50</option>
               </select>
               <span>entries</span>
                  
            </div>
            {/** Search function */}
            <div className="flex-1">
              <input
                placeholder="Search"
                className="bg-transparent border-[1px] border-white rounded-lg indent-2 placeholder-slate-100 outline-none w-full py-2"
              />
            </div>
          </div>

          <table className="w-auto bg-gray-700 divide-y divide-gray-200">
            <thead className="text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-[#181715]" : "bg-[#b99b79] "
                  }`}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-xs text-white"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/** pagination */}
          <div className="w-full h-auto min-h-12 mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <div className="bg-[#dfb762]  px-3 py-2">
                    <PaginationLink href="#">2</PaginationLink>
                  </div>
                </PaginationItem>
                <PaginationItem>
                  <div className="bg-[#dfb762]  px-3 py-2">
                    <PaginationLink href="#">3</PaginationLink>
                  </div>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
       </div>
    </div>
  )
}
