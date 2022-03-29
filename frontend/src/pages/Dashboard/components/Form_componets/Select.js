import React from 'react';


export default function Select({label, value, name, options, onChange}){
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <select name={name} class="form-select" onChange={onChange} value={value} required>
                <option value="">--SELECT--</option>
                {
                options.map(option=>(
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))
                }
            </select>
    </div>
    );
}