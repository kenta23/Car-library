'use client'

import { Calendar } from '@/components/ui/calendar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react'

export default function BookingCalendar() {
  const [dates, setDates] = React.useState<Date[] | undefined>([new Date()]);


  return (
    <div className="w-full mt-6 h-auto">
      <h1 className="text-2xl font-medium">Booking Calendar</h1>

      <div className="mt-4 px-4 py-2 w-fit h-auto">
        <TooltipProvider delayDuration={100}>
          <Calendar
            mode="multiple"
            selected={dates}
            onSelect={setDates}
            components={{
              Day: ({ date, ...props}) => {
                return (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div  {...props} className='w-8 cursor-pointer h-8'>{date.getDate()}</div>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center">
                      {date.toDateString()}
                    </TooltipContent>
                  </Tooltip>
                );
              },
            }}
          />
        </TooltipProvider>
      </div>
    </div>
  );
}
