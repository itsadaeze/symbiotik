
// import { blogPosts } from "@/data/blogData";
// import Image from "next/image";
// import Link from "next/link";

// interface BlogDetailProps {
//   params: { slug: string };
// }

// const BlogDetailPage = async ({ params }: BlogDetailProps) => {
 
//   const post = blogPosts.find((post) => post.slug === params.slug);

//   if (!post) {
//     return <div className="text-center py-20 text-red-600 text-xl">Blog post not found.</div>;
//   }

//   return (
//     <section className="py-12 px-4 max-w-3xl mx-auto">
//       <Link href="#blog">
//         <button className="mb-6 text-blue-600 hover:underline">&larr; Back to Blog</button>
//       </Link>

//       <Image
//         src={post.imageSrc}
//         alt={post.title}
//         width={800}
//         height={400}
//         className="rounded w-full h-[400px] object-cover mb-6"
//       />

//       <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
//       <p className="text-lg text-gray-700 whitespace-pre-line">{post.content}</p>
//     </section>
//   );
// };

// export default BlogDetailPage;
