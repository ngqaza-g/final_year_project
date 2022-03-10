import React from 'react';

export default function Monitor(){
    return (
        //  <!-- Monitor --> 
            <div className="col-lg-6 p-2 border border-dark monitor">
            <div className="row h-100">
                <div className="col-9 d-flex flex-column h-100">

                    {/* <!-- Monitor heading --> */}
                    <div className="top d-flex justify-content-between p-1">
                        <div className="bed-number">1</div>
                        <div className="patient-info">name age gender</div>
                    </div>
                    {/* <!-- End of monitor heading --> */}

                    {/* <!-- Ecg waveform --> */}
                    <div className="ecg flex-grow-1">ecg</div>
                    {/* <!-- End of Ecg waveform --> */}

                    {/* <!-- Controlls --> */}
                    <div className="controls d-flex justify-content-around">
                        <button type="button" className="btn btn-sm btn-outline-primary">Report</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Treatment Plan</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Analyse Treatment</button>
                        <button type="button" className="btn btn-sm btn-outline-success">Discharge</button>
                    </div>

                    {/* <!-- End of controls -->  */}
                </div>

                {/* <!-- Vitals Values --> */}
                <div className="col-3 d-flex flex-column justify-content-between">
                    <div className="hr d-flex justify-content-between p-1">
                        <div className="units">
                            <div className="h5">HR</div>
                            <div className="h6">bpm</div>
                        </div>
                        <div className="value">
                            <div className="h3">76</div>
                        </div>
                    </div>
                    <div className="sp02 d-flex justify-content-between p-1">
                        <div className="units">
                            <div className="h5">SPO<sub>2</sub></div>
                            <div className="h6">%</div>
                        </div>
                        <div className="value">
                            <div className="h3">95</div>
                        </div>
                    </div>
                    <div className="temp d-flex justify-content-between p-1">
                        <div className="units">
                            <div className="h5">Temp</div>
                            <div className="h6"><sup>o</sup>C</div>
                        </div>
                        <div className="value">
                            <div className="h4">36.5</div>
                        </div>
                    </div>
                </div>
                {/* <!-- End of Vitals Values --> */}
            </div>
        </div>
    //  <!-- End of Monitor -->
    );
}