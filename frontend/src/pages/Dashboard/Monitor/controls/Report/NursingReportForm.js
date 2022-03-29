import React from 'react';
import Text from '../../../components/Form_componets/Text';
import Textarea from '../../../components/Form_componets/Textarea';

export default function NursingReportForm({id, onChange, submit, form}){
    
    return(
        <form id={id} onSubmit={submit}>
            <Text 
                label="Blood Pressure:"
                name="bp"
                onChange={onChange}
                value= {!form ? "" : form.bp}
            />
            <div className="h6 mb-3">Nursing Care Plan:</div>
            <div className="form-text mb-3">
                <h6>Documentation Guideline</h6>
                <p>Patient Assesment</p>
                <p>Nursing Diagnosis</p>
                <p>Nursing Care Plan</p>
                <p>Implementation & Evaluation</p>
            </div>
            <Textarea 
                label =""
                name ="nursing_care_plan"
                rows ="5"
                value = {!form ? "" : form.nursing_care_plan}
                onChange={onChange}
            />

            <Textarea 
                label ="Enter Report: "
                name ="nursing_report"
                rows ="5"
                value = {!form ? "" : form.nursing_report}
                onChange={onChange}
            />
        </form>
    )
}