const reportReducer = (state = [], action)=>{
    switch(action.type){
        case 'SET_REPORTS':
            state = action.payload;
            return state;

        case 'UPDATE_REPORTS':
            state = [...(
                state.filter(report => (
                    report.patient_id !== action.payload.patient_id
                ))
            ), action.payload]
            return state
        case 'RESET_REPORTS':
            state = [];
            return state;
        default:
            return state;
    }
}

export default reportReducer;