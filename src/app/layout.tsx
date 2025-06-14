import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/utils";
import { Toaster } from 'react-hot-toast';
// import { Providers } from "./providers";
// components
import NavBar from "./components/layout/NavBar";
import { ThemeProvider } from "next-themes";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["400","700"],
});



export const metadata: Metadata = {
  title: "Bug To Blog",
  description: "Memorize your coding blog",
  icons:{icon:"/icon.svg"}
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
      <body
        className={cn("antialiased flex flex-col min-h-screen px-2",poppins.variable)}
      >      
        <Toaster/>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

       <NavBar/>
        <main className="flex-grow">
          {children}    
       </main>
        <footer>...</footer>
        </ThemeProvider>
      </body>
    </html>
    </SessionProvider>
  );
}
