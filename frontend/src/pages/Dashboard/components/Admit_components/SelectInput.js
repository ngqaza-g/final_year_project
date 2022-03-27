import React, { useEffect } from 'react';


export default function SelectInput({label, value, name, personnel, onChange}){
    // useEffect(()=>{
    //   if(value === ""){
    //     document.querySelector(`select[name="${name}"]`).value = "-1";
    //   }
    // },[value]);
    return (
        <div className="mb-3">
        <label className="form-label">{label}</label>
        <select name={name} class="form-select" onChange={onChange} value={value} required>
            <option value="">--SELECT--</option>
            {
              personnel.map(personnel=>(
                <option key={personnel.id} value={personnel.id}>{personnel.name}</option>
              ))
            }
        </select>
    </div>
    );
}