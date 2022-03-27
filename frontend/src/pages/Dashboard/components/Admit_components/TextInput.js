import React from 'react';


export default function TextInput({ label, name, onChange, value}){
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input type="text" name = {name} value = {value} onChange={onChange} className="form-control" required/>
        </div>
    );
}