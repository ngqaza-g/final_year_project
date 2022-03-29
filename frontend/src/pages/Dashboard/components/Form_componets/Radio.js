import React, {useEffect} from 'react';

export default function RadioInput({onClick, value, options, label, name}){
    useEffect(()=>{
        if(value === ""){
            const radio = document.querySelector('input[name="gender"]:checked');
            if(radio !== null){
                radio.checked = false;
            }
        }
    }, [value]);
    return (
    <div className="mb-3 d-flex justify-content-between">
      <label className="form-label">{`${label}: `} </label>
      
      {
          options.map(option=>(
            <div className="form-check mb-1">
                <input 
                    required 
                    type="radio" 
                    className="form-check-input" 
                    onClick={onClick} 
                    value={option} 
                    name={name}
                    key={name} 
                    />
                <label className="form-check-label">{`${capitaliseFirstLetter(name)}`}</label>
            </div>
          ))
      }
 
    </div>
    );
}