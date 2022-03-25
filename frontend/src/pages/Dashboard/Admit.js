import React from 'react';

export default function Admit(){
    return(
          <div className="container-fluid">
    <div className="h1 text-center">Admit Patient</div>
    <div className="form">
       <div className="h4 mb-2">Patient Information</div>
      <div className="mb-3">
      <label for="name" className="form-label">Name: </label>
      <input type="text" className="form-control"/>
    </div>
    
    <div className="mb-3">
      <label for="name" className="form-label">National ID: </label>
      <input type="text" className="form-control"/>
    </div>
      
        <div className="mb-3">
      <label for="name" className="form-label">Address: </label>
      <input type="text" className="form-control"/>
    </div>
      
        <div className="mb-3">
      <label for="name" className="form-label">Phone Number: </label>
      <input type="text" className="form-control"/>
    </div>
        <div className="mb-3 d-flex justify-content-between">
      <label for="name" className="form-label">Gender: </label>
      <div className="form-check mb-1">
        <input type="radio" className="form-check-input" name="gender" id="male"/>
        <label for="male" className="form-check-label">Male</label>
      </div>
          
            <div className="form-check mb-1">
        <input type="radio" className="form-check-input" name="gender" id="female"/>
        <label for="female" className="form-check-label">Female</label>
      </div>
          
            <div className="form-check mb-1">
        <input type="radio" className="form-check-input" name="gender" id="other"/>
        <label for="other" className="form-check-label" checked>Other</label>
      </div>
    </div>
      <div className="h4">Emergency Contact</div>
      
          <div className="form">
      <div className="mb-3">
      <label for="name" className="form-label">Name: </label>
      <input type="text" className="form-control"/>
    </div>
      
                    <div className="mb-3">
      <label for="name" className="form-label">Address: </label>
      <input type="text" className="form-control"/>
    </div>
          
            <div className="mb-3">
      <label for="name" className="form-label">Phone Number: </label>
      <input type="text" className="form-control"/>
    </div>
      <div className="h4">Case Description</div>
      
             <div className="mb-3">
      <label for="" className="form-label">Blood Pressure: </label>
      <input type="text" className="form-control"/>
    </div>
      
      <div className="mb-3">
      <label for="" className="form-label">SPO2: </label>
      <input type="text" className="form-control"/>
    </div>
      
            <div className="mb-3">
      <label for="" className="form-label">Temperature: </label>
      <input type="text" className="form-control"/>
    </div>
      
      <div className="mb-3">
      <label for="" className="form-label">Case Description: </label>
        <textarea rows="4" className="form-control"> </textarea>
        
        <div className="h4 my-3">Care Givers</div>
        
            <div className="d-flex justify-content-between">
                <div className="mb-3">
                    <label for="" className="form-label">Doctor: </label>
                    <input type="text" className="form-control"/>
                </div>
                
                <div className="mb-3">
                    <label for="" className="form-label">Nurse: </label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</div>
    );
}