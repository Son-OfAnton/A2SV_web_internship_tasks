import { useState } from 'react';
import BlogForm from '../components/BlogForm';

const New = () => {
  const [blogs, setBlogs] = useState([]);

  const handleAddBlog = (newBlog) => {
    const updatedBlogs = [...blogs, { ...newBlog, id: blogs.length + 1 }];
    setBlogs(updatedBlogs);
  };

  return (
    <div>
      <h1>Create New Blog</h1>
      <BlogForm onSubmit={handleAddBlog} initialValues={{}} />
    </div>
  );
};

export default New;
