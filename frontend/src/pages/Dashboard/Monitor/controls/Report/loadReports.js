import generateReports from "./generateReports";
import sendForm from '../../../../../modules/sendForm';

export default async function loadReports(type, patient_id, setLoading, setReports){

    let request = "";
    if(type === "nursing") request = "get_reports";
    if(type === "treatment") request = "get_treatments";

    const {status, data} = await sendForm(`http://localhost:5000/patients/${request}`, 
        {patient_id : patient_id},
        null,
        setLoading,
        false
    );
    
    if(status === 200){
        setReports(generateReports(data.reports, type));
    }
}