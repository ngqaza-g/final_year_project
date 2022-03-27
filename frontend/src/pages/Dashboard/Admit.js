import React, {useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import RadioInput from './components/Admit_components/RadioInput';
import TextareaInput from './components/Admit_components/TextareaInput';
import TextInput from './components/Admit_components/TextInput';
import SelectInput from './components/Admit_components/SelectInput';
import sendForm from './components/Form_componets/sendForm';
import updateForm from './components/Form_componets/updateForm';

export default function Admit(){
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({});

  const [healthCareWorkers, setHealthCareWorks] = useState({
    doctors : [],
    day_nurses : [],
    night_nurses: []
  });

  const getHealthCareWorks = async ()=>{
    const response = await fetch('http://localhost:5000/patients/get_health_care_workers');
    const data = await response.json();
    if(response.status === 200){
      const {day_nurses, night_nurses, doctors} = data;
      setHealthCareWorks({
        doctors : doctors,
        day_nurses : day_nurses,
        night_nurses: night_nurses
      });
    }
  }

  const submit = async (e)=>{
    e.preventDefault();
    sendForm('http://localhost:5000/patients/admit', form, setForm, setLoading);
  }

  const onChange = (e)=>{
    const {name, value}  = e.target;
    updateForm(name, value, setForm);
  }

  useEffect(()=>{
    getHealthCareWorks();
  }, []);


  return(
    <form onSubmit={submit} className="container-fluid">
    <ToastContainer />
    <div className="h1 text-center">Admit Patient</div>
    <div className="form">
    <div className="h4 mb-2">Patient Information</div>
    <TextInput 
        label="Name:" 
        name ="name" 
        onChange={onChange} 
        value={form.name} 
    />
    
    <TextInput 
        label="National ID:" 
        name ="national_id" 
        onChange={onChange} 
        value={form.national_id} 
    />
      
    <TextInput 
        label="Adress" 
        name ="address" 
        onChange={onChange} 
        value={form.address} 
    />

    <TextInput 
        label="Phone Number:" 
        name ="phone_number" 
        onChange={onChange} 
        value={form.phone_number} 
    />

    <RadioInput 
        onClick={onChange} 
        value={form.gender}
    />
    <div className="h4">Emergency Contact</div>

    <TextInput 
        label="Name:" 
        name ="next_of_kin.name" 
        onChange={onChange} 
        value={!form.next_of_kin ? "" : form.next_of_kin.name} 
    />
    
    <TextInput 
        label="National ID:" 
        name ="next_of_kin.national_id" 
        onChange={onChange} 
        value={!form.next_of_kin ? "" : form.next_of_kin.national_id} 
    />
      
    <TextInput 
        label="Adress" 
        name ="next_of_kin.address" 
        onChange={onChange} 
        value={!form.next_of_kin ? "" : form.next_of_kin.address} 
    />

    <TextInput 
        label="Phone Number:" 
        name ="next_of_kin.phone_number" 
        onChange={onChange} 
        value={!form.next_of_kin ? "" : form.next_of_kin.phone_number}
    />
      
      <div className="h4">Case Description</div>
      
      <TextInput 
          label="Blood Pressure:" 
          name ="case_description.bp" 
          onChange={onChange} 
          value={!form.case_description ? "" : form.case_description.bp} 
      />
      
      <TextInput 
          label="SPO2" 
          name ="case_description.spo2" 
          onChange={onChange} 
          value={!form.case_description ? "" : form.case_description.spo2} 
      />
  
      <TextInput 
          label="Temperature:" 
          name ="case_description.temp" 
          onChange={onChange} 
          value={!form.case_description ? "" : form.case_description.temp} 
          
      />
      
      <TextareaInput 
          label="Case Description" 
          name="case_description.case_description" 
          rows = "4" 
          onChange={onChange} 
          value={!form.case_description ? "" : form.case_description.case_description}
        />

      <div className="h4 my-3">Care Givers</div>
          <div className="d-sm-flex justify-content-between">
              <SelectInput 
                  key="doctor" 
                  label = "Doctor: " 
                  name="care_givers.doctor" 
                  value={!form.care_givers ? "" : form.care_givers.doctor} 
                  personnel = {healthCareWorkers.doctors}
                  onChange={onChange}
                  
                />

              <SelectInput 
                  key="day_nurse" 
                  label = "Day Nurse: " 
                  name="care_givers.day_nurse" 
                  value={!form.care_givers ? "" : form.care_givers.day_nurse} 
                  personnel = {healthCareWorkers.day_nurses} 
                  onChange={onChange}
                  
              />

              <SelectInput 
                  key="night_nurse" 
                  label = "Night Nurse: " 
                  name="care_givers.night_nurse" 
                  value={!form.care_givers ? "" : form.care_givers.night_nurse} 
                  personnel = {healthCareWorkers.day_nurses} 
                  onChange={onChange}    
              />
          </div> 
      </div>
        <div className="mb-3">
          <button className="btn btn-success" type="submit" disabled={loading}>Submit</button>
        </div>
</form>
    );
}