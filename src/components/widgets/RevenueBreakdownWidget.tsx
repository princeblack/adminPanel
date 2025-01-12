import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);
import {
  ArrowUpIcon,
  ArrowDownIcon,
  MoveDownLeft,
  MoveUpLeft,
} from "lucide-react";
const RevenueBreakdownWidget = () => {
  const changePercentage = -49;
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

  const data = {
    labels: ["May 15", "May 16", "May 17", "May 18", "May 19", "May 20"],
    datasets: [
      {
        label: "Online Sales",
        data: [870, 920, 850, 2930, 890, 940],
        borderColor: "rgba(54, 162, 235, 1)", // Couleur pour les ventes en ligne
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Fond transparent
        fill: true,
        tension: 0.4, // Rendre la courbe lisse
      },
      {
        label: "Offline Sales",
        data: [150, 170, 1730, 190, 900, 180],
        borderColor: "rgba(255, 99, 132, 1)", // Couleur pour les ventes hors ligne
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Fond transparent
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
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
    animation: {
      duration: 2000, 
      easing: "easeInOutQuart",
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
    <div className="bg-white shadow-md p-2 rounded-lg w-full h-auto">
      <h3 className="text-lg font-semibold text-gray-700">Revenue Breakdown</h3>
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
      <div className="relative w-full h-56">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueBreakdownWidget;
