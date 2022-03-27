import React, {useEffect} from 'react';

export default function TextareaInput({label, name, rows, onChange, value}){
    return(
        <div className="mb-3">
            <label  className="form-label">{label}</label>
            <textarea className="form-control" rows={rows} name={name} value={value} onChange={onChange} required></textarea>
        </div>
    )
}