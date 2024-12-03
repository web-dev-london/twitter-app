import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

const Logo = () => {

  return (
    <Link
      href="/"
      className="
    rounded-full
    h-12
    w-12
    p-1
    flex
    items-center
    justify-center
    hover:bg-blue-300
    hover:bg-opacity-10
    transition
    "
    >
      <BsTwitter size={24} color="#1DA1F2" />
    </Link>
  );
}

export default Logo;