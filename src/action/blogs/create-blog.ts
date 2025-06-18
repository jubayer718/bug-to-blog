"use server";

import { getUserById } from "@/lib/user";
import { BlogSchema, BlogSchemaType } from "../../../schemas/BlogSchema";
import { db } from "@/lib/db";


export const createBlog = async (values: BlogSchemaType) => {
  const vFields =  BlogSchema.safeParse(values);
  if (!vFields.success) return { error: "Invalid fields!" }
  
  const { userId, isPublished } = vFields.data;

  const user = await getUserById(userId);

  if(!user)return {error:"User does not exist!"}

  if (isPublished && !user.emailVerified) {
    return {error : "Not authorize! Verify your email"}
  }
 

  await db.blog.create({
    data: {
      ...vFields.data,
    },
  });


  if (isPublished) {
    
    return {success: "Blog published"}
  }

  return {success: "Blog published"}


}

