import { getPublishedBlogs } from '@/action/blogs/get-published-blog';
import ListBlogs from '@/app/components/blog/ListBlogs';
import { Alert } from '@/app/components/common/Alert';
import React from 'react';


interface BlogFeedProps{
  params:Promise<{page:string}>
}
const BlogFeed = async({ params }:BlogFeedProps) => {
 
  const { page } = await params
  const currentPage = parseInt(page, 10) || 1
  const {success,error } = await getPublishedBlogs({ page: currentPage, limit:5})
  
  if (error) return <Alert error message='Error fetching blogs' />
  
  if (!success) return <Alert message='No blogs' />
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {blogs, hasMore} = success

  return (
    <div>

      <ListBlogs blogs={blogs} hasMore={hasMore }  currentPage={currentPage}/>
    </div>
  );
};

export default BlogFeed;