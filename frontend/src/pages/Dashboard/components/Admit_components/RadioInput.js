import React, {useEffect} from 'react';

export default function RadioInput({onClick, value}){
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
      <label className="form-label">Gender: </label>
        <div className="form-check mb-1">
            <input required type="radio" onClick={onClick} className="form-check-input" value="male" name="gender" id="male"/>
            <label className="form-check-label">Male</label>
        </div>
          
        <div className="form-check mb-1">
            <input type="radio" onClick={onClick} className="form-check-input" value="female" name="gender" id="female"/>
            <label className="form-check-label">Female</label>
        </div>
          
        <div className="form-check mb-1">
            <input type="radio" onClick={onClick} className="form-check-input" value="other" name="gender" id="other"/>
            <label className="form-check-label" checked>Other</label>
        </div>
    </div>
    );
}