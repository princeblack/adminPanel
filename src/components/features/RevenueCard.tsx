import React from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import {
  ArrowUpIcon,
  ArrowDownIcon,
  MoveDownLeft,
  MoveUpLeft,
} from "lucide-react";

const RevenueCard = ({data,summe,title, subtitle}) => {
  const changePercentage = 82; 
  const isPositive = changePercentage >= 0;
  const arrowIcon = isPositive ? (
    changePercentage >= 50 ? (
      <ArrowUpIcon className="h-5 w-5 text-green-500" />
    ) : (
      <MoveUpLeft className="h-5 w-5 text-green-500" />
    )
  ) : changePercentage > -50 ? (
    <MoveDownLeft className="h-5 w-5 text-red-500" />
  ) : (
    <ArrowDownIcon className="h-5 w-5 text-red-500" />
  );


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      title: {
        display: false,
      },
      subtitle: {
        display: false,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
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
      <div className="bg-white  rounded-lg p-1 shadow-[inset_0_-2px_40px_rgba(255,255,255,0.6)]">
            <h4 className="text-lg">{title}</h4>
            <div className="flex">
              <span
                className={`text-sm flex ${
                  isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {arrowIcon}
                {Math.abs(changePercentage)}%
                <p className="text-black ml-1">{subtitle}</p>
              </span>
            </div>
            <div className="flex justify-between items-end w-full overflow-hidden">
              <h2 className="text-2xl font-bold">{summe}+</h2>
              <div className="relative flex-1 w-1/2 h-10">
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
    </motion.div>
  );
};

export default RevenueCard;
