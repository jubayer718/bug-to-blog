"use client"

import { MdNoteAlt } from "react-icons/md";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "../SearchInput";
import Notification from "../Notification";
import UserButton from "@/app/components/UserButton"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Tags from "./Tags";



const NavBar = () => {
  const session = useSession();
  const isLoggedIn = session.status === 'authenticated';
  const path = usePathname();
  const router =useRouter()
  useEffect(() => {
    if (!isLoggedIn && path) {
      const updateSession = async () => {
        await session.update();
      }
      updateSession();
    }

  },[path,session,isLoggedIn])

 
  return (

      <nav className=" sticky top-0 border-b z-50 bg-white dark:bg-slate-950 py-2">
    <Container>

        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer">
            <MdNoteAlt size={24} />
            <div className="font-bold text-xl" onClick={() =>router.push('/blog/feed/1')}>Bug To Blog</div>
          </div>
          <SearchInput />
          <div className="flex items-center gap-5 sm:gap-8 ">

            <ThemeToggle />
            {isLoggedIn &&  <Notification />}
            {isLoggedIn &&   <UserButton />}
          
           {!isLoggedIn && <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            </>  }
             


          </div>
        </div>
      </Container>
      
      <Tags/>
      </nav>
  );
};

export default NavBar;