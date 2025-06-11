import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/utils";
import { Toaster } from 'react-hot-toast';
import { Providers } from "./providers";
// components
import NavBar from "./components/layout/NavBar";
import { ThemeProvider } from "next-themes";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased flex flex-col min-h-screen px-2",poppins.variable)}
      >
        <Providers>
          
        <Toaster/>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

       <NavBar/>
        <main className="flex-grow">
          {children}    
       </main>
        <footer>...</footer>
        </ThemeProvider>
        </Providers>


      </body>
    </html>
  );
}
