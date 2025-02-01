"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams  } from "next/navigation";
import { formUrlQuery } from "@/lib/url";
interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}
const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.toString();
const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(query);
  useEffect(()=>{
    if(searchQuery)
   { const newUrl = formUrlQuery({
      params : searchParams.toString(),
      key:"query",
      value:searchQuery
    })
    router.push(newUrl,{scroll:false})
  }
  },[searchQuery,route,router,searchParams,])
  return (
    <div
      className={`background-light800_darkgradient flex 
    min-h-[56px] flex-1 grow items-center rounded-[10px] px-4 ${otherClasses}`}
    >
      {searchParams.toString()}
      <Image
        src={imgSrc}
        alt="search "
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder
         text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
