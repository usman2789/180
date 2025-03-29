// src/app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogs } from '@/lib/data';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function BlogPage() {
  const blogs = await getAllBlogs();
  
  return (
    <div>
      <Header />
    <div className="container mx-auto px-4 py-12  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-blue-950  mt-14 mb-12 text-center">Strategies</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full transform hover:-translate-y-1">
              <div className="relative h-25  overflow-hidden">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">{blog.category}</span>
                <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">{blog.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{blog.readTime} min read</span>
                  
                </div>
              </div>
            </div>
          </Link>
          
        ))}
        
      </div>
    </div>
    <Footer />
    </div>
  );
}