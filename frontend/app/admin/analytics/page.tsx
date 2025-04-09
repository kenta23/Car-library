


import React from 'react'
import Rentals from './rentals'
import Sales from './sales';




export default function Page() {
  return (
    <div className="w-full h-full max-h-screen p-6 overflow-y-auto">
      {/** rental sales and total revenuew */}
      <Rentals />

      {/** Annual sales total and places with most car rents */}
       <Sales />
    </div>
  );
}
