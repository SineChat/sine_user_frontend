import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const WhatsappMetricChart = () => {
  const options = {
    colors: ["#0B1B2B", "#00DF53"],
    legend: {
      show: true,
    },
    stroke: {
      width: 1,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu",],
    },
  };
  const series = [
    {
      name: "Active",
      data: [5, 20, 15, 11,],
    },
    {
        name: "Inactive",
        data: [3, 10, 10, 15,],
      },
  ];

  return (
    <>
      <div>
        {typeof window !== "undefined" && (
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="300px"
          />
        )}
      </div>
    </>
  );
};

export default WhatsappMetricChart;
