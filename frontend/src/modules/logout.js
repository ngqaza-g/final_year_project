import Cookies from 'universal-cookie';
import {reset_token, reset_user, reset_patients, reset_reports} from '../actions';
import sendForm from './sendForm';

const logout = async (navigate, dispatch)=>{
    const cookie = new Cookies();      
    const token = cookie.get('login_token');
    const {status} = await sendForm('http://localhost:5000/logout', {token : token});
    if(status === 200){
        cookie.remove('login_token'); // Remove the cookie
        dispatch(reset_token()); // set the login token to undefined (deleting it))
        dispatch(reset_user()); // set the user to undefined
        dispatch(reset_patients()); 
        dispatch(reset_reports());
        navigate('/'); // Navigate to the login page

    }
}

export default logout