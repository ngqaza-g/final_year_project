import React from 'react'
import Display from './Display';
import Duty from './Duty';
import Admit from './Admit';
import Global from './Global';
import Patients from './Patients';
import Register from './Register';

export default function Main_Window({nav}){

    const getComponent = (comp)=>{
        switch(comp){
            case "dashboard":
                return <Display key = {comp} />
                break;

            case "patients":
                return <Patients key = {comp} />
                break;
            
            case "admit":
                return <Admit key = {comp} />
                break;
            
            case "duty":
            return <Duty key = {comp} />
            break;
        
            case "global":
                return <Global key = {comp} />
                break;
    
            case "register":
                return <Register key = {comp} />
                break;
            
            default:
                console.log("Invalid input");
                break
            
        }
    }

    return (
        <div className = "col-sm-11 col-lg-10 ms-sm-auto  p-3">
            {getComponent(nav)}
        </div>
    );
}