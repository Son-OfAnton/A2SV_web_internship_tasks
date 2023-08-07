import BlogDetail from '../../components/BlogDetail';

const blogs = [
  { id: 1, title: 'Blog 1', date: '2023-07-22', content: 'Content for Blog 1' },
  { id: 2, title: 'Blog 2', date: '2023-07-23', content: 'Content for Blog 2' },
  // Add more blog data here
];

const Blog = ({ blog }) => {
  return (
    <div>
      <BlogDetail blog={blog} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const blogId = parseInt(params.id);
  const blog = blogs.find((blog) => blog.id === blogId);

  return {
    props: {
      blog,
    },
  };
};

export default Blog;
