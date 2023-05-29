import * as React from "react";
import {
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  Legend,
  Bar,
  Tooltip,
} from "recharts";
import Title from "../Title";
import "./Chart.css";

export default function Chart({ title, dataKeyBar, dataKey, data, tooltip }) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <BarChart width={1350} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip content={tooltip} />
        <Legend />
        <Bar dataKey={dataKeyBar} fill="#8884d8" />
      </BarChart>
    </React.Fragment>
  );
}
