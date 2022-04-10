import React, {useState, useEffect} from 'react';
import {Chart as ChartJS, LineElement, PointElement, LinearScale} from 'chart.js';
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


export default function Ecg({ bed_number}){
  // const get_data = ()=>{
  //   const data = [];
  //   for(let i = 0; i <= 50; i++){
  //       data[i] = Math.random() * 10; 
  //   }

  //   return data;
  // }

  let update = useSelector(state => state.ecg_temp);

  let data_ = [];
  useEffect(()=>{
    data_ = [...data_ , update["ecg"]];
  }, [update])

  ChartJS.register(ChartStreaming, LineElement, PointElement, LinearScale);
    const data = {
      datasets : [{
        data: data_,
        radius: 0,
        borderColor: "#00000"
      }]
    }

    const options = {
      plugins: {
        legend: {
          display: false
        }
      },
      scales:{
        x: {
            type: 'realtime',
            realtime:{
                duration: 10000,
                frameRate: 5,
                // refresh : 1000,
                // onRefresh: (chart)=>{
                //     chart.data.datasets.forEach(dataset =>{

                //         let now = Date.now();

                //         const data = get_data();
                //         data.forEach((value, index)=>{
                //             dataset.data.push({
                //                 x : now + index * 20,
                //                 y: value
                //             });
                //         })
                //         // dataset.data.push({
                //         //     x: Date.now(),
                //         //     y: Math.random() * 10
                //         //     // y: 0

                //         // })
                //     })
                //   }
            }
        }
      } 
    }

    return (
        <div className="ecg flex-grow-1 py-2">
          <Line
            data = {data}
            options = {options}
          />
        </div>
    );
}