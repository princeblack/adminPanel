"use client";
import React from "react";
import RevenueCard from "@/components/features/RevenueCard";
import OrderTable from "@/components/features/OrderTable";
import OrdersPieChart from "@/components/features/OrdersPieChart";
import OrdersRadarChart from "@/components/features/OrdersRadarChart";
import ActiveUsersMapCard from "@/components/features/ActiveUsersMapCard";

export default function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(22, 128, 146,0.7)",
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
      },
    ],
  };
  return (
    <div className="overflow-y-scroll mt-3 p-2 bg-white h-lvh">
      <ActiveUsersMapCard />
      <div className="mb-4 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="mb-4  col-span-2 gap-2">
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <RevenueCard
              data={data}
              summe={"97634"}
              title={"Total Orders"}
              subtitle={"Compared to last month"}
            />
            <RevenueCard
              data={data}
              summe={"4760"}
              title={"Pending Orders"}
              subtitle={"Avg. Order Value"}
            />
            <RevenueCard
              data={data}
              summe={"2349"}
              title={"Avg. Order Value"}
              subtitle={"Compared to last month"}
            />
          </div>
          <OrderTable />
        </div>
        <div className=" gap-1">
          <OrdersRadarChart />
          <OrdersPieChart />
        </div>
      </div>
    </div>
  );
}
