import React from "react";
import { AppPage } from "@/shared/components/layouts/Types";
import Button from "@/shared/components/Ui/Button";

const Subscription: AppPage = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <p className="text-2xl lg:text-4xl lg:fw-6600">Subscription</p>
          <p className="mt-4 lg:text-2xl brown">
            Choose the Plan that Fits Your Needs
          </p>
        </div>
        <div className="mt-12 lg:mt-20 grid lg:grid-cols-3 gap-x-12 gap-y-8">
          <div className="bg-[#E3F9FF] rounded-lg lg:p-6">
            <p className="fw-500 text-xl">Free</p>
            <p className="mt-5 brown">
              Get started with access to SineChat basic features to engage up to
              500 contacts
            </p>
            <p className="mt-4 text-5xl">
              $10 <span>/ month</span>
            </p>
            <div className="mt-6">
              <Button title="GET STARTED" altClassName="w-full btn-like" />
            </div>
          </div>
          <div className="bg-[#E3F9FF] rounded-lg  lg:p-6">
            <p className="fw-500 text-xl">Lite</p>
            <p className="mt-5 brown">
              Get started with access to all the SineChat features to engage up
              to 1000 contacts
            </p>
            <p className="mt-4 text-5xl">
              $50 <span>/ month</span>
            </p>
            <div className="mt-6">
              <Button title="GET STARTED" altClassName="w-full btn-like" />
            </div>
          </div>
          <div className="bg-[#0B1B2B] rounded-lg  text-white lg:p-6">
            <p className="fw-500 text-xl">Lite</p>
            <p className="mt-5">
              Get started with access to all the SineChat features to engage up
              to 1000 contacts
            </p>
            <p className="mt-4 text-5xl">
              $120 <span>/ month</span>
            </p>
            <div className="mt-6">
              <Button title="GET STARTED" altClassName="w-full btn-like" />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-20 text-center brown">
          <p>All plans include unlimited users and interactions.</p>
          <p> Upgrade or downgrade at any time with no penalty.</p>
        </div>
      </div>
    </>
  );
};

export default Subscription;
Subscription.Layout = "Dashboard";
