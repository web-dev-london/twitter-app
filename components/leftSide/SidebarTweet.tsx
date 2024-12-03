'use client';

import Link from 'next/link';
import { FaFeather } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const SidebarTweet = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: <768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <Link
      href="/tweet"
      className="mt-6 rounded-full h-10 w-10 p-[10px] md:h-auto md:w-auto md:px-4 md:py-1 flex items-center justify-center bg-sky-500 hover:bg-sky-400 transition ease-in-out"
    >
      {isMobile ? (
        <FaFeather size={24} color="#fff" />
      ) : (
        <span className="text-white font-semibold text-[15px]">Tweet</span>
      )}
    </Link>
  );
};