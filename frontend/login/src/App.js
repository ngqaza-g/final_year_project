import React, {useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
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


    const navigate = useNavigate();

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

    const logout = ()=>{
        cookie.remove('login_token');
        setLoginToken(undefined);
        setUser(undefined);
        navigate('/');
    }
    
    if(!setToken){
        return <Loading />
    }else{
        return(
            <Routes>
                {!login_token && (
                    <>
                        <Route exact path="/" element={<Login authenticate = {authenticate} />} />
                        <Route path="/loading" element={<Loading/>}/>
                    </>
                )}
                        
    
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
}

export default App;
