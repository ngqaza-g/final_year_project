const tokenChechedReducer = (state = false, action)=>{

    switch(action.type){
        case 'CHECKED' : 
            state = true;
            return state;
        
        default: 
            return state;
    }

}

export default tokenChechedReducer;