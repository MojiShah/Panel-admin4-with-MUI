import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2018", 1230, 840, 950],
    ["2019", 480, 590, 550],
    ["2020", 1380, 590, 550],
    ["2021", 480, 290, 150],
    ["2022", 1000, 400, 200],
];

export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    colors:['#6242af','#bed150','#a73c3c']
};

export default function BarChart() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="350px"
            data={data}
            options={options}
        />
    );
}
