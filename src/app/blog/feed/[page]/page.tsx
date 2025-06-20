import { getPublishedBlogs } from '@/action/blogs/get-published-blog';
import ListBlogs from '@/app/components/blog/ListBlogs';
import { Alert } from '@/app/components/common/Alert';
import React from 'react';


interface BlogFeedProps{
  params: Promise<{ page: string }>
  searchParams:Promise<{tag:string}>
}
const BlogFeed = async({ params,searchParams }:BlogFeedProps) => {
 
  const { page } = await params

  const searchObj = await searchParams;
  const currentPage = parseInt(page, 10) || 1
  const {success,error } = await getPublishedBlogs({ page: currentPage, limit:5,searchObj})
  
  if (error) return <Alert error message='Error fetching blogs' />
  
  if (!success) return <Alert message='No blogs' />
  
  const {blogs, hasMore} = success

  return (
    <div>

      <ListBlogs blogs={blogs} hasMore={hasMore }  currentPage={currentPage}/>
    </div>
  );
};

export default BlogFeed;