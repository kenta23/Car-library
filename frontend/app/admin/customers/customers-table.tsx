'use client';

import React, { useMemo } from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { CellContext, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Settings2, Trash2 } from 'lucide-react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Label, PolarAngleAxis } from 'recharts';


type customersType = { 
   customer_id: string, 
   name: string,
   email: string, 
   location: string,
   rent_type: string,
   age: number | string,
   cars_rented: number | string,
}


 function ActionCustomer ({ info }: { info: CellContext<customersType, any> }) {
  
  const edit = () => { 
    console.log(info.row.original.customer_id);
  }

  const deleteCustomer = () => { 
     //delete function
  }

  return (
    <div className="flex flex-row gap-4">
      <button type='button' onClick={edit}>
          <Settings2 size={20} color='#E3D64D'/>
      </button>
      <button type='button'>
          <Trash2 size={20} color='#A30D11'/>
      </button>
    </div>
  )
   
}
export default function CustomersTable() {
    const customersData = useMemo<customersType[]>(() => [
      {
         customer_id: '1',
         name: 'John Doe',
         email: 'john.doe@example.com',
         location: 'New York',
         rent_type: 'Monthly',
         age: 30,
         cars_rented: 2,
      },
      {
         customer_id: '2',
         name: 'Jane Smith',
         email: 'jane.smith@example.com',
         location: 'Los Angeles',
         rent_type: 'Weekly',
         age: 25,
         cars_rented: 1,
      },
      {
         customer_id: '3',
         name: 'Jim Brown',
         email: 'jim.brown@example.com',
         location: 'Chicago',
         rent_type: 'Daily',
         age: 40,
         cars_rented: 4,
      },
      {
         customer_id: '4',
         name: 'Lisa White',
         email: 'lisa.white@example.com',
         location: 'Miami',
         rent_type: 'Yearly',
         age: 35,
         cars_rented: 3,
      },
      {
         customer_id: '5',
         name: 'Tom Green',
         email: 'tom.green@example.com',
         location: 'Dallas',
         rent_type: 'Daily',
         age: 28,
         cars_rented: 5,
      }
  ], []);


    const table = useReactTable({
      data: customersData ?? [],
      columns: [
        {
          header: "ID",
          accessorKey: 'customer_id',
          cell: info => info.getValue(),
        },
        {
          header: 'Name',
          accessorKey: "name",
          cell: info => info.getValue(),
        },
        {
          header: 'Email',
          accessorKey: "email",
          cell: info => info.getValue(),
        },
        {
          header: 'Location',
          accessorKey: "location",
          cell: info => info.getValue(),
        },
        {
          header: 'Rent Type',
          accessorKey: "rent_type",
          cell: info => info.getValue(),
        },
        {
          header: 'Age',
          accessorKey: "age",
          cell: info => info.getValue(),
        },
        {
          header: 'Cars Rented',
          accessorKey: "cars_rented",
          cell: info => info.getValue(),
        },
        {
          header: 'Action',
          accessorKey: "Action",
          cell: info => <ActionCustomer info={info}/>
        }
      ],
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  return (
    <div>
      <div className="overflow-x-hidden mt-3 space-y-3">
        {/** search and show entries */}
        <div className="flex justify-between w-full gap-4">
          <div className="flex flex-row gap-2 items-center">
            <span>Show</span>{" "}
            <select className="bg-[#B08C48] text-white px-2 py-1 rounded-lg font-medium">
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

        {/** table */}
        <table className="w-full bg-gray-700 divide-y divide-gray-200">
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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

        {/** New Customers */}
        <div className="w-full h-auto mt-6 min-h-12">
          {/** new Subscribers card */}
          <div className="px-3 py-4 h-auto w-96 bg-gray-700/25 rounded-lg">
            <h1>New Subscribers</h1>
            <ResponsiveContainer
              width="100%"
              height={200}
            >
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="90%"
                barSize={25}
                data={data}
            
              >
                <RadialBar label={{ position: 'centerBottom', fill: '#fff' }} className='' cornerRadius={10} background dataKey="uv">
                </RadialBar>
              </RadialBarChart>
            </ResponsiveContainer>

            <div>
              <p className='text-center text-white text-sm font-medium'>+ 20% vs last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      }

      const data = [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#8884d8',
        },

      ];
