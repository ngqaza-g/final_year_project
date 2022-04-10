const vitalsReducer = (state = {}, action)=>{
    switch(action.type){
        case 'SET_VITALS':
            state = action.payload
            return state;
        case 'RESET_VITALS':
            state = {};
            return state;
        default:
            return state;
    }
}


export default vitalsReducer;