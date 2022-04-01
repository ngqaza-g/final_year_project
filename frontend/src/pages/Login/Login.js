import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Login.css';
import logo from './logo.png';
import Loading from '../Loading/Loading';
import updateForm from "../../modules/updateForm";
import login from "../../modules/login";
import { useDispatch } from "react-redux";


const Login = ()=>{

    const [loading, setLoading] = useState(false);

    const [credentials, setCredentials] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const cookie = new Cookies(); 

    const onChange = (event)=>{
        const {name, value} = event.target;
        updateForm(name, value, setCredentials);
    }

    // const authenticate = async (credentials, destination)=>{
    //     const { status, data } = await sendForm('http://localhost:5000/login', credentials, setCredentials, setLoading);

    //     if(status === 200){
    //         const {login_token, user} = data;
    //         cookie.set('login_token', login_token ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 7))});
    //         cookie.set('login_token_', "1" ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 2))});
    //         setLoginToken(login_token);
    //         setUser(user);
    //         navigate(destination);
    //     }

    // }



    const onSubmit = (e)=>{
        e.preventDefault();
        login(credentials, setCredentials, setLoading, navigate, dispatch);
        // authenticate(credentials, '/dashboard');
    }

    if(!loading){
        return (
            <div>
            {/* <Toaster /> */}
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