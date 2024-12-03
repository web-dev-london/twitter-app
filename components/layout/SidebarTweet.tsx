import Link from 'next/link';
import { FaFeather } from 'react-icons/fa';

export const SidebarTweet = () => {
  return (
    <>
      <Link href="/tweet" className="mt-6 md:hidden rounded-full w-10 h-10 p-1 flex
    items-center justify-center transition bg-sky-500 hover:opacity-40">
        <FaFeather size={24} color="#fff" />
      </Link>
      <div className="mt-8 hidden md:block px-4 py-1 rounded-full bg-sky-500 hover:bg-sky-400 transition-colors ease-in-out">
        <p
          className="
          hidden md:block
          text-center
          font-semibold
          text-white
          text-[15px]"
        >
          Tweet
        </p>
      </div>
    </>
  );
}