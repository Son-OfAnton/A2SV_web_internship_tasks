const blogs = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
    date: "2023-07-25",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
    date: "2023-07-26",
  },
];

const getAllBlogs = () => {
  return blogs;
};

const getBlogById = (id) => {
  return blogs.find((blog) => blog.id === id);
};

const addBlog = (title, content, date) => {
  const id = blogs.length + 1;
  const newBlog = { id, title, content, date };
  blogs.push(newBlog);
  return newBlog;
};

const updateBlog = (id, title, content, date) => {
  const blogIndex = blogs.findIndex((blog) => blog.id === id);
  if (blogIndex !== -1) {
    blogs[blogIndex].title = title;
    blogs[blogIndex].content = content;
    blogs[blogIndex].date = date;
    return blogs[blogIndex];
  }
  return null; 
};

const deleteBlog = (id) => {
  const blogIndex = blogs.findIndex((blog) => blog.id === id);
  if (blogIndex !== -1) {
    blogs.splice(blogIndex, 1);
    return true; 
  }
  return false; 
};

module.exports = {
  getAllBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
};
