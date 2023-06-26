import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage: AppPage = () => {
  return (
    <>
      <div className="pt-8">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dic7regoe/image/upload/v1685784940/sinechat/Frame_128_2_owb6zz.png"
            alt="logo"
            className="w-48 lg:w-96 mx-auto"
            width={400}
            height={400}
          />
        </Link>
        <div className="mt-12">
          <Image
            src="https://res.cloudinary.com/dic7regoe/image/upload/v1687763034/sinechat/Frame_1_zrxgjv.png"
            alt="404"
            width={700}
            height={700}
            className="lg:w-[600px] mx-auto"
          />
        </div>
        <div className="mt-12 flex justify-center">
        <Link href='/' className="bg-primary text-white py-3 rounded-lg text-center block w-48"> Return Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
NotFoundPage.Layout = "Login";
