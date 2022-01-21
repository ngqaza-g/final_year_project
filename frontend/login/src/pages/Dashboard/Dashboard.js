import React from "react";
import './Dashboard.css';

const Dashboard = ( { user, logout })=>{
    return(
        <div>
            <h1>Welcome {user.name}</h1>

            <input onClick = {logout} type="button" value="Logout" />
        </div>
    );
}

export default Dashboard;