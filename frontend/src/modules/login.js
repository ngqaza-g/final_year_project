import Cookies from 'universal-cookie';
import { set_token, set_user, set_patients, set_reports } from '../actions';
import sendForm from './sendForm';

const login = async (credentials, setCredentials, setLoading, navigate, dispatch)=>{
    const cookie = new Cookies(); 

    const { status, data } = await sendForm('http://localhost:5000/login', credentials, setCredentials, setLoading);

    if(status === 200){
        const {login_token, user, patients, reports} = data;
        cookie.set('login_token', login_token ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 7))});
        cookie.set('login_token_', "1" ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 2))});
        dispatch(set_token(login_token));
        dispatch(set_user(user));
        dispatch(set_patients(patients));
        dispatch(set_reports(reports))
        navigate('/dashboard');
    }

}

export default login;