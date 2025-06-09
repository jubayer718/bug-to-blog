import { Search } from "lucide-react";
import { Input } from "./ui/input";


const SearchInput = () => {
  return (
    
      <div className="relative hidden sm:block">
      <Input className=" pl-10 bg-primary/10" placeholder="search"/>
      <Search className="absolute bottom-0 top-3 left-2 " size={16}/>
     </div>
   
  );
};

export default SearchInput;