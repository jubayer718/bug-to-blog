"use client"
import Image from "next/image";
import AddCover from "./AddCover";
import { X } from "lucide-react";
import { useEdgeStore } from "@/lib/edgestore";

interface CoverImageProps{
  setUploadCover: (cover: string | undefined) => void
  url: string
  isEditor?:boolean
}
const CoverImage = ({url,isEditor,setUploadCover}:CoverImageProps) => {
  const { edgestore } = useEdgeStore();

  const handleRemoveCover = async (url: string)=>{
    try {
      await edgestore.publicFiles.delete({ url })
      setUploadCover(undefined)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='relative w-full h-[35vh] group'>
      <Image src={url} fill  alt="Cover Image" className="object-cover"/>
      {isEditor && <div className="absolute top-8 right-5 opacity-0 group-hover:opacity-100 flex items-center gap-x-2">
        <AddCover setUploadCover={setUploadCover} replaceUrl={url} />
        <button onClick={()=>handleRemoveCover(url)} className="flex items-center gap-2 ml-4" type="button" >
          <X size={20} />
          <span>
            Remove
          </span>
        </button>
      </div>}
    </div>
  );
};

export default CoverImage;