import React from 'react';
export default function Readings(){
    return(
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
    );
}