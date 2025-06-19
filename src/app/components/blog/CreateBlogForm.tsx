
'use client'

import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BlogSchema, BlogSchemaType } from "../../../../schemas/BlogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../common/FormField";
import AddCover from "./AddCover";
import { useEffect, useState, useTransition } from "react";
import CoverImage from "./CoverImage";
import { tags } from "@/lib/tags";
import Button from "../common/Button";
import { Alert } from "../common/Alert";
import BlockNoteEditor from "./editor/BlockNoteEditor";
import { createBlog } from "@/action/blogs/create-blog";


const CreateBlogForm = () => {
  const session = useSession();
  const userId = session.data?.user.userId;
  const [uploadedCover, setUploadCover] = useState<string>();
  const [content, setContent] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isPublishing, startPublishing] = useTransition();
  const [isSavingAsDraft, startSavingAsDraft] = useTransition();

  // console.log(uploadedCover);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      userId,
      isPublished: false
    }
  })


  useEffect(() => {
    if (uploadedCover) {
      setValue('coverImage', uploadedCover, {
        shouldValidate: true,
        shouldTouch: true,
        shouldDirty: true
      })
    }
  }, [uploadedCover])

  useEffect(() => {
    if (typeof content === "string") {
      setValue('content', content, {
        shouldValidate: true,
        shouldTouch: true,
        shouldDirty: true
      })
    }
  }, [content])

  const onChange = (content: string) => {

    setContent(content)
  }


  const onPublish: SubmitHandler<BlogSchemaType> = (data) => {
    console.log("data>>>", data);
    setSuccess('')
    setError('')
    if (data.tags.length > 4) {
      return setError("Select only 4 tas!")
    }
    startPublishing(() => {
      createBlog({ ...data, isPublished: true }).then(data => {
        if (data.error) {
          setError(data.error)
        }

        if (data.success) {
          setSuccess(data.success)
        }
      })
    })

  }

  const onSaveAsDraft: SubmitHandler<BlogSchemaType> = (data) => {
  
    setSuccess('')
    setError('')

    
    startSavingAsDraft(() => {
      createBlog({ ...data, isPublished: false }).then(data => {
        if (data.error) {
          setError(data.error)
        }

        if (data.success) {
          setSuccess(data.success)
        }
      })
    })

  }



  return (<form onSubmit={handleSubmit(onPublish)} className="flex flex-col justify-between max-w-[1200px] m-auto min-h[85vh]">



    <div>
      {!!uploadedCover && <CoverImage url={uploadedCover} isEditor={true} setUploadCover={setUploadCover} />}
      {!uploadedCover && <AddCover setUploadCover={setUploadCover} />}

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

              return <label key={tag} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={tag}
                  {...register("tags")}
                  disabled={false}
                />
                <span>{tag}</span>

              </label>

            })
          }
        </div>
        {errors.tags && errors.tags.message && <span className="text-sm text-red-500">Select atleast one tag, max of 4!</span>}
      </fieldset>
      <BlockNoteEditor onChange={onChange} />
      {errors.content && errors.content.message && <span className="text-sm text-red-500">{errors.content.message}</span>}
    </div>
    <div className="border-t pt-2">
      {errors.userId && errors.userId.message && <span className=" text-sm text-red-500 ">Missing a userId</span>}
      {success && <Alert message={success} success />}
      {error && <Alert message={error} error />}
      <div className="flex items-center justify-between gap-6">
        <div> <Button type="button" label="Delete" /></div>
        <div className="flex items-center gap-4">
          <Button type="submit" label={isPublishing ? "Publishing..." : "Publish"} className="bg-blue-700" />
          
          <Button type="button" label={isSavingAsDraft?"Saving...":"save as draft"}  onclick={handleSubmit(onSaveAsDraft)}/>
        </div>
      </div>
    </div>
  </form>
  );
};

export default CreateBlogForm;