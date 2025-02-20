import type { Metadata } from "next";
import { Georama } from 'next/font/google';
import "./globals.css";
import Provider from "./provider/Provider";
import { Toaster } from "@/components/ui/sonner";


const georama = Georama({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: "Car library",
  description: "rent the most popular cars worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${georama.className} antialiased bg-dark min-h-screen w-full`}
      >
        <Provider>
           {children}
           <Toaster />
        </Provider>
      </body>
    </html>
  );
}
