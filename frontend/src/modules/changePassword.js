import Cookies from 'universal-cookie';
import sendForm from "./sendForm";
import logout from "./logout";

const changePassword = async(passwords, setPasswords, setLoading, navigate, dispatch) =>{
    try{
        const cookies = new Cookies();
        const token = cookies.get('login_token');
        if((passwords.current_password !== passwords.new_password) && (passwords.new_password === passwords.repeat_new_password)){
                const { status } = await sendForm('http://localhost:5000/change_password', {token: token, ...passwords}, setPasswords, setLoading);
                const close_btn = document.querySelector('.btn-close');
                console.log(close_btn);
                close_btn.click();
                if(status === 200){
                    logout(navigate, dispatch);
                }
        }
    }catch{
        console.log("An Error occured");
    }
}

export default changePassword;