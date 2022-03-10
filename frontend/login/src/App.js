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


    useEffect(()=>{

            let login_token = cookie.get('login_token');
            
            if((cookie.get('login_token') !== undefined)){
                
                fetch('http://localhost:5000/', {
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    method : "POST",
                    body : JSON.stringify({
                        token : login_token
                    })
                }).then(res =>{
                    if(res.status === 200) return res.json()
                    setSetToken(true);
                })
                .then(data =>{
                    console.log(data);
                    const {user} = data;
                    setLoginToken(login_token);
                    setUser(user);
                    setSetToken(true);
                }).catch(()=> {
                    console.log("An error occured");
                    setSetToken(true);
                })
            }else{
                // setLoginToken(undefined);
                setSetToken(true);
            }
        }, []);

    
    if(!setToken){
        return <Loading />
    }else{
        return(
            <Routes>
                {!login_token && (
                    <>
                        <Route exact path="/" element={<Login setLoginToken = {setLoginToken} setUser = {setUser}  />} />
                        <Route path="/loading" element={<Loading />} />
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
