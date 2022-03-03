import React from "react";
import './Dashboard.css';
// import Main from "./Main";
import Navbar from "./Navbar";

const Dashboard = ( { user, logout })=>{
    return(
        <>
            <Navbar logout = {logout}/>
        </>
    );
}

export default Dashboard;