const patientsReducer = (state = [], action)=>{
    switch(action.type){
        case 'SET_PATIENTS':
            state = action.payload;
            return state;
            
        case 'ADMIT':
            state = [action.payload, ...state];
            return state;

        case 'DISCHARGE':
            state = state.filter(patient => (
                patient._id !== action.payload
            ));
            return state;

        case 'RESET_PATIENTS':
            state = {};
            return state;
        default:
            return state;
    }
}

export default patientsReducer;