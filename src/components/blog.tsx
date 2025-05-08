import React from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "./ui/blogCard";
import Button from "./ui/Button";


const BlogSection = () => {
  return (
    <section className="py-12 bg-white">
     <div className='max-w-[1400px] mx-auto'>
      <div className="flex flex-col justify-center items-center ">
        <Button
          text="Blog"
          textColor="text-[#1B1B26]"
          borderColor="border-1 border-[#000000]"
          className='font-[400] py-2 text-[#3A3846] text-[16px] lg:text-[20px]  '
          />
            <p className='text-[18px] font-[400] text-[#3A3846] text-center mt-5 w-[80%] md:w-[70%]'>Stay up to date with our latest projects, product launches, and technical insights on IoT, embedded systems, and sustainable technology.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                imageSrc={post.imageSrc}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
        </div>
      </section>
    
  );
};

export default BlogSection;
