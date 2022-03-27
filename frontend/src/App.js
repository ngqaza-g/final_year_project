import React, {useEffect, useState } from 'react';
import { Route, Routes, Navigate, } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Login from './pages/Login/Login';
import Loading from './pages/Loading/Loading';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
import sendForm from './pages/Dashboard/components/Form_componets/sendForm';

const App = ()=>{
    const cookie = new Cookies(); 
    const [user, setUser] = useState(undefined);
    const [login_token, setLoginToken] = useState(undefined);
    const [setToken, setSetToken] = useState(false); 

    const validate_token = async ()=>{
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

                        const {user} = data;
                        setLoginToken(login_token);
                        setUser(user);
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
