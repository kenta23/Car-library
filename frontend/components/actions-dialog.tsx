'use client'

import { CellContext } from '@tanstack/react-table'
import React, { useState } from 'react'
import { TData } from '../app/admin/dashboard/car-rents-table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { itemsType } from '@/lib/types'
import { schema } from '@/lib/schema'



export default function ActionsDialog({ info }: { info: CellContext<itemsType | TData, unknown>}) {
  const [colorOptions, setColorOptions] = useState<string[]>([
    'Black', 'White', 'Red' 
  ]);


  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<Omit<itemsType, 'id'>>({
    resolver: zodResolver(schema),
  });


  return (
    <div className="flex flex-row gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <button>Edit</button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[470px] bg-[#444141] text-white">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription className="text-gray-200">
              Edit the car details
            </DialogDescription>
          </DialogHeader>

          <div className="w-full grid grid-cols-2 gap-3 items-start mt-3">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                {...register("carName", { required: true, minLength: 5 })}
                className="bg-transparent border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300 "
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="daily-rate" className="text-sm">
                Daily rate
              </label>
              <input
                type="number"
                {...register("dailyRate", { valueAsNumber: true })}
                className="bg-transparent border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300 "
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="doors" className="text-sm">
                Doors
              </label>
              <input
                type='number'
                {...register("doors", { valueAsNumber: true })}
                className="bg-transparent border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300 "
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="release-date" className="text-sm">
                 Release Date
              </label>
              <input
                type='date'
                {...register("releaseDate", { valueAsDate: true })}
                className="bg-transparent border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300 "
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="steering-type" className="text-sm">
                Steering type
              </label>
              <input
                {...register("steeringType")}
                type='radio'
                className="bg-transparent border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300 "
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="transmission" className="text-sm">
                Transmission
              </label>
              <select
                {...register("transmission")}
                className="bg-transparent border-white border-[1px] text-white p-1 px-3 rounded-md outline-none placeholder-slate-300 "
              >
                <option className="text-black">Automatic</option>
                <option className="text-black">Manual</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="color-options" className="text-sm">
                Color Options
              </label>
              <input
                {...register("ColorOptions")}
                className="bg-transparent border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300 "
              />

              <div className="flex flex-row gap-2">
                {colorOptions.map((color, i) => (
                  <div
                    key={i}
                    className="bg-[#444141] text-[0.9rem] flex flex-row gap-2 border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300"
                  >
                    {color}{" "}
                    <X className="cursor-pointer" color="white" size={10} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="features" className="text-sm">
                Features
              </label>
              <input
                {...register("features")}
                className="bg-transparent border-white border-[1px] text-white p-1 px-2 rounded-md outline-none placeholder-slate-300 "
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <button>Delete</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#444141] text-white">
          <DialogHeader>
            <DialogTitle>Delete</DialogTitle>
            <DialogDescription className="text-gray-200">
              This is can&apos;t be undone and will be permanently deleted.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex w-full flex-row items-center gap-4">
              <button className="bg-gray-800 flex-1 py-2 text-white">No</button>
              <button className="bg-red-500 flex-1 py-2 text-white">Yes</button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
