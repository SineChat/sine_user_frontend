import React from "react";
import LoginForm from "@/shared/components/auth/LoginForm";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg"

const Login: AppPage = () => {
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
                <p className="text-xl lg:text-3xl ">Login</p>
                <p className="mt-4">Welcome back! Continue to your dashboard</p>
          </div>
          <div className="mt-8 lg:mt-16 lg:w-11/12 mx-auto">
            <LoginForm/>
          </div>
          <div className="mt-12 text-center">
            <p>Don’t have an account? <Link href='/auth/signup' className="text-primary">Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
Login.Layout = "Login";
