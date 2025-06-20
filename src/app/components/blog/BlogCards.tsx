
import Link from 'next/link';
import React from 'react';
import { BlogWithUser } from './ListBlogs';
import Image from 'next/image';
import UserSummary from './UserSummary';
import Tag from '../common/Tag';
import Reactions from './Reactions';

// isUserProfile
const BlogCards = ({blog}:{blog:BlogWithUser,isProfile?:boolean}) => {
  return (
    <div className='border-b border-slate-300 dark:border-slate-700 py-6 cursor-pointer '>
      <div>
        {blog.user && <UserSummary user={blog.user} createdDate={blog.createdAt}/>}
      </div>
      <div className='my-2 flex justify-between gap-6'>
        <div className=' flex flex-col justify-between w-full '>
          <Link href={`/blog/${blog.id}`} className='text-xl sm:text-2xl font-bold'>{ blog.title}</Link>

          {!!blog.tags.length && <div className=' flex items-center flex-wrap gap-4 my-2 '>
            {blog.tags.map((tag ,idx)=> {
              return <Tag key={idx}>{ tag}</Tag>
          })}
          
          </div>}
          <Reactions/>

        </div>

        {blog.coverImage &&  <Link href={`/blog/${blog.id}`} className='w-full max-w-[160px] h-[100px] relative overflow-hidden'>
         
          
          <Image
            src={blog.coverImage}
            fill
            alt={blog.title}
            className='object-cover rounded-md '
          />
        
        </Link>}
       
      </div>
    </div>
  );
};

export default BlogCards;