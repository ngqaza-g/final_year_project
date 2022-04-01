import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Main from './Main';
import Footer from './Footer';
import socket from '../../modules/socket';
import './Dashboard.css';


const Dashboard = ()=>{
    const patients = useSelector(state => state.patients);
    const user_id = useSelector(state => state.user._id);
    
    useEffect(()=>{
        patients.forEach(patient =>{
            socket.emit('join', patient._id);
        });
        socket.emit('user', user_id);
    },[patients]);

    return(
        <div className="d-flex flex-column h-100">
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default Dashboard;