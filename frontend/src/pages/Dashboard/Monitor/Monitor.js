import React from 'react';
import { useSelector } from 'react-redux';
import Controls from './controls/Controls';
import Readings from './vitals/Readings';
import Ecg from './vitals/Ecg';
import capitaliseFirstLetter from '../../../modules/capitaliseFirstLetter'



export default function Monitor({ id }){

    const [patient] = useSelector(state => state.patients.filter(patient => patient._id === id));
    const { name,  gender, age } = patient;
    
    return (
            <div className="col-lg-6 p-2 my-2 border border-dark monitor">
            <div className="row">
                <div className="col-sm-9 d-flex flex-column h-100">

            
                    <div className="d-flex justify-content-between">
                        <div className="bed-number d-flex justify-content-center align-items-center bg-success text-white">1</div>
                        <div className="patient-info d-flex justify-content-between">
                            <div className="lead me-2">{name}</div> 
                            <div className="lead me-2">{age}</div> 
                            <div className="lead me-2">{capitaliseFirstLetter(gender)}</div>
                        </div>
                    </div>    
                    <Ecg id={id} />
                </div>
                <Readings id={id} />
            </div>
            <Controls id={id} />
        </div>
    );

}