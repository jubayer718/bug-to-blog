"use server";

import { db } from "@/lib/db";


const getblogbyid = async({blogId}:{blogId:string}) => {
  
  
  if (!blogId) return { error: "No Blog ID" }
  

  try {
    const blog = await db.blog.findUnique({
      where: { id: blogId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    })
    return { success: {blog} };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {error: "Error fetching blog content"}
  }

};

export default getblogbyid;