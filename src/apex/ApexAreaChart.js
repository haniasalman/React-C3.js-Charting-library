import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { getAreaChartData } from "../actions";
import { useSelector, useDispatch } from "react-redux";

export const ApexAreaChart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.areachart_data.chart_data);

  const [category, setcategory] = useState([]);
  const [UnitData, setDUnitData] = useState([]);

  const month = [];
  const unit_consumed = [];

  useEffect(() => {
    dispatch(getAreaChartData());
    console.log("json data: ", data);
    data.map((item) => {
      //   console.log("Item:", item)
      month.push(item.month);
      unit_consumed.push(item.unit_consumed);
    });

    setcategory(month);
    setDUnitData(unit_consumed);
  }, []);

  return (
    <div>
      <Chart
        options={{
          xaxis: {
            categories: category,
          },
          stroke: {
            curve: "smooth",
          },
          plotOptions: {
            area: {
              fillTo: "end",
            },
          },
        }}
        series={[
          {
            name: "unit_consumed",
            data: UnitData,
          },
          
        ]}
        type="area"
        width="450"
      />
    </div>
  );
};

