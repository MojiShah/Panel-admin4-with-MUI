import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
];

export const options = {
    title: "My Daily Activities",
    pieHole: 0.35,
    is3D: false,
    colors: ["#15099b", "#188310", "#fc05fc", "#f39f2a", "#da1818"]
};

export default function PieChart() {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
        />
    );
}
