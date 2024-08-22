import React from "react";
import Image from "next/image";
import { ImUsers } from "react-icons/im";
import SideBaritem from "./SideBaritem";
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { useSession } from "next-auth/react";

const SideBar = () => {
  const {data: session} = useSession()
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3  pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">{session?.user.name}</p>
      </div>
      <SideBaritem Icon={ImUsers} value="Friends" />
      <SideBaritem Icon={MdGroups} value="Groups" />
      <SideBaritem Icon={AiOutlineShop} value="MarketPlace" />
      <SideBaritem Icon={MdOutlineOndemandVideo} value="Watch" />
      <SideBaritem Icon={BsStopwatch} value="Memeries" />
      <SideBaritem Icon={MdOutlineExpandMore} value="See more" />
    </div>
  );
};

export default SideBar;
