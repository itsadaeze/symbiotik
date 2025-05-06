import React from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "./ui/blogCard";


const BlogSection = () => {
  return (
    <main>
      {/* Blog Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Latest Blog Posts</h2>
          <div className="flex flex-wrap justify-center gap-6">
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
      </section>
    </main>
  );
};

export default BlogSection;
