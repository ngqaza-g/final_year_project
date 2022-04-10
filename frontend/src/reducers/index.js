import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import tokenCheckedReducer from './tokenCheckedReducer';
import patientsReducer from './patientsReducer';
import userReducer from './userReducer';
import reportReducer from './reportReducer';
import vitalsReducer from './vitalsReducer';
import ecgTempReducer from './ecgTempReducer';

const allReducers = combineReducers({
    user : userReducer,
    token : tokenReducer,
    tokenChecked : tokenCheckedReducer,
    patients : patientsReducer,
    reports : reportReducer,
    vitals : vitalsReducer,
    ecg_temp: ecgTempReducer,
});

export default allReducers;