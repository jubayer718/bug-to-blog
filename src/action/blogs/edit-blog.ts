"use server"

import { getUserById } from "@/lib/user";
import { BlogSchema, BlogSchemaType } from "../../../schemas/BlogSchema"
import { db } from "@/lib/db";

export const editBlog = async (values:BlogSchemaType, blogId:string) => {
  const vField = BlogSchema.safeParse(values);

  if (!vField.success) return { error: "Invalid Fields" }
  
  const { userId, isPublished } = vField.data;

   const user = await getUserById(userId);
  
    if(!user)return {error:"User does not exist!"}
  
    if (isPublished && !user.emailVerified) {
      return {error : "Not authorize! Verify your email"}
  }
  
  const blog = await db.blog.findUnique({
    where:{ id: blogId}
  })

  if (!blog) return { error: "Blog not found!" }

  await db.blog.update({
    where: { id: blogId },
    data:{...vField.data}
  })
  
   
  return {success: "Blog Updated"}
}