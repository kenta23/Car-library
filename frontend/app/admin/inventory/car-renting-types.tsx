import { LocateFixed, Pencil, Plus, Trash } from 'lucide-react'
import React from 'react'

export default function CarRentingTypes() {
  return (
    <div className="mt-[3.5rem] w-full h-auto">
     <div className="space-y-10">
     <div className="flex flex-col items-start gap-6">
        <h1 className="text-2xl font-medium">Car renting types</h1>

        <div className="flex flex-col items-start gap-4">
          <div className="grid w-full grid-cols-4 gap-6 ">
            <div className="inline-flex items-center justify-center w-56 h-24 px-4 py-3 overflow-hidden bg-white/20 rounded-2xl">
              <div className="inline-flex items-center self-stretch justify-between grow shrink basis-0">
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="font-medium leading-10 text-center text-white">
                    <p className='text-lg'>Car 1 day rent</p>
                  </div>
                  <div className="text-center leading-[30px]">
                     <p className='text-sm font-normal underline text-[#7feb7f]'>Enable</p>
                  </div>
                </div>

                {/**Actions */}
                <div className='flex flex-row items-center gap-3'>
                   <Pencil size={20} color='#E7CD67'/>
                   <Trash size={20} color='#E89999'/>  
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center w-56 h-24 px-4 py-3 overflow-hidden bg-white/20 rounded-2xl">
              <div className="inline-flex items-center self-stretch justify-between grow shrink basis-0">
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="font-medium leading-10 text-center text-white">
                    <p className='text-lg'>Car 1 day rent</p>
                  </div>
                  <div className="text-center leading-[30px]">
                     <p className='text-sm font-normal underline text-[#7feb7f]'>Enable</p>
                  </div>
                </div>

                {/**Actions */}
                <div className='flex flex-row items-center gap-3'>
                   <Pencil size={20} color='#E7CD67'/>
                   <Trash size={20} color='#E89999'/>  
                </div>
              </div>
            </div>
          </div>

          {/** Save button */}
          <button className="px-4 py-3 rounded-md text-center bg-[#100F0F] active:bg-[#1f1e1e] w-44 flex flex-row  items-center justify-center">
            <Plus color="white" size={20}/>
            <p className='text-center'>Add More</p>
          </button>
        </div>
      </div>

      {/** Add Ons */}
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-2xl font-medium">Add ons</h1>

        <div className="flex flex-col items-start gap-4 ">
          <div className="grid w-full grid-cols-4 gap-6 ">
            <div className="inline-flex items-center justify-center h-24 px-4 py-3 overflow-hidden w-60 bg-white/20 rounded-2xl">
              <div className="inline-flex items-center self-stretch justify-between grow shrink basis-0">
               <LocateFixed size={24} />
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="font-medium leading-10 text-center text-white">
                    <p className='text-lg'>Car 1 day rent</p>
                  </div>
                  <div className="text-center leading-[30px]">
                     <p className='text-sm font-normal underline text-[#7feb7f]'>Enable</p>
                  </div>
                </div>
                {/**Actions */}

                <div className='flex flex-row items-center gap-3'>
                   <Pencil size={20} color='#E7CD67'/>
                   <Trash size={20} color='#E89999'/>  
                </div>
              </div>
            </div>
          </div>

          {/** Save button */}
          <button className="px-4 py-3 rounded-md text-center bg-[#100F0F] active:bg-[#1f1e1e] w-44 flex flex-row  items-center justify-center">
            <Plus color="white" size={20}/>
            <p className='text-center'>Add More</p>
          </button>
        </div>
      </div>
     </div>
    </div>
  );
}
