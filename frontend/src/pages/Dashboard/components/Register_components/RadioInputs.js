import React, { useEffect } from 'react';

export default function RadioInputs({onChange, value}){
    useEffect(()=>{
        if(value === ""){
            const radio = document.querySelector('input[name="role"]:checked');
            if(radio !== null){
                radio.checked = false;
            }
        }
    }, [value]);
    return (
    <div className="mb-3">
        <p className="lead">Position</p>

        <div className="form-check form-check-inline">
            <input className="form-check-input my-2" onClick={onChange} type="radio" value="admin" name="role" id="admin"  required/>
            <label className="form-label" >Admin</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input my-2" onClick={onChange} type="radio" value="doctor" name="role" id="doctor" />
            <label className="form-label" >Doctor</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input my-2" onClick={onChange} type="radio" value="nurse" name="role" id="nurse"/>
            <label className="form-label" >Nurse</label>
        </div>
    </div>
    );
}