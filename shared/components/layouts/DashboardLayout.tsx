import React, { PropsWithChildren } from "react";
import SidebarLayout from "./Sections/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from 'react-icons/ri';

const DashboardLayout = ({ children }: PropsWithChildren) => {

    const [toggled, setToggled] = React.useState(false);

  return (
    <div className="flex ">
      <div className="lg:w-[300px]">
        <SidebarLayout setToggled={setToggled} toggled={toggled}/>
      </div>
      <div className="relative w-full">
        <div className="lg:hidden px-3 py-5 flex justify-between">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685784940/sinechat/Frame_128_2_owb6zz.png"
              alt="logo"
              width={300}
              height={300}
              className="w-36 mb-5"
            />
          </Link>
          <RiMenu3Line className="text-2xl" onClick={() => setToggled(!toggled)}/>
        </div>
        <div className="bg-dash lg:py-10 min-h-screen px-3 lg:px-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
