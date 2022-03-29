import React from 'react';

export default function Textarea({label, name, rows, value, onChange }){
    return(
        <div className="mb-3">
            <label  className="form-label">{label}</label>
            <textarea className="form-control" rows={rows} name={name} value={value} onChange={onChange} required></textarea>
        </div>
    )
}