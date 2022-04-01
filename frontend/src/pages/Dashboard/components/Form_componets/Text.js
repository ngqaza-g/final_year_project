import React from 'react';


export default function Text({ label, name, onChange, value, type="text"}){
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="form-control" 
                type = {type}
                required
            />
        </div>
    );
}