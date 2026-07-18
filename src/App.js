import React from 'react';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';

export default function App() {
  const { fetchBlogs } = React.useContext(AppContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}