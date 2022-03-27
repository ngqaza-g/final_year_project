import React, { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';
import './Login.css';
import logo from './logo.png';
import Loading from '../Loading/Loading';
import updateForm from "../Dashboard/components/Form_componets/updateForm";
import sendForm from "../Dashboard/components/Form_componets/sendForm";
import toast, { Toaster } from "react-hot-toast";

const Login = ({ setLoginToken, setUser })=>{

    const [loading, setLoading] = useState(false);

    const [credentials, setCredentials] = useState({});

    const navigate = useNavigate();
    const cookie = new Cookies(); 

    const onChange = (event)=>{
        const {name, value} = event.target;
        updateForm(name,value, setCredentials);
    }

    const authenticate = async (credentials, destination)=>{
        try{
            const { status, data } = await sendForm('http://localhost:5000/login', credentials, setCredentials, setLoading);

            if(status === 200){
                const {login_token, user} = data;
                cookie.set('login_token', login_token ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 7))});
                cookie.set('login_token_', "1" ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 2))});
                setLoginToken(login_token);
                setUser(user);
                navigate(destination);
            }
        }catch(error){
            setLoading(false);
            toast.error("An Error Occured Conneting to the Server");
        }

    }



    const onSubmit = (e)=>{
        e.preventDefault();
        authenticate(credentials, '/dashboard');
    }

    if(!loading){
        return (
            <div>
            <Toaster />
            <div className="container login-container">
            <div className="header mt-5">
                <h2 className="text-primary">Bulawayo General Hospital</h2>
                <h3>Enter your credentials to log in</h3>
                <div className="icon">
                    <img src={logo} alt="logo"/>
                </div>
                    
                <form onSubmit={onSubmit} className="form">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input required onChange={onChange} className="form-control" type="text" id="username" name="username" placeholder="Username.." />
                        </div>
        
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input required onChange={onChange} className="form-control" type="password" id="password" name="password" placeholder="Password.." />
                        </div>
                        <input className="login-btn btn btn-primary btn-block mt-2" type="submit" name="login" value="Login"/>
                </form>
            </div>
        </div>
    
            <div className="footer">
                <p id="copyright">Copyright &copy; {(new Date()).getFullYear()}</p>
            </div>
        
        </div>
        );
    }else{
        return <Loading />
    }
}

export default Login;