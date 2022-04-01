import React, {useState, useEffect} from 'react';
import updateForm from '../../../../../modules/updateForm'; 
import sendForm from '../../../../../modules/sendForm';
import NursingReportForm from './NursingReportForm';
import TreatmentPlanForm  from './TreatmentPlanForm';
import DischangePlanForm  from './DischargePlanForm';
import { useSelector } from 'react-redux';

export default function Edit({ type, form_id, setForm_id, patient_id}){
    
    const author = useSelector(state => state.user.id);
    const requests = {
        "nursing" : "report",
        "treatment" : "treatment",
        "discharge" : "discharge"
    }

    const [form, setForm] = useState({
        author : author,
        patient_id : patient_id
    });
    
    const onChange = (e)=>{
        const {name, value} = e.target;
        updateForm(name, value, setForm);
    }
    
    const submit = (e)=>{
        e.preventDefault();
        sendForm(`http://localhost:5000/patients/${requests[type]}`,form , setForm);
    }

    const forms = {
        "nursing" : <NursingReportForm 
                    id = {form_id}
                    form={form}
                    onChange = {onChange}
                    submit = {submit}
                />,


        "treatment": <TreatmentPlanForm 
                        id = {form_id}
                        form={form}
                        onChange = {onChange}
                        submit = {submit}
                    />,
        
        "discharge" : <DischangePlanForm 
                        id = {form_id}
                        form={form}
                        onChange = {onChange}
                        submit = {submit}
                    />
    }


    
    useEffect(()=>{
        setForm(prev =>{
            const new_form = {...prev}
            new_form.author = author;
            new_form.patient_id = patient_id;
       
            return new_form;
        });   
    }, [form.author]);

    return (
        <div>
            {setForm_id(`${type}-${patient_id}`)}
            {forms[type]}
        </div>
        );

        
}