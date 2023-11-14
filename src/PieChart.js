import React from "react";
import c3 from "c3";
// import jsonData from './data.json'
import { useEffect } from "react";
import { getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";

export const PieChart = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.users.users);
    // const loading = useSelector((state) => state.users.loading);
    // const error = useSelector((state) => state.users.error);
  
  useEffect(() => {
    //   const data = jsonData.columns
    dispatch(getUsers());
      console.log("json data: ",data)
    c3.generate({
        data: {

            // url: 'data.json',
            // mimeType: 'json',
            columns:  data.columns,
           
            type : 'pie',
        },
        pie: {
            label: {
                format: function (value) {
                    // return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return value.toLocaleString();
                }
            }
        }
    });
  }, []);

  return <div id="chart" />;
};