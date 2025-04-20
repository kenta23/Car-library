import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const getCookie = await cookies();
  const xsrfToken = getCookie.get('xsrf-token')?.value;
   //fetch the CSRF token from the backend

   console.log(request.nextUrl.pathname);

   //match the admin route 
   if (request.nextUrl.pathname.match(/\/admin/)) {  
      if (!request.nextUrl.pathname.startsWith('/admin/login')) {
        if (!xsrfToken) {
          return NextResponse.redirect(new URL('/admin/login', request.url));
       }
    
    }; 

    if(request.nextUrl.pathname.startsWith('/admin/login') && xsrfToken) {
        console.log('Token exists', xsrfToken);
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    } 
       
    }
  // // retrieve the current response
  return NextResponse.next()
}



export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
  }