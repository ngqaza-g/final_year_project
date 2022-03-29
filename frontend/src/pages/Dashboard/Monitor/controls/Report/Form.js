import React, {useState, useEffect} from 'react';
import Modal from '../../../components/Modal/Modal';
import Edit from './Edit';
import View from './View';

export default function Form({id, name, role, user_id, type}){
    const [view, setView] = useState(false);
    const [save, setSave] = useState(true);
    const [form_id, setForm_id] = useState('');       
    

    const titles = {
        "nursing" : `Nursing Report for ${name}`,
        "treatment" : `Treatment Plan for ${name}`,
        "discharge" : `Discharge Therapy for ${name}`
    }

    const title = titles[type];
    const modal_id = `${type}-modal-${id}`;
    let body = view ? <View patient_id={id} type={type}/> : (
    <Edit 
        author={user_id} 
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
        setSave(!(role.toLowerCase() === "doctor"));
        setView((role.toLowerCase() === "doctor"));
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