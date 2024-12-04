'use client';
import { useEffect, useState } from 'react';
import { FaFeather } from 'react-icons/fa';
import { Modal } from '../Modal';



export const SidebarTweet = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  void isModalOpen;


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: <768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleModalSubmit = () => {
    console.log('Modal submitted');
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className=" cursor-pointer mt-6 rounded-full h-10 w-10 p-[10px] 
        md:h-auto md:w-full  md:px-4 md:py-1 flex items-center justify-center bg-sky-500 hover:bg-sky-400 transition ease-in-out outline-none"
      >
        {isMobile ? (
          <FaFeather size={24} color="#fff" />
        ) : (
          <span className="text-white font-semibold text-[15px]">Tweet</span>
        )}
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        title="Global Modal Example"
        body={<div>This modal is accessible from the ModalManager.</div>}
        actionLabel="Confirm"
        footer={<div>Footer Content Here</div>}
      />
    </>
  );
};