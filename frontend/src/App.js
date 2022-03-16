import React, {useEffect, useState } from 'react';
import { Route, Routes, Navigate, } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Login from './pages/Login/Login';
import Loading from './pages/Loading/Loading';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';

const App = ()=>{
    const cookie = new Cookies(); 
    const [user, setUser] = useState(undefined);
    const [login_token, setLoginToken] = useState(undefined);
    const [setToken, setSetToken] = useState(false); 

    const validate_token = async ()=>{
        let login_token = cookie.get('login_token');
            
        if((cookie.get('login_token') !== undefined)){

            try{
                const response = await fetch('http://localhost:5000/', {
                                    headers:{
                                        "Content-Type" : "application/json"
                                    },
                                    method : "POST",
                                    body : JSON.stringify({
                                        token : login_token
                                    })
                            });

                if(response.status === 200){
                    try{
                        const data = await response.json();
                        const {user} = data;
                        setLoginToken(login_token);
                        setUser(user);
                    }catch(error){
                        console.log("An error occured with the returned data");
                    }
                }else{
                    console.log(response.status);
                    console.log("Invalid Token");
                }
            }catch(error){
                console.log("An Error occured connecting to server");
            }
        }
        setSetToken(true);
    }

    useEffect(validate_token, []);

    if(!setToken){
        return <Loading />
    }else{
        return(
            <Routes>
                {!login_token && (
                    <>
                        <Route exact path="/" element={<Login setLoginToken = {setLoginToken} setUser = {setUser}  />} />
                    </>
                )}
                        
    
                {login_token && (
                    <>
                        <Route path="/dashboard" element={<Dashboard setLoginToken = {setLoginToken} setUser = {setUser} user = {user}/>} />
                    </>
                )
                }
                <Route path="*" element={<Navigate to={login_token ? "/dashboard" : "/"}/>}/>
            </Routes>
        )
    }
}

export default App;
