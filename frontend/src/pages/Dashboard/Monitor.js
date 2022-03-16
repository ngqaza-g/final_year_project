import React from 'react';
import Chart from 'react-apexcharts';

export default function Monitor(){
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
        //  <!-- Monitor --> 
            <div className="col-lg-6 p-2 my-2 border border-dark monitor">
            <div className="row">
                <div className="col-sm-9 d-flex flex-column h-100">

                    {/* <!-- Monitor heading --> */}
                    <div className="top d-flex justify-content-between">
                        <div className="bed-number">1</div>
                        <div className="patient-info d-flex justify-content-between">
                            <p className="lead me-2">Ngqabutho Dlamini</p> 
                            <p className="lead me-2">23</p> 
                            <p className="lead me-2">M</p>
                        </div>
                    </div>
                    {/* <!-- End of monitor heading --> */}

                    {/* <!-- Ecg waveform --> */}
                    <div className="ecg flex-grow-1 d-none d-sm-block">
                        <Chart
                            options = {options}
                            series = {series}
                            type = {"line"}
                            height = "100%"
                         />
                    </div>
                    {/* <!-- End of Ecg waveform --> */}
                </div>

                {/* <!-- Vitals Values --> */}
                <div className="col-sm-3 d-flex flex-sm-column justify-content-between">
                    <div className="hr d-flex justify-content-between p-1">
                        <div className="me-2">
                            <div className="h5">HR</div>
                            <div className="d-none d-sm-block h6">bpm</div>
                        </div>
                        <div className="value">
                            <div className="h3">76</div>
                        </div>
                    </div>
                    <div className="sp02 d-flex justify-content-between p-1">
                        <div className="units me-2">
                            <div className="h5">SPO<sub>2</sub></div>
                            <div className="d-none d-sm-block h6">%</div>
                        </div>
                        <div className="value">
                            <div className="h3">95</div>
                        </div>
                    </div>
                    <div className="temp d-flex justify-content-between p-1">
                        <div className="units me-2">
                            <div className="h5">Temp</div>
                            <div className="d-none d-sm-block h6"><sup>o</sup>C</div>
                        </div>
                        <div className="value">
                            <div className="h4">36.5</div>
                        </div>
                    </div>
                </div>
                {/* <!-- End of Vitals Values --> */}
            </div>

            {/* <!-- Controlls --> */}
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-sm btn-outline-primary me-1 my-1 text-truncate">Report</button>
                <button type="button" className="btn btn-sm btn-outline-secondary me-1 my-1 text-truncate">Treatment Plan</button>
                <div className="hidden">
                    <button type="button" className="btn btn-sm btn-outline-secondary me-1 my-1 text-truncate">Analyse Treatment</button>
                    <button type="button" className="btn btn-sm btn-outline-success me-1 my-1 text-truncate">Discharge</button>
                </div>

                <div className="more dropdown">
                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle me-1 my-1" data-bs-toggle="dropdown">More..</button>
                    <div className="dropdown-menu">
                        <button type="button" className="dropdown-item btn btn-sm btn-outline-secondary me-1 my-1 text-truncate">Analyse Treatment</button>
                        <button type="button" className="dropdown-item btn btn-sm btn-outline-success me-1 my-1 text-truncate">Discharge</button>
                    </div>
                </div>
            </div>

            {/* <!-- End of controls -->  */}
        </div>
    //  <!-- End of Monitor -->
    );

}