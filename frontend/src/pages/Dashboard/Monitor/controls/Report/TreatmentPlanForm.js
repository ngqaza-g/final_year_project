import React from 'react';
import Textarea from '../../../components/Form_componets/Textarea';

export default function TreatmentPlanForm({id, form, onChange, submit}){
    return(
        <form id={id} onSubmit={submit}>
            <Textarea 
                label="Case History:"
                name="case_history"
                rows="5"
                onChange={onChange}
                value= {form.case_history}
            />

            <Textarea 
                label="Prescription:"
                name="prescription"
                rows="5"
                onChange={onChange}
                value= {form.prescription}
            />
        </form>
    )
}