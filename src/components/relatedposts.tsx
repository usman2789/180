import React from "react";
import Link from "next/link";
import Image from "next/image";

interface relatedpost {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  category: string;
  readTime: string;
}

interface RelatedPostsProps {
  posts: relatedpost[];
}

const relatedposts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full transform hover:-translate-y-1">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="text-md font-semibold text-gray-800 mb-2 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default relatedposts;