import React, { useState } from 'react';
import sendForm from '../../modules/sendForm';
import updateForm from '../../modules/updateForm';
import RadioInputs from './components/Register_components/RadioInputs';

export default function Register(){
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const onChange = (e)=>{
        const {name, value} = e.target;
        updateForm(name, value, setForm);        
    }

    const submit = async (e)=>{
        e.preventDefault();
        sendForm('http://localhost:5000/register', form, setForm ,setLoading);
    }

        return <div>

        <form onSubmit={submit}>
            <div className="h5 text-center">Register New User</div>
            {/* {bunner.active ? <div className={`alert text-center alert-${bunner.type}`}>{bunner.msg}</div> : ""} */}
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input className="form-control" onChange={onChange} value={form.lastName} name="lastName"  required/>
            </div>

            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input className="form-control" onChange={onChange} value={form.firstName} name="firstName" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Username</label>
                <input className="form-control" onChange={onChange} value={form.username} name="username" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={onChange} value={form.email} name="email" required />
            </div>

            <RadioInputs onChange={onChange} value={form.role} />
            <div className="mb-3">
                <button type="submit" className="btn btn-success" disabled={loading}>Register</button>
            </div>

        </form>
    </div> 
}