import React, { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';
import './Login.css';
import logo from './logo.png';
import Loading from '../Loading/Loading';

const Login = ({ setLoginToken, setUser })=>{

    const [loading, setLoading] = useState(false);

    const [bunner, setBunner] = useState({state: false, msg: ""});

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

    const displayMessage = (msg)=>{
        setBunner(prev=>{
            return {
                state : true,
                msg : msg
            }
        });
        setTimeout(()=>{

            setBunner(prev=>{
                return {
                    state : false,
                    masg: ""
                }
            })
        },5000);
    }

    const authenticate = async (credentials, destination)=>{
        try{
            setLoading(true);
            const response = await fetch('http://localhost:5000/login', {
                 headers:{
                     "Content-Type" : "application/json"
                 },
                 method : "POST",
                 body : JSON.stringify(credentials)
             });
     
             if(response.status === 200){
                 const data = await response.json();
                 if(data){
                     const {login_token, user} = data;
                     if(login_token){
                         cookie.set('login_token', login_token ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 7))});
                         cookie.set('login_token_', "1" ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 60 * 24 * 2))});
                         setLoginToken(login_token);
                         setUser(user);
                         navigate(destination);
                     }
                 }
             }else{
                 try{
                     const data = await response.json();
                     console.log(data);
                     setLoading(false);
                     displayMessage(data.msg);
                 }catch(error){
                     setLoading(false);
                     displayMessage("An Error Ocuured");
                 }
            }
        }catch(error){
            setLoading(false);
            displayMessage("An Error Occured Connecting to the server");
        }

    }



    const onSubmit = (e)=>{
        e.preventDefault();
        authenticate(credentials, '/dashboard');
    }

    if(!loading){
        return (
            <div>
            <div className="container login-container">
            <div className="header mt-5">
                <h2 className="text-primary">Bulawayo General Hospital</h2>
                <h3>Enter your credentials to log in</h3>
                <div className="icon">
                    <img src={logo} alt="logo"/>
                </div>
    
                {bunner.state ? <div className="alert alert-danger">{bunner.msg}</div> : null}
    
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