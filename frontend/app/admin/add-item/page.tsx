import { ChevronLeft, Plus } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link';
import React from 'react'
import FormItems from './form-items';

export const metadata: Metadata = { 
    title: 'Add Item',
    description: 'Add a new car items to the list',
}

export default function page () {
  return (
    <div className="w-full h-full p-6 max-h-screen overflow-y-auto">
      <Link href={"/admin/inventory"} className="flex flex-row gap-1 items-center">
        <ChevronLeft />
        <h1 className="text-2xl font-medium">Add Item</h1>
      </Link>

      <FormItems />
    </div>
  );
}
