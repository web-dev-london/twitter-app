'use client';
import { useEffect, useState } from 'react';
import { FaFeather } from 'react-icons/fa';
import { Modal } from '../Modal';
import { LoginModal } from '../modals/LoginModal';
import { RegisterModal } from '../modals/RegisterModal';
import { Toaster } from "react-hot-toast";
import useLoginModal from '@/hooks/useLoginModal';




export const SidebarTweet = () => {
  const [isMobile, setIsMobile] = useState(false);
  const loginModal = useLoginModal();


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: <768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>
      <button
        onClick={loginModal.onOpen}
        className=" cursor-pointer mt-6 rounded-full h-10 w-10 p-[10px] 
        md:h-auto md:w-full  md:px-4 md:py-1 flex items-center justify-center bg-sky-500 hover:bg-sky-400 transition ease-in-out outline-none"
      >
        {isMobile ? (
          <FaFeather size={24} color="#fff" />
        ) : (
          <span className="text-white font-semibold text-[15px]">Tweet</span>
        )}
      </button>

      <LoginModal />
      <RegisterModal />
      <Toaster />
    </>
  );
};