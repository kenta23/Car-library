'use server';

import axios from "axios";
import { redirect } from "next/navigation";

type FormState = {
    success: boolean;
    fields?: Record<string, string>;
    errors?: Record<string, string[]>;
  };

const APIEndpoint = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});


export async function handleLogin(prevState: FormState, formdata: FormData): Promise<FormState> { 
    console.log('formdata',formdata);

    const username = formdata.get('username')?.toString();
    const password = formdata.get('password')?.toString();


    if (!username || !password) {
        return { 
            success: false,
            fields: {
                username: 'Username is required',
                password: 'Password is required'
            },
            errors: {
                username: ['Username is required'],
                password: ['Password is required']
            }
        }
    }

    //fetch backend api for login 
    
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_API?.toString() + '/admin/login',
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status !== 200) { 
        return {
            success: false,
            fields: {
                username: 'Invalid username or password',
                password: 'Invalid username or password'
            },
            errors: {
                username: ['Invalid username or password'],
                password: ['Invalid username or password']
            }
        }
    }  
    
    if(res.status === 200) {
        const data = res.data;
        console.log('data',data);
        if (data.success) {
            redirect('/admin/dashboard');
        } 
    }

    return { 
        success: false,
        errors: { general: ['An unexpected error occurred'] }
    };
}