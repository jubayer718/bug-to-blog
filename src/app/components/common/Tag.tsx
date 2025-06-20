"use client"
import {  useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import React,{ useCallback } from "react";


interface TagProps{
  children: React.ReactNode,
 

}

const Tag = ({ children}: TagProps) => {
  
  const router = useRouter();
  const params = useSearchParams();


  const handleOnclick = useCallback(() => {
    if (children === "ALL") {
      router.push('/blog/feed/1')
    } else {
      let currentQuery = {}

      if (params) {
        currentQuery= queryString.parse(params.toString())
      }

      const updatedQuery: any = {
        ...currentQuery,
        tag : children
      }

      const url = queryString.stringifyUrl(
        {
          url: '/blog/feed/1',
          query:updatedQuery
        },
        {
          skipNull:true
        }
      )
      router.push(url)
    }
  },[children,params,router])

  return (
    <span onClick={handleOnclick} className="bg-secondary px-2 py-1 rounded text-sm cursor-pointer">
      { children}      
   </span>
  );
};

export default Tag;