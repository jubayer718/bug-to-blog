"use client"
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useDebounceValue } from "../../../hooks/useDebounceValue";


const SearchInput = () => {

  const params = useSearchParams();  
  const title = params.get('title')
  const [value, setValue] = useState(title || '');
  const router = useRouter();
  const debounceValue = useDebounceValue<string>(value);


  useEffect(() => {
     let currentQuery = {}
    
          if (params) {
            currentQuery= queryString.parse(params.toString())
          }
    
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const updatedQuery: any = {
            ...currentQuery,
            title : debounceValue
          }
    
          const url = queryString.stringifyUrl(
            {
              url: '/blog/feed/1',
              query:updatedQuery
            },
            {
              skipNull: true,
              skipEmptyString:true
            }
          )
          router.push(url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[debounceValue])

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }
  return (
    
      <div className="relative hidden sm:block">
      <Input onChange={handleOnChange} value={value} className=" pl-10 bg-primary/10" placeholder="search"/>
      <Search className="absolute bottom-0 top-3 left-2 " size={16}/>
     </div>
   
  );
};

export default SearchInput;