import generateReports from "./generateReports";
import sendForm from '../../../components/Form_componets/sendForm';

export default async function loadReports(type, patient_id, setLoading, setReports){

    let request = "";
    if(type === "nursing") request = "get_reports";
    if(type === "treatment") request = "get_treatment";

    const {status, data} = await sendForm(`http://localhost:5000/patients/${request}`, 
        {patient_id : patient_id},
        null,
        setLoading,
        false
    );

    console.log(data);
    if(status === 200){
        setReports(generateReports(data.reports, type));
    }
}