import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger} from './ui/dropdown-menu'
import { Bell } from 'lucide-react';

const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='relative'>
        <div className='absolute bg-rose-500 text-sm rounded-full w-6 h-6 flex items-center justify-center bottom-2 left-2 '>
          <span>5</span>
        </div>
        <Bell size={20}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[100%] max-w-[480px]'>
        <div className='flex justify-between md-2 p-2 gap-4 '>
          <h3 className='font-bold text-lg'>Notifications</h3>
          <button>Mark all as read</button>
        </div> 


        <DropdownMenuItem>

        </DropdownMenuItem>
      </DropdownMenuContent>
   </DropdownMenu>
  );
};

export default Notification;