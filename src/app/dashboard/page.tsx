"use client";
import React from "react";
import TotalIncomeWidget from "../../components/widgets/TotalIncomeWidget";
import ProductSalesWidget from "../../components/widgets/ProductSalesWidget";
import PendingOrdersWidget from "../../components/widgets/PendingOrdersWidget";
import ConversionRate from "../../components/widgets/ConversionRateWidget";
import Profit from "../../components/widgets/Profit";
import RevenueOverTimeWidget from "../../components/widgets/RevenueOverTimeWidget";
import SalesByCategoryWidget from "../../components/widgets/SalesByCategoryWidget";
import RevenueBreakdownWidget from "../../components/widgets/RevenueBreakdownWidget";

const MainSection = () => {
  return (
    <div className="overflow-y-scroll">
      <div className="pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TotalIncomeWidget />
        <Profit />
        <PendingOrdersWidget />
        <ConversionRate />
      </div>
      <div className="pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <RevenueOverTimeWidget />
        <RevenueBreakdownWidget />
      </div>
      <div className="pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductSalesWidget /> 
        <SalesByCategoryWidget />
      </div>
    </div>
  );
};

export default MainSection;
