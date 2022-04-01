import Cookies from 'universal-cookie';
import { set_user, set_token, token_checked, set_patients, set_reports } from '../actions';
import sendForm from './sendForm';

const validateToken = async (dispatch)=>{
    const cookie = new Cookies(); 
    let login_token = cookie.get('login_token');
    let login_token_ = cookie.get('login_token_');
    
    if((cookie.get('login_token') !== undefined)){

            const request = (login_token_ === undefined) ? 'http://localhost:5000/renew_token' : 'http://localhost:5000/';
            const { status, data } = await sendForm(request, {token : login_token});

            if(status === 200){
                
                    if(login_token_ === undefined){
                        const { token } = data;
                        console.log(data);
                        login_token = token;
                        cookie.set('login_token', token ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 7))});
                        cookie.set('login_token_', "1" ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 2))});
                    }

                    const {user, patients, reports} = data;
                    dispatch(set_token(login_token));
                    dispatch(set_user(user));
                    dispatch(set_patients(patients));
                    dispatch(set_reports(reports));
            }
    }
        
    dispatch(token_checked());
}

export default validateToken;