'use client';

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';



const adminLoginSchema = z.object({ 
    email: z.string().email().min(6),
    password: z.string().min(8),
 })
 
 
type login = z.infer<typeof adminLoginSchema>

export default function Login() {
  const { formState: { errors }, handleSubmit, setError, register,  } = useForm<login>({ 
     defaultValues: {
         email: '',
         password: '',  
     },
     resolver: zodResolver(adminLoginSchema),
  })

  const handleLogin: SubmitHandler<login> = async (data) => { 
       console.log(data);
  }
  

  return (
    <form
      action=""
      className="flex flex-col items-start gap-6 mt-10 max-w-80 w-72"
    >
      <div className="flex flex-col items-start w-full gap-2 text-white">
        <label htmlFor="email">Email</label>
        <input
          className="w-full h-10 p-2 bg-transparent border-2 border-white rounded-full outline-none"
          type="email"
          name="email"
          id="email"
        />
      </div>

      <div className="flex flex-col items-start w-full gap-2 text-white">
        <label htmlFor="password">Password</label>
        <input
          className="w-full h-10 p-2 bg-transparent border-2 border-white rounded-full outline-none"
          type="password"
          name="password"
          id="password"
        />
      </div>

      <div className="w-full mt-4">
        <button
          className="w-full h-12 text-white rounded-full bg-primaryColor"
          type="submit"
        >
          <span>Log in</span>
        </button>
      </div>
    </form>
  );
}
