'use client';

import { handleLogin } from '@/app/actions/admin';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'


interface AdminEntries {
  username: string;
  password: string;
}

export default function LoginForm() {
    const router = useRouter();
    const { mutate, isError, isSuccess, data } = useMutation({
      mutationFn: async (data: AdminEntries) => await handleLogin(data),
      onSuccess: (data) => {
        console.log('Login successful', data);
      },
      onError: (error) => {
        console.error('Login failed', error);
      }
    });
    
    console.log('results', data, isError, isSuccess);
      
  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) { 
     e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

      console.log('FORMDATA', data);

      mutate(
        {
          username: data.username as string,
          password: data.password as string
        }
      );

      if (isSuccess) { 
         router.push('/admin/dashboard');
      }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="h-8 p-2 bg-transparent border border-white rounded-lg outline-none w-72"
          />

        </div>

        <div className="flex flex-col items-start gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="h-8 p-2 bg-transparent border border-white rounded-lg outline-none w-72"
          />

        </div>

        <div>
          <button
            type="submit"
            className="w-full h-10 px-3 py-2 text-white bg-primaryColor"
          >
            <span>Login</span>
          </button>
        </div>
      </form>
    </>
  );
}
