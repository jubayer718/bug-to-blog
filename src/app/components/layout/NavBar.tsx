

import { MdNoteAlt } from "react-icons/md";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";


const NavBar = () => {
  return (

    <Container>

    <nav className=" sticky top-0 border-b z-50 bg-white dark:bg-slate-950 py-2">
      <div  className="flex justify-between items-center gap-8">
      <div className="flex items-center gap-1 cursor-pointer">
         <MdNoteAlt size={24}/>
        <div className="font-bold text-xl">Bug To Blog</div>
        </div>
        <div>Search</div>
      <div className="flex items-center gap-5 sm:gap-8 ">
            <div>
          <ThemeToggle/>
        </div>
        <div>Notification</div>
        <div>UserMenu</div>
      </div>
     </div>
   </nav>
    </Container>
  );
};

export default NavBar;