'use client';

import React, { useMemo } from 'react'
import { ColumnDef, useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table';
import Image from 'next/image';
import { Crown } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


export type TData = {
    trackingID: string;
    CarName: string;
    Image: typeof Image | null;
    Customer: string;
    Date: string | Date;
    Amount: number;
    RentingType: string;
    Payment: string;
    Status: string;
}
const fallbackData: TData[] = [];

export default function CarRents() {
    const data = useMemo<TData[]>(() => (
        [
            {
              "trackingID": "2424242",
              "CarName": "Toyota Audi A6 (2023)",
              "Image": null,
              "Customer": 'Matt Dickerson',
              "Date": '13/05/2022',
              "Amount": 50,
              "RentingType": "1 Day rent",
              "Payment": "Credit",
              "Status": "Successful"
            },
            {
                "trackingID": "2424242",
                "CarName": "Toyota Audi A6 (2023)",
                "Image": null,
                "Customer": 'Matt Dickerson',
                "Date": '13/05/2022',
                "Amount": 50,
                "RentingType": "1 Day rent",
                "Payment": "Credit",
                "Status": "Successful"
              },
              {
                "trackingID": "2424242",
                "CarName": "Toyota Audi A6 (2023)",
                "Image": null,
                "Customer": 'Matt Dickerson',
                "Date": '13/05/2022',
                "Amount": 50,
                "RentingType": "1 Day rent",
                "Payment": "Credit",
                "Status": "Successful"
              },
          ]
    ), []);

    const table = useReactTable({
          data: data ?? fallbackData,
          columns: [
            {
              header: 'Tracking ID',
              accessorKey: 'trackingID', // accessor is the "key" in the data
              cell: info => info.getValue(), // render the cell</div>,
            },
            {
              header: 'Car',
              accessorFn: row => `${row.Image} ${row['CarName']}`, // merge Image and Car name into one column
              cell: info => info.getValue(),
            },
            {
                header: 'Customer',
                accessorKey: 'Customer', // merge Customer and Date into one column
                cell: info => info.getValue(),
            },
            {
              header: 'Date',
              accessorKey: 'Date',
              cell: info => info.getValue(),
            },
            {
              header: 'Amount',
              accessorKey: 'Amount',
              cell: info => info.getValue(),
            },
            {
              header: 'Renting Type',
              accessorKey: 'Renting type',
                cell: info => info.getValue(),
            },
            {
              header: 'Payment',
              accessorKey: 'Payment',
              cell: info => info.getValue()
            },
            {
                header: 'Status',
                accessorKey: 'Status',
                cell: info => info.getValue()
            },
            {
                header: 'Action',
                accessorKey: 'Action',
                cell: info => <div className='flex items-center gap-3'> {/**render a modal here later */}
                <button>Edit</button><button>Delete</button></div> 
            }
          ],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });



  return (
    <div className="w-full h-auto overflow-y-auto">
      <h1 className="text-2xl font-semibold">Car rents</h1>

      <div className="flex flex-row gap-4 w-full items-start">
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

        {/** Top Customers */}
        <div className="flex-1 rounded-lg border-white border-[1px] h-auto min-h-36 max-h-60">
          <div className="flex items-center gap-1 mx-auto justify-center mt-3">
            <Crown size={20} color="#eec41e" fill="#eec41e" />
            <h1>Top Customers</h1>
          </div>

          {/**Lists of customers */}
          <div className="flex flex-col items-start gap-2 mt-4 px-2 py-3 max-h-full overflow-y-auto">
            <div className="text-sm font-normal">
              <span>1. fsfsfsf</span>
            </div>
          </div>
        </div>
      </div>

      {/** Top rented Cars */}
      <div className="w-full flex gap-3 items-start flex-col mt-12">
        <h1 className="text-2xl font-semibold">Top Rented Cars</h1>

        <div className="w-full grid grid-cols-4 items-center gap-3">
          <div className="flex flex-col items-center gap-2 justify-center">
            <Image
              className=""
              src={"/sedan car.png"}
              width={200}
              height={800}
              alt="car"
              loading="lazy"
            />
            <p className="text-sm text-center text-[#76E754]">
              Toyota Audi A6 (2023)
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 justify-center">
            <Image
              className=""
              src={"/sedan car.png"}
              width={200}
              height={800}
              alt="car"
              loading="lazy"
            />
            <p className="text-sm text-center">Toyota Audi A6 (2023)</p>
          </div>

          <div className="flex flex-col items-center gap-2 justify-center">
            <Image
              className=""
              src={"/sedan car.png"}
              width={200}
              height={800}
              alt="car"
              loading="lazy"
            />
            <p className="text-sm text-center">Toyota Audi A6 (2023)</p>
          </div>

          <div className="flex flex-col items-center gap-2 justify-center">
            <Image
              className=""
              src={"/sedan car.png"}
              width={200}
              height={800}
              alt="car"
              loading="lazy"
            />
            <p className="text-sm text-center">Toyota Audi A6 (2023)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 