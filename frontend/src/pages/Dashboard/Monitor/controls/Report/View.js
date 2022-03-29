import React, { useEffect, useState } from 'react'
import generateReports from './generateReports';
import Accordion from '../../../components/Accordion/Accordion';
import sendForm from '../../../components/Form_componets/sendForm';
import loadReports from './loadReports';

export default function View({patient_id, type}){
    const [reports, setReports] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        loadReports(type, patient_id, setLoading, setReports);
    }, []);

    if(loading){
      return <h5>Loading....</h5>
     
    }else{
        if(reports){
            return(
                <Accordion
                    id={`_${patient_id}`}
                    items={reports}
                />
            )

        }else{
            return <h6>Nothing</h6>
        }

    }
}
