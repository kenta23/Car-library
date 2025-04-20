'use server';

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


// const APIEndpoint = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
// });

type adminEntries = { 
    username: string;
    password: string;
}

export async function handleSignOut() { 
   const res = await axios.post('http://localhost:8000/admin/logout', {}, { 
       withCredentials: true
   });

    console.log('RES', res.data);
    console.log(res.status);

   if (res.status === 200) { 
       const cookieStore = await cookies();
       cookieStore.delete("xsrf-token");
       console.log('Sign out successful');
 
       return redirect('/admin/login');
    }

   else { 
    console.log('Error signing out', res.status);
    return res.status;
   }
   
}

export async function handleLogin (data: adminEntries) { 
  
    if (!data.username || !data.password) {
        console.log('Invalid username or password');
        return;
    }

    try {
      // Get CSRF cookie first
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
      });
  
      // Login admin
      const res = await axios.post(
        'http://localhost:8000/admin/login',
        {
          username: data.username,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
  
      if (res.status === 200) {
         const cookieStore = await cookies();

          const setCookieHeader = res.headers["set-cookie"];
          let xsrfToken: string | undefined;

          if (Array.isArray(setCookieHeader)) {
            const xsrfCookie = setCookieHeader.find(cookie => cookie.includes("XSRF-TOKEN"));
            if (xsrfCookie) {
              xsrfToken = xsrfCookie.split(";")[0].split("=")[1];
            }
          }

          if (xsrfToken) {
            cookieStore.set('xsrf-token', xsrfToken, { 
               httpOnly: true,
               maxAge: 7199, // 2 hours
            });
          } else {
            console.log('XSRF-TOKEN is undefined');
          }
          return true;
      }
    } catch (error) {
      console.error('Login failed', error);
      return {
        error: true,
        message: 'Login failed',
      };
    }
}


//cookies set
/* //store cookies
          // const cookieStore = await cookies();

          // const setCookieHeader = res.headers["set-cookie"];
          // let xsrfToken: string | undefined;

          // if (Array.isArray(setCookieHeader)) {
          //   const xsrfCookie = setCookieHeader.find(cookie => cookie.includes("XSRF-TOKEN"));
          //   if (xsrfCookie) {
          //     xsrfToken = xsrfCookie.split(";")[0].split("=")[1];
          //   }
          // }

          // if (xsrfToken) {
          //   cookieStore.set('xsrf-token', xsrfToken, { 
          //      httpOnly: true,
          //      maxAge: 7199, // 2 hours
          //   });
          // } else {
          //   console.log('XSRF-TOKEN is undefined');
          // }
*/