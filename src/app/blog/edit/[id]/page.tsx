import getblogbyid from "@/action/blogs/getblogbyid";
import CreateBlogForm from "@/app/components/blog/CreateBlogForm";
import { Alert } from "@/app/components/common/Alert";
import Container from "@/app/components/layout/Container";

interface BlogEidProps{
  params: Promise<{ id: string }>
}

const BlogEdit = async ({ params }: BlogEidProps) => {
  
  const { id } = await params;
  const res = await getblogbyid({ blogId: id })
  
  if (!res) return <Alert error message="Error getting blog" />
  
  const blog = res.success?.blog
  
  if (!blog) return <Alert error message="No blog" />
  



  return (
    <Container>
      <CreateBlogForm blog={blog}/>
    </Container>
  );
};

export default BlogEdit;