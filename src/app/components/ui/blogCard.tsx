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
      <div className="bg-white rounded shadow hover:shadow-lg transition cursor-pointer w-[300px]">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          className="rounded-t object-cover w-full h-[200px]"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
