import Link from 'next/link';

const BlogItem = ({ blog }) => {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.date}</p>
      <Link href={`/blog/${blog.id}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
};

export default BlogItem;
