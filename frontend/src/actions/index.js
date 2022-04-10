export const set_user = (user)=>{
    return {
        type : 'SET_USER',
        payload : user
    }
}

export const reset_user = ()=>{
    return {
        type : 'RESET_USER'
    }
}

export const set_token = (token)=>{
    return {
        type : 'SET_TOKEN',
        payload : token
    }
}



export const reset_token = ()=>{
    return {
        type : 'RESET_TOKEN'
    }
}

export const token_checked = ()=>{
    return {
        type : 'CHECKED'
    }
}

export const set_patients = (patients)=>{
    return {
        type : 'SET_PATIENTS',
        payload : patients
    }
}

export const admit_patient = (patient)=>{
    return {
        type : 'ADMIT',
        payload : patient
    }
}

export const discharge_patient = (patient)=>{
    return {
        type : 'DISCHARGE',
        payload : patient
    }
}

export const reset_patients = ()=>{
    return {
        type : 'RESET_PATIENTS'
    }
}

export const set_reports = (reports)=>{
    return {
        type: 'SET_REPORTS',
        payload: reports
    }
}

export const update_reports = (reports)=>{
    return {
        type: 'UPDATE_REPORTS',
        payload: reports
    }
}

export const reset_reports = ()=>{
    return {
        type: 'RESET_REPORTS',
    }
}

export const set_vitals = (vitals)=>{
    return {
        type: 'SET_VITALS',
        payload: vitals
    }
}

export const reset_vitals = ()=>{
    return {
        type: 'RESET_VITALS'
    }
}

export const set_ecg_temp = (payload)=>{
    return {
        type: 'SET_ECG_TEMP',
        payload: payload
    }
}

export const reset_ecg_temp = ()=>{
    return {
        type: 'RESET_ECG_TEMP'
    }
}