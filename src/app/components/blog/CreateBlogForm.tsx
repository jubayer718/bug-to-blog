'use client'

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { BlogSchema, BlogSchemaType } from "../../../../schemas/BlogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../common/FormField";
import AddCover from "./AddCover";
import { useState } from "react";
import CoverImage from "./CoverImage";
import { tags } from "@/lib/tags";
import BlockNoteEditor from "./editor/BlockNoteEditor";

const CreateBlogForm = () => {
  const session = useSession();
  const userId = session.data?.user.userId;
  const [uploadedCover, setUploadCover] = useState<string>();
  const [content, setContent] = useState<string | undefined>();


  // console.log(uploadedCover);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      userId,
      isPublished:false
    }
  })

  const onChange = (content: string)=>{
    setContent(content)
  }
  return (<form >



    <div>
      {!!uploadedCover && <CoverImage url={uploadedCover} isEditor={true} setUploadCover={setUploadCover} />}
      {!uploadedCover &&   <AddCover setUploadCover={setUploadCover}/>}
    
      <FormField
        id="title"
        register={register}
        errors={errors}
        placeholder="Blog Title"
        disabled={false}
        inputClassNames="border-none text-5xl font-bold bg-transparent px-0"
      />

      <fieldset className="flex flex-col border-y mb-4 py-2">
        <legend className="mb-2 px-2">Select 4 Tags</legend>
        <div className="flex gap-4 flex-wrap w-full">
          {
            tags.map((tag) => {
              if (tag === "ALL") return null
              
              return (
                <label key={tag} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={tag}
                    {...register("tags")}
                    disabled={false}
                  />
                  <span>{ tag}</span>

                </label>
              )
            })
         }npm
        </div>
      </fieldset>
      <BlockNoteEditor onChange={onChange}/>
    </div>
  </form>
  );
};

export default CreateBlogForm;