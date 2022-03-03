import React from "react";
import Sidenav from "./Sidenav";
import './Dashboard.css'

export default function Main({user}){
    return (
                <Sidenav user={user} />  
    )
}