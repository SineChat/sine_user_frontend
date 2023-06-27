import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import ForgetForm from "@/shared/components/auth/ForgetForm";
import { AppPage } from "@/shared/components/layouts/Types";
import logo from "../../public/logo.svg"


const ForgetPassword: AppPage = () => {
  return (
    <>
      <div className="box py-16">
        <div className="lg:w-5/12 mx-auto">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-48 lg:w-96 mx-auto"
              width={400}
              height={100}
            />
          </Link>
          <div className="text-center mt-8 lg:mt-16">
                <p className="text-xl lg:text-3xl ">Forgot Password</p>
                <p className="mt-4">Did you forget your password? No worries! We will help you recover it</p>
          </div>
          <div className="mt-8 lg:mt-16 lg:w-11/12 mx-auto">
            <ForgetForm />
          </div>
          <div className="mt-12 text-center">
            <p>Back to <Link href='/auth/login' className="text-primary">Login</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
ForgetPassword.Layout = "Login";