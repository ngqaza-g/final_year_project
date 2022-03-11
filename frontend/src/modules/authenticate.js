import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const authenticate = (credentials)=>{
    navigate('/loading')
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

export default authenticate;