'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  imageSrc: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imageSrc, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 flex flex-col items-start text-left w-[350px] ">
           <div className="relative w-full h-60 mb-3">
             <Image src={imageSrc} alt={title} fill className="object-cover rounded-[20px] " />
           </div>
           <h3 className="text-[20px] font-semibold text-[#1B1B26] mb-1 text-left text-wrap h-16">{title}</h3>
           </div>
    </Link>
  );
};

export default BlogCard;
