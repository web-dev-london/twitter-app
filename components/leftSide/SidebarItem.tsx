import Link from 'next/link';
import { IconType } from 'react-icons';

type Props = {
  label: string;
  href: string;
  icon: IconType;
  onClick?: () => void
}

const SidebarItem = ({ label, href, icon: Icon }: Props) => {
  return (
    <Link href={href} className="text-gray-400 hover:text-gray-500 transition  flex flex-row items-center rounded-full">
      <div className="p-2">
        <Icon size={18} />
      </div>
      <div className="hidden md:block text-sm lg:text-base">
        {label}
      </div>
    </Link>
  )
}

export default SidebarItem