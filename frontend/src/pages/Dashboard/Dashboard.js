import React from "react";
import Cookie from 'universal-cookie';
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Main from './Main';
import Footer from './Footer';
import socket from '../../modules/socket';
import './Dashboard.css';


const Dashboard = ()=>{
    const cookie = new Cookie();
    const token = cookie.get('login_token');
    const patients = useSelector(state => state.patients);
    const user_id = useSelector(state => state.user._id);
    const role = useSelector(state => state.user.role);
   
    useEffect(()=>{
        socket.emit('user', {user_id, token, role});
    }, []);

    useEffect(()=>{
        patients.forEach(patient =>{
            socket.emit('join', patient._id);
        });
    },[patients]);

    return(
        <div className="d-flex flex-column body">
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default Dashboard;