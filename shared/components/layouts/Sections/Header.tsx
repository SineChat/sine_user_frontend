import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/shared/redux/store";

const Header = () => {
  const auth = useAppSelector((state) => state.user.user.token);
  return (
    <>
      <div className="py-2 lg:py-4 fixed w-full z-20">
        <div className="md:box mx-3 rounded-[50px] bg-[#0B1B2B] p-2">
          <div className="flex items-center justify-between py-1 lg:py-5 pl-3 pr-1 lg:px-8">
            <div className="logo">
              <Image
                src="https://res.cloudinary.com/dic7regoe/image/upload/v1685766783/sinechat/Frame_128_1_fh5xlc.png"
                alt="logo"
                className="w-28 lg:w-40"
                width={100}
                height={100}
              />
            </div>
            {!auth && (
              <div>
                <Link
                  href="/auth/login"
                  className="bg-primary block fs-400 lg:fs-600 text-white py-1 px-3 lg:px-4 lg:py-2 rounded-[20px] hover:scale-105 duration-100"
                >
                  Try SineChat Free
                </Link>
              </div>
            )}
            {auth && (
              <div>
                <Link
                  href="/user"
                  className="bg-primary block fs-400 lg:fs-600 text-white py-1 px-3 lg:px-4 lg:py-2 rounded-[20px] hover:scale-105 duration-100"
                >
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
