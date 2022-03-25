import React from 'react';
import Controls from './controls/Controls';
import Readings from './vitals/Readings';
import Ecg from './vitals/Ecg';



export default function Monitor({name, age, sex, id, role}){


    return (
        //  <!-- Monitor --> 
            <div className="col-lg-6 p-2 my-2 border border-dark monitor">
            <div className="row">
                <div className="col-sm-9 d-flex flex-column h-100">

                    {/* <!-- Monitor heading --> */}
                    <div className="top d-flex justify-content-between">
                        <div className="bed-number d-flex justify-content-center align-items-center bg-success text-white">1</div>
                        <div className="patient-info d-flex justify-content-between">
                            <p className="lead me-2">{name}</p> 
                            <p className="lead me-2">{age}</p> 
                            <p className="lead me-2">{sex}</p>
                        </div>
                    </div>
                    {/* <!-- End of monitor heading --> */}

                    {/* <!-- Ecg waveform --> */}
                        <Ecg />
                    {/* <!-- End of Ecg waveform --> */}
                </div>

                {/* <!-- Vitals Values --> */}
                    <Readings />

                {/* <!-- End of Vitals Values --> */}
            </div>

            {/* <!-- controls -->  */}
                <Controls role={role} id={id} name={name} />
            {/* <!-- End of controls -->  */}

        </div>
    //  <!-- End of Monitor -->
    );

}