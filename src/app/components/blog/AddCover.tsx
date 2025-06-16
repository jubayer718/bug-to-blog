"use client";
import { useEdgeStore } from "@/lib/edgestore";
import { ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";


interface AddCoverProps{
  setUploadCover: (cover: string) => void;
  replaceUrl?:string
}
const AddCover = ({ setUploadCover, replaceUrl }: AddCoverProps) => {
  const imgInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { edgestore } = useEdgeStore();

  useEffect(() => {
    let isMounted = true;
    const uploadImage = async () => {
      if (!file) return 
      setIsUploading(true)
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          options: replaceUrl ? { replaceTargetUrl: replaceUrl } : undefined 
        })
        if (isMounted && res.url) {
          setUploadCover(res.url)
        }
      } catch (error) {
        console.log('uploading file>>', error)
      } finally{
        if (isMounted) {
          setIsUploading(false)
        }
      }
    }
    uploadImage();
    return () => {
      isMounted=false
    }
  },[file , edgestore,replaceUrl,setUploadCover])
 
  const handleButtonClicked = () => imgInputRef.current?.click();
 
  return (
    <div>
      <input type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        ref={imgInputRef}
        className="hidden"
      />
      <button type="button" onClick={handleButtonClicked} className="flex items-center gap-2 ">
        <ImageIcon size={20} />  
        <span>
          {!!replaceUrl ? "Change Cover": "Add Cover"}
        </span>
      
      </button>

      {isUploading && <p className="text-green-500">Uploading...</p>}

    </div>
  );
};

export default AddCover;