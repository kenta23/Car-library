'use server';

import axios from "axios";
import { redirect } from "next/navigation";

type FormState = {
    success: boolean;
    fields?: Record<string, string>;
    errors?: Record<string, string[]>;
  };

// const APIEndpoint = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
// });

type adminEntries = { 
    username: string;
    password: string;
}

export async function handleLogin (data: adminEntries) { 
  
    if (!data.username || !data.password) {
        console.log('Invalid username or password');
        return;
    }

    await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
         withCredentials: true
    });

    //fetch backend api for login 
    
    const res = await axios.post('http://localhost:8000/admin/login',
      {
         username: data.username,
         password: data.password,
      },
      {
        withCredentials: true,
      }
    );

    if (res.status !== 200) { 
        return;
    }  
    
    if (res.status === 200) {
        const data = res.data;
        console.log('data',data);
        if (data.success) {
            redirect('/admin/dashboard');
        } 
    }

    return res.data;
}