import React from 'react';
import Chart from 'react-apexcharts';

export default function Ecg(){
        // const [series, setSeries] = useState([]);

    // setSeries([{
    //     name: "Desktops",
    //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    // }]);

    const series = [{

        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
    ]

    const options = {
        chart: {
        height: '100%',
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar:{
            show : false
        },
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
        }
      },

        tooltip:{
            enabled : false
        },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },

      grid: {
    //     row: {
    //       colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //       opacity: 0.5
    //     },
    //     column:{
    //         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //         opacity: 0.5
    //     }
    //   },

      yaxis:{
          max: 100,
        lines:{
            show: true
        }
      },
      xaxis: {
          labels:{
              show: false
          },
          lines:{
              show: true
          }
      }
      }
      };

    return (
        <div className="ecg flex-grow-1 d-none d-sm-block">
            <Chart
                options = {options}
                series = {series}
                type = {"line"}
                height = "100%"
            />
        </div>
    );
}