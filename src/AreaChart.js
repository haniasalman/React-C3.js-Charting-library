import React from "react";
import c3 from "c3";

export const AreaChart = () => {
  React.useEffect(() => {
    c3.generate({
        bindto: '#chart2',
        data: {
          x:'months_label',
          columns: [
            ['months_label', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
            ['units-consumed', 380, 360, 420, 480, 650, 790],
            ['billing-amount', 11400, 10800, 12600, 14400, 19500, 23700]

          ],
          axes: {
            'billing-amount': 'y2'
          },
          types: {
            'units-consumed': 'area-spline', 
            // 'billing-amount': 'area-spline'
          }
        },
        axis: {
          x:{
              type: "category"  //use all values from months_label in column section
          },
          y: {
              
            label: {
              text: 'Units Consumed',
              position: 'outer-middle'
            }
          },
          y2: {
            min: 0,
            show: true,
            label: {
              text: 'Billing Amount',
              position: 'outer-middle'
            }
          }
        },
        size: {
          height: 320,
          width: 600
      },
      tooltip: {
        grouped: false // Default true
    },
    colors: {
        "units-consumed": '#62DAAB',
        "billing-amount": '#202020',
    },
    color: {
        pattern: ['#62DAAB', '#202020']
   },
    });
  }, []);
  
  return (
    <div>
      <div id="chart2" />
    </div>
  );
};