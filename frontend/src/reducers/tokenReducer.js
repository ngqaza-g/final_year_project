const tokenReducer = (state = null, action)=>{
    switch(action.type){
        case 'SET_TOKEN':
            state = action.payload;
            return state;
        case 'RESET_TOKEN':
            state = null;
            return state;
        
        default:
            return state;
    }
}

export default tokenReducer;