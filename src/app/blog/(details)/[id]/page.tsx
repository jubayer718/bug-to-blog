import getblogbyid from "@/action/blogs/getblogbyid";
import BlockNoteEditor from "@/app/components/blog/editor/BlockNoteEditor";
import Reactions from "@/app/components/blog/Reactions";
import UserSummary from "@/app/components/blog/UserSummary";
import { Alert } from "@/app/components/common/Alert";
import Tag from "@/app/components/common/Tag";
import { Separator } from "@/app/components/ui/separator";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import './editor.css'



interface BlogContentProps{
  params:Promise<{id:string}>
}

const BlogContent = async ({ params }: BlogContentProps) => {
  
  const session = await auth()

  const { id } = await params
  
  const res = await getblogbyid({ blogId: id })
  
  if (!res.success) return <Alert error message="Error fetching blog content" />
  
  const blog = res.success.blog

  if(!blog) return <Alert error message="No blog found"/>
  return (
    <div className="flex flex-col max-w-[900px] m-auto gap-6">
      {blog.coverImage && <div className="relative w-full h-[35vh] mt-2">
       <Image src={blog.coverImage} fill  alt="Cover Image" className="object-cover rounded"/>
      
      </div>}

      <div className="flex justify-between items-center pt-4">
        {blog.user && <UserSummary user={blog.user} createdDate={blog.createdAt} />}
        {session?.user.userId === blog.userId && <Link className="text-orange-400" href={`/blog/edit/${blog.id}`}>Edit</Link>}
      </div>

      <div className="flex flex-col gap-2">
        <Separator />
          <Reactions/>
        <Separator />
      </div>
      <h2 className="text-4xl font-bold ">{blog.title}</h2>
      {blog.tags.length && <div className=" flex gap-4 items-center flex-wrap">
        {blog.tags.map(tag => <Tag key={tag}>{ tag}</Tag>)}
      </div>}
      <div>
        <BlockNoteEditor editable={false} initialContent={blog.content } />
      </div>
    </div>
  );
};

export default BlogContent;