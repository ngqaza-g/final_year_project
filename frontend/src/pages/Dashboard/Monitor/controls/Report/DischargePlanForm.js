import React from 'react';
import Textarea from '../../../components/Form_componets/Textarea';

export default function DischargePlanForm({id, form, onChange, submit}){
    return(
        <form id={id} onSubmit={submit}>
            <Textarea 
                label="Discharge Therapy:"
                name="discharge_plan"
                rows="5"
                onChange={onChange}
                value= {form.discharge_plan}
            />
        </form>
    )
}