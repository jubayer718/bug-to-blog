'use client'

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { BlogSchema, BlogSchemaType } from "../../../../schemas/BlogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../common/FormField";
import AddCover from "./AddCover";
import { useState } from "react";

const CreateBlogForm = () => {
  const session = useSession();
  const userId = session.data?.user.userId;
  const [uploadedCover, setUploadCover] = useState<string>();
  console.log(uploadedCover);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      userId,
      isPublished:false
    }
  })
  return (<form action="">



    <div>
      <AddCover setUploadCover={setUploadCover}/>
      <FormField
        id="title"
        register={register}
        errors={errors}
        placeholder="Blog Title"
        disabled={false}
        inputClassNames="border-none text-5xl font-bold bg-transparent px-0"
      />
    </div>
  </form>
  );
};

export default CreateBlogForm;