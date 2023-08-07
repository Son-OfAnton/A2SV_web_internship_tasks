import BlogList from '../components/BlogList';

const blogs = [
  { id: 1, title: 'Blog 1', date: '2023-07-22', content: 'Content for Blog 1' },
  { id: 2, title: 'Blog 2', date: '2023-07-23', content: 'Content for Blog 2' },
  // Add more blog data here
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
