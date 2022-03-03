import React, { useState } from "react";
// import { useNavigate } from "react-router";
import './Login.css';
import logo from './logo.png';

const Login = ({ authenticate })=>{
    const [credentials, setCredentials] = useState({
        username : "",
        password : ""
    });

    // const navigate = useNavigate();

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
                    <input onClick={onClick} className="login-btn btn btn-primary mt-2" type="button" name="login" value="Login"/>
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