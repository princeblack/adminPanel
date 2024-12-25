import React, { useState } from "react";
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
const RevenueOverTimeWidget = () => {
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [12000, 19000, 3000, 5000, 20000, 30000, 45000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(22, 128, 146,0.7)",
        tension: 0.4,
        fill: false,
      },
    ],
  });
  const changePercentage = 49;
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

  const options: any = {
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
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md p-1 rounded-lg w-full h-auto">
      <h3 className="text-lg font-semibold text-gray-700">Revenue Over Time</h3>
      <div className="flex mb-2">
        <p className="text-black mr-2"> $97,685,089</p>
        <span
          className={`text-sm flex ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {arrowIcon}
          {Math.abs(changePercentage)}%
          <p className="text-black ml-1">Compared to last month</p>
        </span>
      </div>

      <div className=" relative w-full h-72">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default RevenueOverTimeWidget;
