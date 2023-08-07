import { useRouter } from 'next/router';

const BlogDetail = ({ blog }) => {
  const router = useRouter();
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Date: {blog.date}</p>
      {/* Add any other details here */}
    </div>
  );
};

export default BlogDetail;
