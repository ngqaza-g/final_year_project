import React from 'react';
import Monitor from './Monitor/Monitor';
import { useSelector } from 'react-redux';

export default function Display(){
    const patients = useSelector(state => state.patients);

    return (
        
         patients.length > 0 ? (<div className="row">
                        {
                            patients.map(patient=>(
                                <Monitor 
                                    id={patient._id} 
                                />
                            ))
                        }
                     </div>) :(
                         <h1>No Patients</h1>
                     )
    );
}