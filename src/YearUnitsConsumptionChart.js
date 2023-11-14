import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";

function ApexBarChart() {
  const [options] = useState({
    xaxis: {
      categories: [2018, 2019, 2020, 2021],
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      // axisBorder: {
      //   show: false
      // },
      // axisTicks: {
      //   show: false
      // },
      // labels: {
      //   show: false,
      //   formatter: function(val) {
      //     return val.toLocaleString();
      //   }
      // }
    },
    dataLabels: {
      enabled: true,
      // orientation: vertical,
      formatter: function (val) {
        return val.toLocaleString();
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        //   colors: ["#304758"]
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 20,
        columnWidth: "50%",
        distributed: true,
        dataLabels: {
          position: "center",
          // hideOverflowingLabels: true,
          orientation: "vertical",
        },
      },
    },
    chart: {
      animations: {
        enabled: false,
      },
      toolbar: {
        tools: {
          download: false,
        },
      },
    },

    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#FF9A3E", "#4CB5FF", "#FD7289", "#5236FF"],

    legend: {
      show: true,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      customLegendItems: [2018, 2019, 2020, 2021],
    },
  });

  const [series] = useState([
    {
      name: "Total Amount",
      data: [350190, 205000, 280000, 301095],
    },
  ]);

  return (
    <Chart options={options} series={series} type="bar" width="500" />

    // <div className="app">
    //   <div className="row">
    //     <div className="mixed-chart">
    //       <Chart options={options} series={series} type="bar" width="500" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default ApexBarChart;
