import React, {useState} from "react";
import Sidenav from "./Sidenav";
import Main_window from "./Main_Window";

export default function Main({user}){
    const [nav, setNav] = useState('dashboard');
    console.log(nav);
    return (
        <div className="container-fluid flex-grow-1">
            <div className="row h-100">
                <Sidenav setNav={setNav} role={user.role}/>
                <Main_window nav={nav} role={user.role}/>
            </div>
        </div>
    );
}