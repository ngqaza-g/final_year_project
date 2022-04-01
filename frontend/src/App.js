import React, { useEffect } from 'react';
import { Route, Routes, Navigate, } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './pages/Login/Login';
import Loading from './pages/Loading/Loading';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
import validateToken from './modules/validateToken';
import listeners from './modules/listeners/listeners';

const App = ()=>{
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const tokenChecked = useSelector(state => state.tokenChecked);

    useEffect(()=>{
        validateToken(dispatch);
        listeners(dispatch);
    }, []);

    if(!tokenChecked){
        return <Loading />
    }else{
        return(
            <Routes>
                {token ? <Route path="/dashboard" element={<Dashboard />} /> : <Route exact path="/" element={<Login />} />}
                <Route path="*" element={<Navigate to={token ? "/dashboard" : "/"}/>}/>
            </Routes>
        )
    }
}

export default App;