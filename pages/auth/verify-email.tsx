"use client";
import React, { useEffect, useState } from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useVerifyTokenMutation } from "@/services/api/authSlice";
import { toast } from "react-toastify";

const AccountSuccess: AppPage = () => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showFailure, setShowFailure] = useState<boolean>(false);
  const router = useRouter();
  console.log(router.query.token);

  const token = router?.query?.token ? Number(router?.query?.token) : 0;
  const [verify] = useVerifyTokenMutation();

  const verifyToken = async () => {
    const payload = {
      token: token,
    };
    await verify(payload)
      .then((res: any) => {
        if (res.data.status === "success") {
          toast.success(res.data.message);
          setShowSuccess(true);
        }
      })
      .catch((err) => {
          setShowFailure(true)
      });
  };

  useEffect(() => {
    if(token !== 0){
      verifyToken();
    }
  }, [token]);

  return (
    <>
      <div className="box py-16">
        <div className="lg:w-5/12 mx-auto">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685784940/sinechat/Frame_128_2_owb6zz.png"
              alt="logo"
              className="w-48 lg:w-96 mx-auto"
              width={400}
              height={400}
            />
          </Link>
          <div className="text-center mt-16 lg:mt-16">
            {
              showFailure && (
                <div className="text-center mt-8 lg:mt-16">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1686776238/sinechat/Group_43451_2_kthos3.png"
                  alt="logo"
                  className="w-28 lg:w-48 mx-auto"
                  width={400}
                  height={400}
                />

                <p className="text-[#166A37] text-2xl fw-600 mt-6">
                  Email Verification Failed
                </p>
                <p className="mt-4">
                  Click to be redirected to the{" "}
                  <Link href="/auth/login">login page</Link>
                </p>
              </div>
              )
            }
            {showSuccess && (
              <div className="text-center mt-8 lg:mt-16">
                <Image
                  src="https://res.cloudinary.com/dic7regoe/image/upload/v1685795595/sinechat/Group_43451_1_dajvzk.png"
                  alt="logo"
                  className="w-28 lg:w-48 mx-auto"
                  width={400}
                  height={400}
                />

                <p className="text-[#166A37] text-2xl fw-600 mt-6">
                  Account Creation Successful
                </p>
                <p className="mt-4">
                  You will now be redirected to the{" "}
                  <Link href="/auth/login">login page</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSuccess;
AccountSuccess.Layout = "Login";