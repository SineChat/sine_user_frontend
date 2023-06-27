"use client";
import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRequestVerificationMutation } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import logo from "../../public/logo.svg"

const SignupSuccess: AppPage = () => {
  const router = useRouter();
  const email = router.query.email && router.query.email;
  const [sendVerify] = useRequestVerificationMutation();

  const resendMail = () => {
    const payload = {
      email: email,
      redirect_url: `${process.env.NEXT_PUBLIC_BASE_HOME}/auth/verify-email`,
    };
    sendVerify(payload)
      .then((res: any) => {
        if (res.data.status === "success") {
          toast.success(res.data.message);
        } else {
          toast.error(res?.error?.data.message);
        }
      })
      .catch(() => {});
  };

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
              height={400}
            />
          </Link>
          <div className="mt-24">
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685795595/sinechat/Group_43451_1_dajvzk.png"
              alt="logo"
              className="w-28 lg:w-48 mx-auto"
              width={400}
              height={400}
            />
            <p className="text-[#166A37] text-center text-lg lg:text-2xl fw-600 mt-6">
              Account Creation Successful
            </p>
            <p className="mt-4 text-center">
              We have sent an email to {email} to confirm the validity of your
              email address. After receiving the mail, click on the link
              provided to complete your registration.
            </p>
            <p className="text-center">
              If you have not receievd a mail{" "}
              <span
                className="text-primary whitespace-nowrap"
                onClick={resendMail}
              >
                click to resend mail
              </span>
            </p>
          </div>
          <div className="mt-6">
              <p className="text-center">Return to <Link href='/' className="text-primary">homepage</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSuccess;
SignupSuccess.Layout = "Login";
