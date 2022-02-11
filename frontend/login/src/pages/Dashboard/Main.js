import React from "react";
import Sidenav from "./Sidenav";

export default function Main({user}){
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidenav user={user} />
      
            </div>
        </div>    
    )
}