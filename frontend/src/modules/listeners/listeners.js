import toast from 'react-hot-toast';
import socket from '../socket';
import { update_reports, discharge_patient, admit_patient } from '../../actions';

const listeners = (dispatch) =>{

    socket.on('reports', (reports)=>{
        dispatch(update_reports(reports));
    });

    socket.on('notification',(notification)=>{
        toast(notification,{
            duration : 4000,
            position: 'top-right',
            icon : '📩'
        });
    });

    socket.on('admit_patient', (patient)=>{
        dispatch(admit_patient(patient));
    })

    socket.on('discharge_patient', (patient)=>{
        dispatch(discharge_patient(patient));
    })

}

export default listeners;