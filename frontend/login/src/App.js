import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';

const App = ()=>{
    const cookie = new Cookies(); 
    const [login_token, setLoginToken] = useState(undefined);
    const [user, setUser] = useState(undefined);

    useEffect(()=>{
        //    console.log((cookie.get('login_token') === undefined));
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
                }).then(res => res.json())
                .then(data =>{
                    console.log(data);
                    const {user} = data;
                    setLoginToken(login_token);
                    setUser(user);
                }).catch(()=> console.log("An error occured"))
            }
        }, []);

    const authenticate = (credentials)=>{
        fetch('http://localhost:5000/login', {
            headers:{
                "Content-Type" : "application/json"
            },
            method : "POST",
            body : JSON.stringify(credentials)
        }).then(res => res.json())
        .then(data => {
            const {login_token, user} = data;
            if(login_token){
                cookie.set('login_token', login_token ,{path : '/', expires : new Date((Date.now() + 1000 * 60 * 5))});
                setLoginToken(login_token);
                setUser(user);
            }
        });
    }

    const logout = ()=>{
        cookie.remove('login_token');
        setLoginToken(undefined);
        setUser(undefined);
    }

    return(
        <Routes>
            {!login_token && <Route path="/" element={<Login authenticate = {authenticate} />} />}

            {login_token && (
                <>
                    <Route path="/dashboard" element={<Dashboard user = {user} logout = {logout}/>} />
                </>
            )
            }
            <Route path="*" element={<Navigate to={login_token ? "/dashboard" : "/"}/>}/>
        </Routes>
    )
}

export default App;
