const ecgTempReducer = (state = {}, action)=>{
    switch(action.type){
        case 'SET_ECG_TEMP':
            state = action.payload
            return state;
        case 'RESET_ECG_TEMP':
            state = {};
            return state;
        default:
            return state;
    }
}


export default ecgTempReducer;