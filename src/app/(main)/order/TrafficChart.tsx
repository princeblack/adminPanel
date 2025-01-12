import React from "react";
import { Card } from "@nextui-org/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    // DropdownSection,
    DropdownItem
  } from "@nextui-org/dropdown";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Données du graphique
const data = [
  { age: "10+", Female: 40, Male: 30 },
  { age: "15+", Female: 60, Male: 50 },
  { age: "20+", Female: 80, Male: 90 },
  { age: "30+", Female: 70, Male: 100 },
  { age: "45+", Female: 50, Male: 60 },
];

const TrafficChart = () => {
  return (
    <Card css={{ padding: "20px", maxWidth: "400px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h4>Traffic</h4>
        <Dropdown>
          <DropdownTrigger flat>All time</DropdownTrigger>
          <DropdownMenu aria-label="Time Range">
            <DropdownItem key="all">All time</DropdownItem>
            <DropdownItem key="last-month">Last Month</DropdownItem>
            <DropdownItem key="last-week">Last Week</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="age" />
          <Tooltip />
          <Bar dataKey="Female" fill="#FF4081" barSize={10} radius={[10, 10, 0, 0]}>
            <LabelList dataKey="Female" position="insideRight" />
          </Bar>
          <Bar dataKey="Male" fill="#3F51B5" barSize={10} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TrafficChart;
