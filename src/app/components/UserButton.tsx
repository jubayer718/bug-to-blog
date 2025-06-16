"use client"

import { Bookmark, LogOut, Pencil, Shield, User, UserRound } from 'lucide-react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {signOut, useSession} from 'next-auth/react'

const UserButton = () => {

  const session = useSession();
  const imgUrl = session.data?.user.image || "";
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={imgUrl} />
            <AvatarFallback className='border-2 border-slate-500 dark:border-slate-50'>
              <UserRound/>
            </AvatarFallback>
          </Avatar>       
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <button className='flex items-center gap-2'>
              <User size={18} />
              Profile
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className='flex items-center gap-2'>
              <Pencil size={18} />
           Create Post
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className='flex items-center gap-2'>
              <Bookmark size={18} />
          BookMark
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className='flex items-center gap-2'>
              <Shield size={18} />
          Admin
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button onClick={()=>signOut()} className='flex items-center gap-2'>
              <LogOut size={18} />
          Logout
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
     </DropdownMenu>
    </div>
  );
};

export default UserButton;