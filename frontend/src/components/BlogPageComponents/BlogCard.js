// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col w-64">

      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm mt-auto">
          <span>{post.date}</span>
          <span className="mx-2">|</span>
          <span>{post.author}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;