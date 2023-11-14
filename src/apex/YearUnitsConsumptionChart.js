import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";

function ApexBarChart() {
  const [options] = useState({
    chart: {
      //   height: 350,
      //   type: "bar",
      stacked: false,
      animations: {
        enabled: false,
      },
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 2],
    },
    // title: {
    //   text: "XYZ - Stock Analysis (2009 - 2016)",
    //   align: "left",
    //   offsetX: 110,
    // },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          //   color: "#00E396",
        },
        labels: {
          style: {
            // colors: "#00E396",
          },
        },
        // title: {
        //   text: "Current Year Billing",
        //   style: {
        //     color: "#00E396",
        //   },
        // },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Current Year Billing",
        opposite: true,
        show: false,

        // axisTicks: {
        //   show: true,
        // },
        // axisBorder: {
        //   show: true,
        //   color: "#008FFB",
        // },
        // labels: {
        //   style: {
        //     colors: "#008FFB",
        //   },
        // },
        // title: {
        //   text: "Previous Year Billing",
        //   style: {
        //     color: "#008FFB",
        //   },
        // },
      },
      {
        seriesName: "Revenue",
        // opposite: true,
        show: false,

        // axisTicks: {
        //   show: true,
        // },
        // axisBorder: {
        //   show: true,
        //   color: "#FEB019",
        // },
        // labels: {
        //   style: {
        //     colors: "#FEB019",
        //   },
        // },
        // title: {
        //   text: "Revenue (thousand crores)",
        //   style: {
        //     color: "#FEB019",
        //   },
        // },
      },
    ],
    // tooltip: {
    //   fixed: {
    //     enabled: true,
    //     position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
    //     offsetY: 30,
    //     offsetX: 60,
    //   },
    // },
    colors: ["#0FC883", "#1C8AEF", "#FCA845"],

    legend: {
      show: true,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      customLegendItems: ["Current Year Billing", "Previous Year Billing"],
    },
    // legend: {
    //   horizontalAlign: "centre",
    //   offsetX: 40,
    // },
  });

  const [series] = useState([
    {
      name: "Current Year Billing",
      type: "column",
      data: [6000, 7400, 9000, 10000, 15000, 18000],
    },
    {
      name: "Previous Year Billing",
      type: "column",
      data: [6800, 7800, 9600, 10400, 15500, 18600, 20000, 18600, 15000, 10000, 9000, 7500],
    },
    {
      name: "Revenue",
      type: "line",
      data: [20, 29, 37, 36, 44, 45, 50, 58, 50, 40, 35, 30],
    },
    // {
    //   name: "Total Amount",
    //   data: [350190, 205000, 280000, 301095],
    // },
  ]);

  return <Chart options={options} series={series} type="line" width="600" />;
}

export default ApexBarChart;
