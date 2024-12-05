import Logo from "@/components/leftSide/Logo";
import SidebarItem from "@/components/leftSide/SidebarItem";
import { SidebarTweet } from "@/components/leftSide/SidebarTweet";
import { items } from "@/constants/leftSideItems";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";


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

          <SidebarItem
            label="Logout"
            href="/"
            icon={BiLogOut}
            onClick={() => signOut()}
          />
          <SidebarTweet />
        </div>
      </div>
    </div>
  )
}

export default LeftSidebarView