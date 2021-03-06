import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Footer from './Footer';
import './Dashboard.css';
import { Toaster } from "react-hot-toast";


const Dashboard = ( { setLoginToken, setUser, user})=>{

    return(
        <div className="d-flex flex-column h-100">
            <Toaster />
            <Navbar setLoginToken={setLoginToken} setUser= {setUser} user={user}/>
            <Main user={user} />
            <Footer />
        </div>
    );
}

export default Dashboard;