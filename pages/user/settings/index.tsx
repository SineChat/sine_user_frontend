import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import { useAppSelector } from "@/shared/redux/store";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import useModal from "@/hooks/useModal";
import ChangePassword from "@/shared/components/user/settings/ChangePassword";
import UpdateProfile from "@/shared/components/user/settings/ChangeName";

const SettingsPage: AppPage = () => {
  const user = useAppSelector((state) => state.user.user);
  const {
    Modal: ChangePasswordModal,
    setShowModal: setShowChangePasswordModal,
  } = useModal();
  const {
    Modal: ChangeNameModal,
    setShowModal: setShowChangeNameModal,
  } = useModal();
  return (
    <>
      <div>
        <div className="text-center">
          <p className="text-2xl lg:text-4xl lg:fw-6600">Settings</p>
          <p className="mt-4 lg:text-2xl brown">
            All your account settings in one place
          </p>
        </div>
        <div className="mt-12 lg:mt-16 lg:w-9/12 mx-auto">
          <div className="flex items-center gap-x-3">
            <div className="w-24 h-24 bg-[#1489C8] circle grid place-content-center">
              <p className="text-white text-5xl fw-600">
                {user.firstname.charAt(0)}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-6">
                <p className="text-xl">{`${user.firstname} ${user.lastname}`}</p>
                <FaRegEdit className="text-primary" onClick={() => setShowChangeNameModal(true)}/>
              </div>
              <p className="mt-2 brown">Active</p>
            </div>
          </div>
          <div className="mt-12">
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <p className="text-xl mb-2">Your Email Address</p>
                <div className="border border-[#D7DCE0] p-3 rounded bg-[#F4F5F6]">
                  <p className="text-[#677684]">{user?.email}</p>
                </div>
              </div>
              <div>
                <p className="text-xl mb-2">Registered Phone Number</p>
                <div className="border border-[#D7DCE0] p-3 h-12 rounded bg-[#F4F5F6]">
                  <p className="text-[#677684]">{user?.phone}</p>
                </div>
              </div>
              <div>
                <p className="text-xl mb-2">Password Reset</p>
                <p className="gray mt-3 mb-5">
                  Click the button below to reset your password
                </p>
                <span className="btn-sec" onClick={() => setShowChangePasswordModal(true)}>Reset Password</span>
              </div>
              <div>
                <p className="text-xl mb-2">Generate API Keys</p>
                <p className="gray mt-3 mb-5">
                  Click the button below to generate API keys
                </p>
                <Link href="/user" className="btn-sec">
                  Generate API keys
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordModal title="Change Password">
        <ChangePassword close={() => setShowChangePasswordModal(false)}/>
      </ChangePasswordModal>
      <ChangeNameModal title="Update Profile">
        <UpdateProfile user={user} close={() => setShowChangeNameModal(false)}/>
      </ChangeNameModal>
    </>
  );
};

export default SettingsPage;
SettingsPage.Layout = "Dashboard";
