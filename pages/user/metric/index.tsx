import Button from "@/shared/components/Ui/Button";
import { AppPage } from "@/shared/components/layouts/Types";
import WhatsappMetricChart from "@/shared/components/user/metric/charts/Whatsapp";
import React from "react";

const MetricPage: AppPage = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <p className="text-2xl lg:text-4xl lg:fw-6600">Metric</p>
          <p className="mt-4 lg:text-2xl brown">
            Track the perfomance of your bots
          </p>
        </div>
        <div className="w-full mt-12 flex justify-center">
          <div>
            <div className="grid lg:grid-cols-3 gap-x-5 mt-8">
              <div className="border border-[#D7DCE0] rounded-lg p-3 lg:p-5 bg-[#FAFBFF]">
                <p className="text-gray-500 fs-500">Total No Of Created Bots</p>
                <p className="text-xl">1,200</p>
              </div>
              <div className="border border-[#D7DCE0] rounded-lg p-3 lg:p-5 bg-[#FAFBFF]">
                <p className="text-gray-500 fs-500">Total No Of Active Bots</p>
                <p className="text-xl">870</p>
              </div>
              <div className="border border-[#D7DCE0] rounded-lg p-3 lg:p-5 bg-[#FAFBFF]">
                <p className="text-gray-500 fs-500">
                  Total No Of Received Messages
                </p>
                <p className="text-xl">13,876</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 grid lg:grid-cols-3 gap-x-5 gap-y-8">
          <div className="border border-[#D7DCE0] rounded p-3">
            <div className="flex justify-between items-center">
              <p>Whatsapp</p>
              <select className="p-2 border border-[#D7DCE0] rounded">
                <option>3 Months</option>
              </select>
            </div>
            <div className="mt-6">
              <WhatsappMetricChart />
            </div>
          </div>
          <div className="border border-[#D7DCE0] rounded p-3">
            <div className="flex justify-between items-center">
              <p>Messenger</p>
              <select className="p-2 border border-[#D7DCE0] rounded">
                <option>3 Months</option>
              </select>
            </div>
            <div className="mt-6">
              <WhatsappMetricChart />
            </div>
          </div>
          <div className="border border-[#D7DCE0] rounded p-3">
            <div className="flex justify-between items-center">
              <p>Telegram</p>
              <select className="p-2 border border-[#D7DCE0] rounded">
                <option>3 Months</option>
              </select>
            </div>
            <div className="mt-6">
              <WhatsappMetricChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricPage;
MetricPage.Layout = "Dashboard";
