import React from 'react';
import { AppContext } from '../context/AppContext';
import { Spinner } from './spinner.jsx';

export const Blogs = () => {
  const { loading, posts } = React.useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No posts available
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {post.title}
              </h2>

              <p className="text-sm text-gray-600 mb-2">
                By{" "}
                <span className="font-semibold text-blue-600">
                  {post.author}
                </span>{" "}
                on{" "}
                <span className="font-semibold text-green-600">
                  {post.category}
                </span>
              </p>

              <p className="text-sm text-gray-500 mb-4">
                Posted on {post.date}
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {post.content}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};