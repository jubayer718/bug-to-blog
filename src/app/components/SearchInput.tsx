"use client"
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";


const SearchInput = () => {

  const params = useSearchParams();  
  const title = params.get('title')
  const [value, setValue] = useState(title || '');
  const router = useRouter();


  useEffect(() => {
     let currentQuery = {}
    
          if (params) {
            currentQuery= queryString.parse(params.toString())
          }
    
          const updatedQuery: any = {
            ...currentQuery,
            title : value
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
  },[value])

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