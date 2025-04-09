import React from 'react'
import LoginForm from './loginform';

export default async function page() {
   
 

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen m-auto">
      <div className="flex flex-col items-center w-auto h-auto gap-6 px-6 py-3 text-white min-w-96">
        <h1 className="text-2xl font-medium text-center ">Admin Login</h1>
         <LoginForm />
      </div>
    </div>
  );
}
