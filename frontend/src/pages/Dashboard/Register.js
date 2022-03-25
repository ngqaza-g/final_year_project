import React, { useState } from 'react';
import Loading from '../Loading/Loading';

export default function Register(){
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName : "",
        username: "",
        email : "", 
        role : ""
    });

    const [loading, setLoading] = useState(false);

    const [bunner, setBunner] = useState({
        active : false,
        msg : "",
        type: "" 
    });

    const displayMsg = (msg, type)=>{
        setLoading(false);
        setBunner(prev=>{
            return {
                active: true,
                msg: msg,
                type: type 
            }
        });

        setTimeout(()=>{
            setBunner(prev=>{
                return {
                    active: false,
                    msg: "",
                    type:"" 
                }
            });
        }, 5000);
    }

    const onChange = (e)=>{
        const {name, value} = e.target;

        switch(name){
            case "firstName" : 
                setFormInputs(prev =>{
                    return {
                        firstName: value,
                        lastName : prev.lastName,
                        username: prev.username,
                        email : prev.email, 
                        role : prev.role
                    }
                });
                break;
                
            case "lastName" : 
                setFormInputs(prev =>{
                    return {
                        firstName: prev.firstName,
                        lastName : value,
                        username: prev.username,
                        email : prev.email, 
                        role : prev.role
                    }
                });
                break;

            case "username" : 
                setFormInputs(prev =>{
                    return {
                        firstName: prev.firstName,
                        lastName : prev.lastName,
                        username: value,
                        email : prev.email, 
                        role : prev.role
                    }
                });
                break;

            case "email" : 
                setFormInputs(prev =>{
                    return {
                        firstName: prev.firstName,
                        lastName : prev.lastName,
                        username: prev.username,
                        email : value, 
                        role : prev.role
                    }
                });
                break;

            case "role" : 
                setFormInputs(prev =>{
                    return {
                        firstName: prev.firstName,
                        lastName : prev.lastName,
                        username: prev.username,
                        email : prev.email, 
                        role : value
                    }
                });
                break;

            default:
                console.log("Invalid Registration Info");
        }
        
    }

    const submit = async (e)=>{
        e.preventDefault();

        setLoading(true);

        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formInputs)
        });

        const data = await response.json();

        setLoading(false);

        if(response.status === 200){
            displayMsg(data.msg, "success");
        }else{
            displayMsg(data.msg, "danger");
        }

        setFormInputs({
            firstName: "",
            lastName : "",
            username : "",
            email : "", 
            role : ","
        });
    }

    if(loading){
        return <Loading />
    }else{
        return <div>

        <form onSubmit={submit}>
            <div className="h5 text-center">Register New User</div>
            {bunner.active ? <div className={`alert text-center alert-${bunner.type}`}>{bunner.msg}</div> : ""}
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input className="form-control" onChange={onChange} value={formInputs.lastName} name="lastName"  required/>
            </div>

            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input className="form-control" onChange={onChange} value={formInputs.firstName} name="firstName" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Username</label>
                <input className="form-control" onChange={onChange} value={formInputs.username} name="username" required />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={onChange} value={formInputs.email} name="email" required />
            </div>


            <div className="mb-3">
                <p className="lead">Position</p>

                <div className="form-check form-check-inline">
                    <input className="form-check-input my-2" onClick={onChange} type="radio" value="admin" name="role" id="admin"  required/>
                    <label className="form-label" >Admin</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input my-2" onClick={onChange} type="radio" value="doctor" name="role" id="doctor" />
                    <label className="form-label" >Doctor</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input my-2" onClick={onChange} type="radio" value="nurse" name="role" id="nurse"/>
                    <label className="form-label" >Nurse</label>
                </div>
            </div>

            <div className="mb-3">
                <button type="submit" className="btn btn-success">Register</button>
            </div>

        </form>
    </div>
    }
    
}