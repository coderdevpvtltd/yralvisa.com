import React, { useEffect, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import AdminLayout from '../components/AdminLayout';

const REACT_APP_API_URL = process.env.REACT_APP_REACT_APP_API_URL || 'http://localhost:5000';

const defaultBlog = {
  title: '',
  author: '',
  content: '',
  date: '',
  image: '',
};

function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({ defaultValues: defaultBlog });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${REACT_APP_API_URL}/api/blogs`);
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      // handle error
    }
    setLoading(false);
  };

  const onSubmit = async (data) => {
    console.log('Submitting blog data:', data);
    const url = editingBlog ? `${REACT_APP_API_URL}/api/blogs/${editingBlog._id}` : `${REACT_APP_API_URL}/api/blogs`;
    const method = editingBlog ? 'PATCH' : 'POST'; // Use PATCH for updates

    try {
      await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setShowForm(false);
      setEditingBlog(null);
      reset(defaultBlog);
      fetchBlogs(); // Refresh the list
    } catch (err) {
      console.error('Error submitting blog:', err);
      // handle error
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setShowForm(true);
    // Format date for input type="date"
    const formattedBlog = { ...blog, date: blog.date ? new Date(blog.date).toISOString().split('T')[0] : '' };
    Object.keys(defaultBlog).forEach((key) => setValue(key, formattedBlog[key]));
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this blog?')) {
      try {
        await fetch(`${REACT_APP_API_URL}/api/blogs/${id}`, { method: 'DELETE' });
        fetchBlogs(); // Refresh the list
      } catch (err) {
        console.error('Error deleting blog:', err);
        // handle error
      }
    }
  };

  const handleAdd = () => {
    setEditingBlog(null);
    reset(defaultBlog);
    setShowForm(true);
  };

  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    if (search) {
      filtered = filtered.filter(blog =>
        (blog.title && blog.title.toLowerCase().includes(search.toLowerCase())) ||
        (blog.author && blog.author.toLowerCase().includes(search.toLowerCase())) ||
        (blog.content && blog.content.toLowerCase().includes(search.toLowerCase()))
      );
    }
    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    return filtered;
  }, [blogs, search, sortBy, sortOrder]);

  const startIdx = (page - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, filteredBlogs.length);
  const paginatedBlogs = filteredBlogs.slice(startIdx, endIdx);
  const totalPages = Math.ceil(filteredBlogs.length / pageSize);

  // Pagination range helper (can reuse the one from AdminCardsPage if needed)
  function getPageRange(currentPage, totalPages, PAGE_LIMIT = 5) {
    let startPage, endPage;
    if (totalPages <= PAGE_LIMIT) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfLimit = Math.floor(PAGE_LIMIT / 2);
      if (currentPage <= halfLimit) {
        startPage = 1;
        endPage = PAGE_LIMIT;
      } else if (currentPage + halfLimit >= totalPages) {
        startPage = totalPages - PAGE_LIMIT + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfLimit;
        endPage = currentPage + halfLimit;
      }
    }
    return { startPage, endPage };
  }

   const { startPage, endPage } = getPageRange(page, totalPages, 5);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }



  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Blogs Management</h1>
        <button
          className="bg-primary text-white px-5 py-2 rounded hover:bg-secondary flex items-center gap-2 shadow"
          onClick={handleAdd}
        >
          <FaPlus /> Add Blog
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <div className="relative">
          <input
            className="border rounded pl-8 pr-2 py-2 focus:outline-primary min-w-[220px]"
            placeholder="Search by title, author, or content..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
         <select
          className="border rounded px-2 py-2 focus:outline-primary"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <select
          className="border rounded px-2 py-2 focus:outline-primary"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <select
          className="border rounded px-2 py-2 focus:outline-primary"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50].map(size => (
            <option key={size} value={size}>{size} / page</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white rounded">
          <thead className="sticky top-0 bg-primary text-white z-10">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Author</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} className="text-center py-8">Loading...</td></tr>
            ) : paginatedBlogs.length === 0 ? (
              <tr><td colSpan={4} className="text-center py-8">No blogs found.</td></tr>
            ) : paginatedBlogs.map(blog => (
              <tr key={blog._id} className="border-b hover:bg-gray-50 transition">
                <td className="py-2 px-4 font-medium">{blog.title}</td>
                <td className="py-2 px-4">{blog.author}</td>
                <td className="py-2 px-4">{blog.date ? new Date(blog.date).toLocaleDateString() : 'N/A'}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEdit(blog)}><FaEdit /></button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(blog._id)}><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div>
          Showing {filteredBlogs.length === 0 ? 0 : startIdx + 1}-{endIdx} of {filteredBlogs.length} blogs
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >Prev</button>
          {startPage > 1 && (
            <button
              className={`px-3 py-1 rounded ${page === 1 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'} font-semibold`}
              onClick={() => setPage(1)}
            >1</button>
          )}
          {startPage > 2 && <span className="px-2 select-none">...</span>}
          {pages.map((p) => (
            <button
              key={p}
              className={`px-3 py-1 rounded ${page === p ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'} font-semibold`}
              onClick={() => setPage(p)}
            >{p}</button>
          ))}
          {endPage < totalPages - 1 && <span className="px-2 select-none">...</span>}
          {endPage < totalPages && (
            <button
              className={`px-3 py-1 rounded ${page === totalPages ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'} font-semibold`}
              onClick={() => setPage(totalPages)}
            >{totalPages}</button>
          )}
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
          >Next</button>
        </div>
      </div>

      {/* Modal Form */}
      <Dialog open={showForm} onClose={() => setShowForm(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md max-h-[90vh] overflow-y-auto relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl" onClick={() => setShowForm(false)}>&times;</button>
            <Dialog.Title className="text-xl font-bold mb-4 text-primary">{editingBlog ? 'Edit Blog' : 'Add Blog'}</Dialog.Title>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Title <span className="text-red-500">*</span></label>
                <input className="border rounded px-3 py-2 w-full" {...register('title', { required: 'Title is required' })} placeholder="Enter blog title" />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </div>
               <div>
                <label className="block mb-1 font-medium">Author</label>
                <input className="border rounded px-3 py-2 w-full" {...register('author')} placeholder="Enter author name" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Content <span className="text-red-500">*</span></label>
                <textarea className="border rounded px-3 py-2 w-full h-32" {...register('content', { required: 'Content is required' })} placeholder="Write blog content"></textarea>
                 {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Date</label>
                <input type="date" className="border rounded px-3 py-2 w-full" {...register('date')} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Image URL</label>
                <input className="border rounded px-3 py-2 w-full" {...register('image')} placeholder="Enter image URL" />
              </div>
              <button className="w-full bg-primary text-white py-2 rounded hover:bg-secondary" type="submit">
                {editingBlog ? 'Update Blog' : 'Add Blog'}
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </AdminLayout>
  );
}

export default AdminBlogsPage; 