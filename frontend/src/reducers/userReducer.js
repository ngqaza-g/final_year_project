const userReducer = (state = {}, action)=>{
    switch(action.type){
        case 'SET_USER':
            state = action.payload;
            return state;
        case 'RESET_USER':
            state = {};
            return state;
        default:
            return state;
    }
}

export default userReducer;