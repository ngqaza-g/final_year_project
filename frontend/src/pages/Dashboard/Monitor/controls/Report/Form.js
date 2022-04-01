import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../../components/Modal/Modal';
import Edit from './Edit';
import View from './View';

export default function Form({id, type}){
    const [view, setView] = useState(false);
    const [save, setSave] = useState(true);
    const [form_id, setForm_id] = useState('');       
    
    const role = useSelector(state => state.user.role);
    const [patient] = useSelector(state => state.patients.filter(patient => patient._id === id));
    const { name } = patient;
    const titles = {
        "nursing" : `Nursing Report for ${name}`,
        "treatment" : `Treatment Plan for ${name}`,
        "discharge" : `Discharge Therapy for ${name}`
    }

    const view_type = {
        "nursing" : "nursing_reports",
        "treatment" : "treatments"
    }
    const title = titles[type];
    const modal_id = `${type}-modal-${id}`;

    let body = view ? <View patient_id={id} type={view_type[type]}/> : (
    <Edit 
        patient_id={id} 
        type={type} 
        form_id={form_id} 
        setForm_id = {setForm_id}
    />
    )

    const toggleView = ()=>{
        setView(prev=> !prev);
    }

    useEffect(()=>{
        if(type !== "treatment"){
            setSave(!(role.toLowerCase() === "doctor"));

            if((type === "discharge") && (role.toLowerCase() === "doctor")){
                setView(false);
            }else{
                setView((role.toLowerCase() === "doctor"));
            }
        }else{
            setSave((role.toLowerCase() === "doctor"));
            setView(!(role.toLowerCase() === "doctor"));
        }
    }, []);

    return (
        <Modal
            id = {modal_id} 
            title = {title}
            body = {body}
            save = {save}
            form_id = {form_id}
            view = {view}
            toggleView = {toggleView}
            isDischarge = {type === "discharge"}
        />
    );
}