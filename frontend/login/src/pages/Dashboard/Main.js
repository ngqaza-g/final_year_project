import React from "react";
import Sidenav from "./Sidenav";
import Display from "./Display";

export default function Main({user}){
    return (
        <div className="container-fluid flex-grow-1">
            <div className="row h-100">
                <Sidenav />
                <Display />
            </div>
        </div>
    );
}