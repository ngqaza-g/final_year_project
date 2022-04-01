import React from 'react'
import Accordion from '../../../components/Accordion/Accordion';
import generateReports from './generateReports';
import { useSelector } from 'react-redux';

export default function View({patient_id, type}){
    let [ reports ] = useSelector(state => state.reports.filter(report => report.patient_id === patient_id));
    if(reports){
        reports = reports[type];
        reports = generateReports(reports, type);
    }else{
        reports = [];
    }


    return reports.length > 0 ? (
        <Accordion
            id={`_${patient_id}`}
            items={reports}
        />
    ) : (
        <h6>No Documents Found</h6>
    );


}
