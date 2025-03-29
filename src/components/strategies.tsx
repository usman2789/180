import React from 'react';
import Link from 'next/link';
import RelatedPosts from './relatedposts'; // Adjust the import path as needed

interface Post {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  category: string;
  readTime: string;
}

const Strategies: React.FC = () => {
  // Sample posts data - replace with your actual data or fetch from API
  const samplePosts: Post[] = [
    {
      id: '1',
      title: 'Advanced Testing Techniques',
      slug: 'advanced-testing-techniques',
      coverImage: '/blog.png', // Replace with actual image path
      category: 'Testing',
      readTime: '5'
    },
    {
      id: '2',
      title: 'Performance Optimization',
      slug: 'performance-optimization',
      coverImage: '/blog.png', // Replace with actual image path
      category: 'Optimization',
      readTime: '7'
    },
    {
      id: '3',
      title: 'CI/CD Best Practices',
      slug: 'ci-cd-best-practices',
      coverImage: '/blog.png', // Replace with actual image path
      category: 'DevOps',
      readTime: '4'
    }
  ];

  return (
    <section id='strategies' className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Explore the Best Strategies for Test
        </h2>
         {/* Add the RelatedPosts component here */}
         <div className="mt-16 mb-10">
          <RelatedPosts posts={samplePosts} />
        </div>
        <Link
          href="/blog"
          className="bg-[#ffa502] hover:bg-[#ff9f00] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
        >
          Explore more strategies
        </Link>

       
      </div>
    </section>
  );
};

export default Strategies;