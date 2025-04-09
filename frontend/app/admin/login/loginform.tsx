'use client';

import { handleLogin } from '@/app/actions/admin';
import React, { useActionState } from 'react'

export default function LoginForm() {
    const [formState, formAction] = useActionState(handleLogin, {
        success: false,
    });
    
  return (
    <>
      <form action={formAction} className="space-y-4">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="h-8 p-2 bg-transparent border border-white rounded-lg outline-none w-72"
          />
         {formState.fields?.username && <p>{formState.fields.username}</p>}
        </div>

        <div className="flex flex-col items-start gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="h-8 p-2 bg-transparent border border-white rounded-lg outline-none w-72"
          />
            {formState.fields?.username && <p>{formState.fields.username}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full h-10 px-3 py-2 text-white bg-primaryColor"
          >
            <span>Login</span>
          </button>
        </div>
        {formState.errors?.general && <p>{formState.errors.general}</p>}
      </form>
    </>
  );
}
