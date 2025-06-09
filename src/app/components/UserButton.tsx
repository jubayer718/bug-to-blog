

import { UserRound } from 'lucide-react';

import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserButton = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src=""/>

            
            <AvatarFallback>
              <UserRound/>
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
     </DropdownMenu>
    </div>
  );
};

export default UserButton;