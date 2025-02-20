'use client';

import React, { useMemo } from 'react'
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
import ActionsDialog from '@/components/actions-dialog';
import { useRouter } from 'next/navigation';
import { itemsType } from '@/lib/types';


  
const fallbackItems: never[] = [];
export default function ItemsTable() {
     const router = useRouter();

     const items = useMemo<itemsType[]>(() => (
            [
                {
                  id: "45355",
                  carName: "Toyota Audi A6 (2023)",
                  steeringType: 'Power',
                  images: ['/sedan.png'],
                  ColorOptions: ['Black', 'White', 'Red'],
                  doors: 4,
                  transmission: 'Automatic',
                  dailyRate: 50,
                  releaseDate: '13/05/2022',
                  features: 'Air Condition',
                  type: 'Sedan',
                },
                
              ]
        ), []);
     const table = useReactTable({
           data: items ?? fallbackItems,
                   columns: [
                     {
                       header: 'ID',
                       accessorKey: 'id', // accessor is the "key" in the data
                       cell: info => info.getValue(), // render the cell</div>,
                     },
                     {
                       header: 'Car',
                       accessorFn: row => `${row.images[0]} ${row['carName']}`, // merge Image and Car name into one column
                       cell: info => info.getValue(),
                     },
                     {
                         header: 'Steering type',
                         accessorKey: 'steeringType', // merge Customer and Date into one column
                         cell: info => info.getValue(),
                     },
                     {
                       header: 'Date',
                       accessorKey: 'releaseDate',
                       cell: info => info.getValue(),
                     },
                     {
                       header: 'Doors',
                       accessorKey: 'doors',
                       cell: info => info.getValue(),
                     },
                     {
                       header: 'Transmission',
                       accessorKey: 'transmission',
                         cell: info => info.getValue(),
                     },
                     {
                       header: 'Colors',
                       accessorKey: 'ColorOptions',
                       cell: info => info.getValue()
                     },
                      {
                        header: 'Daily Rate',
                        accessorKey: 'dailyRate',
                        cell: info => info.getValue()
                      },
                      {
                         header: 'Action',
                         accessorKey: 'Action',
                         cell: info =>  <ActionsDialog info={info}/>
                      }
                   ],
                 getCoreRowModel: getCoreRowModel(),
                 getPaginationRowModel: getPaginationRowModel(),
    });



  return (
    <div className="mt-3 space-y-3 overflow-x-hidden">
    {/** Search function */}
    <div className="flex flex-col items-end w-full gap-4">
      
      {/** Add item button */}
      <button onClick={() => router.push('/admin/add-item')} className='w-40 h-10 px-3 py-1 text-center text-white bg-primaryColor'>
          <span>Add car item</span>
      </button>
      
        <div className="flex justify-between w-full gap-4">
            <div className='flex flex-row items-center gap-2'>
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
    </div>



    <table className="w-full bg-gray-700 divide-y divide-gray-200">
      <thead className="text-white">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase"
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
                className="px-6 py-4 text-xs text-white whitespace-nowrap"
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
    <div className="w-full h-auto mt-6 min-h-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
             
                <PaginationLink href="#">1</PaginationLink>
            
          </PaginationItem>
          <PaginationItem>
             <div className='p-2'>
                <PaginationLink href="#">2</PaginationLink>
             </div>
          </PaginationItem>
          <PaginationItem>
          <div className='p-2'>
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
  )
}
