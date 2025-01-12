"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import { motion } from "framer-motion";

const SalesByCategoryWidget = () => {
  const data = {
    labels: ["Electronics", "Fashion", "Home & Living"],
    datasets: [
      {
        label: "Sales by Category",
        data: [54000, 32000, 24000],
        backgroundColor: ["#168092", "#3fc8e4", "#0cc1a2"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options= {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <motion.div
    className="bg-white  rounded-lg p-1 shadow-[inset_0_-2px_40px_rgba(255,255,255,0.6)]"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
      <h3 className="text-lg font-semibold text-gray-700">Sales by Category</h3>
      <div className="mt-2">
        <Doughnut data={data} options={options} />
      </div>
    </motion.div>

  );
};

export default SalesByCategoryWidget;
