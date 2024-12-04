import Logo from "@/components/leftSide/Logo";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { items } from "@/constants/leftSideItems";
import SidebarItem from "@/components/leftSide/SidebarItem";
import { BiLogOut } from "react-icons/bi"
import { SidebarTweet } from "@/components/leftSide/SidebarTweet";


const LeftSidebarView = () => {

  const listOfItems = items.map((item, idx) => (
    <SidebarItem key={`${item.label}-${idx}`} {...item} />
  ))

  return (
    <div className=" h-full">
      <div className="flex flex-col-items-center">
        <div>
          <Logo />
          {listOfItems}
          <SidebarItem label="Logout" href="/" icon={BiLogOut} />
          <SidebarTweet />
        </div>
      </div>
    </div>
  )
}

export default LeftSidebarView