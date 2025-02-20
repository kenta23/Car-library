import React from 'react'
import { Metadata } from 'next';
import CarRents from './car-rents-table';

export const metadata: Metadata = { 
   title: "Car library Admin",
    description: "Admin Dashboard",
}

export default function page() {
  return (
    <div className="w-full h-full p-6 max-h-screen overflow-y-auto">
      <div className="spacey-1 mb-8">
        <h1 className="text-2xl font-medium">Good day, Admin</h1>
        <p className="text-md font-normal">here&apos;s what&apos;s happening</p>
      </div>

      <div className="flex flex-row w-full gap-6 items-center justify-start">
        {/**Total subscribers */}
        <div className="w-[20.875rem] h-auto min-h-[9.688rem] px-3 py-4 bg-white/20 rounded-3xl border border-white flex-col justify-start items-center gap-3 inline-flex overflow-hidden">
          <h1 className="text-center text-white text-xl font-normal">
            Total Subscribers
          </h1>

          <div className="self-stretch h-20 flex-col justify-center items-start gap-0.5 inline-flex">
            <p className="self-stretch text-center text-white text-[2rem] font-semibold">
              4,000
            </p>
            <p className="self-stretch text-center text-gray-300 text-md font-light">
              +20% vs last month
            </p>
          </div>
        </div>

        {/**Rented cars today */}
        <div className="w-[20.875rem] h-auto min-h-[9.688rem] px-3 py-4 bg-white/20 rounded-3xl border border-white flex-col justify-start items-center gap-3 inline-flex overflow-hidden">
          <h1 className="text-center text-white text-xl font-normal">
            Rented cars today
          </h1>

          <div className="self-stretch h-20 flex-col justify-center items-start gap-0.5 inline-flex">
            <p className="self-stretch text-center text-white text-[2rem] font-semibold">
              55
            </p>
            <p className="self-stretch text-center text-gray-300 text-md font-light">
              -12% vs last day
            </p>
          </div>
        </div>

        {/**Total Sales */}
        <div className="w-[20.875rem] h-auto min-h-[9.688rem] px-3 py-4 bg-white/20 rounded-3xl border border-white flex-col justify-start items-center gap-3 inline-flex overflow-hidden">
          <h1 className="text-center text-white text-xl font-normal">
            Total Sales
          </h1>

          <div className="self-stretch h-20 flex-col justify-center items-start gap-0.5 inline-flex">
            <p className="self-stretch text-center text-white text-[2rem] font-semibold">
              55
            </p>
            <p className="self-stretch text-center text-gray-300 text-md font-light">
              -12% vs last day
            </p>
          </div>
        </div>
      </div>

      <div className='mt-[3.5rem]'>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-2xl font-medium">Updates</h1>

          <div className="flex flex-col gap-3 mt-2 items-start">
            <div className="h-[94px] flex-col justify-start items-start gap-3 flex">
              <div className="">
                <p className="text-white text-md font-normal">
                  John Smith wants to rent a{" "}
                  <span>Toyota Audi A6 (subscriber)</span>
                </p>
              </div>

              {/** Accept or Reject */}
              <div className="justify-start items-center gap-3 flex">
                <button className="px-4 py-2 bg-[#ad8c33] justify-center items-center flex rounded-sm">
                  <p className="text-white text-md font-normal">Accept</p>
                </button>

                <button className="px-4 py-2 bg-[#de3e3e]  justify-center items-center flex rounded-sm">
                  <p className="text-white text-md font-normal">Reject</p>
                </button>           
             </div>

            </div>
          </div>
        </div>


        <div className='mt-2 cursor-pointer'><p className='underline'>View more</p></div>
      </div>

      {/** realtime car rents table */}
      <div className="mt-[3.5rem]">
        <CarRents />
      </div>
    </div>
  );
}
