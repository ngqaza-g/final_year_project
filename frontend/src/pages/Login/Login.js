import React, { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';
import './Login.css';
import logo from './logo.png';

const Login = ({ setLoginToken, setUser })=>{

    const [credentials, setCredentials] = useState({
        username : "",
        password : ""
    });

    const navigate = useNavigate();
    const cookie = new Cookies(); 

    const onChange = (event)=>{
        const {name, value} = event.target;
        setCredentials(prev => {
            if (name === "username"){
                return {
                    username : value,
                    password : prev.password
                }
            }else{
                return {
                    username : prev.username,
                    password : value
                }
            }
        })
    }

    const authenticate = (credentials, destination)=>{
        navigate('/loading')
        fetch('http://localhost:5000/login', {
            headers:{
                "Content-Type" : "application/json"
            },
            method : "POST",
            body : JSON.stringify(credentials)
        })
        .then(res => {
            if(res.status === 200){
                return res.json();
            }else{
                navigate('/');
            }
            })
        .then(data => {
            if(data){
                const {login_token, user} = data;
                if(login_token){
                    cookie.set('login_token', login_token ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 5))});
                    setLoginToken(login_token);
                    setUser(user);
                    navigate(destination);
                }
            }
        });
    }

    const onClick = ()=>{
        authenticate(credentials, '/dashboard');
    }
    return (
        <div>
        <div className="container login-container">
        <div className="header mt-5">
            <h2 className="text-primary">Bulawayo General Hospital</h2>
            <h3>Enter your credentials to log in</h3>
            <div className="icon">
                <img src={logo} alt="logo"/>
            </div>
            <div className="form">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input required onChange={onChange} className="form-control" type="text" id="username" name="username" placeholder="Username.." />
                    </div>
    
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input required onChange={onChange} className="form-control" type="password" id="password" name="password" placeholder="Password.." />
                    </div>
                    <input onClick={onClick} className="login-btn btn btn-primary btn-block mt-2" type="button" name="login" value="Login"/>
            </div>
        </div>
    </div>

    <div className="footer">
        <p id="copyright">Copyright &copy; {(new Date()).getFullYear()}</p>
    </div>

    </div>
    );
}

export default Login;