import { z } from "zod";


export const BlogSchema = z.object({
  userId: z.string(),
  title: z
    .string()
    .min(10, { message: "title is to short" })
    .max(150, { message: "title is too long" }),
  content: z.string().min(10, { message: "content is too short" }),
  coverImage: z.string().optional(),
  isPublished: z.boolean(),
  tags: z.array(z.string()),
})

export type BlogSchemaType = z.infer<typeof BlogSchema>