import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Popularity"],
    ["Iran",500],
    ["Spain",500],
    ["Italy",500],
    ["Austria",500],
    ["China",800],
    ["India",900],
    ["Germany", 300],
    ["United States", 400],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
];

export const options = {
    // region: "002", // Africa
    colorAxis: { colors: ["#00853f", "blue", "#e31b23"] },
    backgroundColor: "#ffffff",
    datalessRegionColor: "#d77f9e",
    defaultColor: "#f5f5f5",
};

export default function GeoChart() {
    return (
        <Chart
            chartEvents={[
                {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="250px"
            data={data}
            options={options}
        />
    );
}
