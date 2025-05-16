// src/pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/BlogPageComponents/Breadcrumb';
import BlogCard from '../components/BlogPageComponents/BlogCard';

const REACT_APP_API_URL = process.env.REACT_APP_REACT_APP_API_URL || 'http://localhost:5000';

// Sample blog data (would be fetched from backend later)
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Schengen Visa for Indians: Fees, Requirements and Application Process',
//     excerpt: 'Learn how Indian nationals can successfully apply for a Schengen visa. This guide covers documents..',
//     image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     date: 'May 12, 2025',
//     author: 'Jyoti Bhatt'
//   },
//   // ... rest of hardcoded data
// ];

function BlogPage() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Blog' }
  ];

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${REACT_APP_API_URL}/api/blogs`);
        const data = await res.json();
        const formattedBlogs = data.map(blog => ({
          id: blog._id,
          title: blog.title,
          excerpt: blog.content ? blog.content.substring(0, 150) + '...' : '',
          image: blog.image,
          date: blog.date ? new Date(blog.date).toLocaleDateString() : '',
          author: blog.author,
          content: blog.content
        }));
        setBlogs(formattedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Blog Title */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold mb-6 ml-52">Blog</h1>
        
        {/* Recently Published Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 ml-52">Recently Published</h2>

        <div className="flex justify-center px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="text-center">Loading blogs...</div>
            ) : blogs.length === 0 ? (
               <div className="text-center col-span-full">No blogs found.</div>
            ) : (
              blogs.map(post => (
                <BlogCard key={post.id} post={post} />
              ))
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

