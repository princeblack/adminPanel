"use client";

import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data for orders by country
const data = [
  { country: 'USA', orders: 1000 },
  { country: 'Germany', orders: 800 },
  { country: 'UK', orders: 600 },
  { country: 'Canada', orders: 400 },
  { country: 'france', orders: 900 },
  { country: 'India', orders: 100 },
];

const OrdersRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="country" />
        <PolarRadiusAxis />
        <Radar name="Orders" dataKey="orders" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default OrdersRadarChart;
