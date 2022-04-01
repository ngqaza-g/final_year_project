import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import tokenCheckedReducer from './tokenCheckedReducer';
import patientsReducer from './patientsReducer';
import userReducer from './userReducer';
import reportReducer from './reportReducer';

const allReducers = combineReducers({
    user : userReducer,
    token : tokenReducer,
    tokenChecked : tokenCheckedReducer,
    patients : patientsReducer,
    reports : reportReducer
});

export default allReducers;