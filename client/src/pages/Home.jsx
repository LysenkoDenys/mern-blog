import { Link } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Spinner } from 'flowbite-react';

const CallToAction = lazy(() => import('../components/CallToAction'));
const PostCard = lazy(() => import('../components/PostCard'));

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts?limit=3'); // limits of posts to improve performance
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to my Blog, friend.
        </h1>

        <p className="text-gray-500 text-2xl sm:text-4xl">
          Here you'll find a variety of articles on topics such as web
          development, software engineering, programming languages, memories and
          just thoughts about our life.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-600 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-green-200 dark:bg-slate-700">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-[100px]">
              <Spinner size="lg" />
            </div>
          }
        >
          <CallToAction />
        </Suspense>
      </div>
      <div className="max-w-7xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              <Suspense
                fallback={
                  <div className="flex justify-center items-center min-h-[100px]">
                    <Spinner size="lg" />
                  </div>
                }
              >
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </Suspense>
            </div>
            <Link
              to={'/search'}
              className="text-lg text-teal-600 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
