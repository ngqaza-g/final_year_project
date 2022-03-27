import React, {useState, useEffect} from 'react';
import RadioInput from './components/Admit_components/RadioInput';
import TextareaInput from './components/Admit_components/TextareaInput';
import TextInput from './components/Admit_components/TextInput';
import SelectInput from './components/Admit_components/SelectInput';
import post from '../../modules/post';

export default function Admit(){
  const [message, setMessage] = useState({msg: "", type:""});
  const [bunner, setBunner] = useState({
    active : false,
    msg : "",
    type: "" 
});

  const [form, setForm] = useState({
    name : "",
    national_id : "",
    address: "",
    phone_number: "",
    gender: "",

    next_of_kin: {
      name : "",
      address: "",
      national_id: "",
      phone_number: ""
    }, 

    case_description: {
      bp: "",
      spo2: "",
      temp: "",
      case_description: ""
    },

    care_givers: {
      doctor: "",
      day_nurse: "",
      night_nurse: ""
    }

  });

  const [healthCareWorkers, setHealthCareWorks] = useState({
    doctors : [],
    day_nurses : [],
    night_nurses: []
  });

  const displayMsg = (msg, type)=>{
    setBunner(prev=>{
        return {
            active: true,
            msg: msg,
            type: type 
        }
    });

    setTimeout(()=>{
        setBunner(prev=>{
            return {
                active: false,
                msg: "",
                type:"" 
            }
        });
    }, 5000);
}

  const submit = async (e)=>{
    e.preventDefault();
    const {status, data} = await post('http://localhost:5000/patients/admit', form);
    if(status === 200){
      console.log("success");
      console.log(data);
      displayMsg(data.msg, "success");
    }else{
      console.log("An error occured");
      displayMsg(data.msg, "danger");
      console.log(data);
    }
    setForm(prev=>{
      const form = {...prev}
      for(const key in form){
        if(typeof(form[key]) === "object"){
          for(const key_ in form[key]){
            form[key][key_] = ""
          }
        }else{
          form[key] = "";
        }
      }

      return form;
    });
  }

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

  const onChange = (e)=>{
    const {name, value}  = e.target;

    setForm(prev=>{
      const new_form = {...prev};
      const name_split = name.split('.');

      if(name_split.length < 2){
        new_form[name] = value;
      }else{
        const [object_name, value_name] = name_split; 
        new_form[object_name][value_name] = value;
      }

      return new_form;
    });
  }

  useEffect(()=>{
    getHealthCareWorks();
  }, []);


  return(
    <form onSubmit={submit} className="container-fluid">
    <div className="h1 text-center">Admit Patient</div>
    <div className="form">
    {bunner.active ? <div className={`alert text-center alert-${bunner.type}`}>{bunner.msg}</div> : ""}
    <div className="h4 mb-2">Patient Information</div>
    <TextInput label="Name:" name ="name" onChange={onChange} value={form.name} />
    
    <TextInput label="National ID:" name ="national_id" onChange={onChange} value={form.national_id} />
      
    <TextInput label="Adress" name ="address" onChange={onChange} value={form.address} />

    <TextInput label="Phone Number:" name ="phone_number" onChange={onChange} value={form.phone_number} />

    <RadioInput onClick={onChange} value={form.gender}/>
    <div className="h4">Emergency Contact</div>

    <TextInput label="Name:" name ="next_of_kin.name" onChange={onChange} value={form.next_of_kin.name} />
    
    <TextInput label="National ID:" name ="next_of_kin.national_id" onChange={onChange} value={form.next_of_kin.national_id} />
      
    <TextInput label="Adress" name ="next_of_kin.address" onChange={onChange} value={form.next_of_kin.address} />

    <TextInput label="Phone Number:" name ="next_of_kin.phone_number" onChange={onChange} value={form.next_of_kin.phone_number} />
      
      <div className="h4">Case Description</div>
      
      <TextInput label="Blood Pressure:" name ="case_description.bp" onChange={onChange} value={form.case_description.bp} />
      
      <TextInput label="SPO2" name ="case_description.spo2" onChange={onChange} value={form.case_description.spo2} />
  
      <TextInput label="Temperature:" name ="case_description.temp" onChange={onChange} value={form.case_description.temp} />
      
      <TextareaInput 
        label="Case Description" 
        name="case_description.case_description" 
        rows = "4" 
        onChange={onChange} 
        value={form.case_description.case_description}
        />

      <div className="h4 my-3">Care Givers</div>
          <div className="d-sm-flex justify-content-between">
              <SelectInput key="doctor" label = "Doctor: " name="care_givers.doctor" value={form.care_givers.doctor} personnel = {healthCareWorkers.doctors} onChange={onChange}/>
              <SelectInput key="day_nurse" label = "Day Nurse: " name="care_givers.day_nurse" value={form.care_givers.day_nurse} personnel = {healthCareWorkers.day_nurses} onChange={onChange}/>
              <SelectInput key="night_nurse" label = "Night Nurse: " name="care_givers.night_nurse" value={form.care_givers.night_nurse} personnel = {healthCareWorkers.day_nurses} onChange={onChange}/>
          </div> 
      </div>
        <div className="mb-3">
          <button className="btn btn-success" type="submit">Submit</button>
        </div>
</form>
    );
}