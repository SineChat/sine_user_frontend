import React from "react";
import ResetForm from "@/shared/components/auth/ResetForm";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg"

const ResetPassword: AppPage = () => {
  const router = useRouter();
  const token = router.query.token
  
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
                <p className="text-xl lg:text-3xl ">Reset Password</p>
                <p className="mt-4">Use your email or phone number to receive an OTP to reset your password</p>
          </div>
          <div className="mt-8 lg:mt-16 lg:w-11/12 mx-auto">
            <ResetForm token={token}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
ResetPassword.Layout = "Login";