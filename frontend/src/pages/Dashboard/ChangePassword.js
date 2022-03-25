import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import Loading from '../Loading/Loading';

export default function ChangePassword({ logout }){
    const cookies = new Cookies();
    const token = cookies.get('login_token');
    const [loading, setLoading] = useState(false);
    const [bunner, setBunner] = useState({
        active : false,
        msg : "",
        type: "" 
    });
    const [passwords, setPasswords] = useState({
        current_password : "",
        new_password : "",
        repeat_new_password: ""
    });
    const onChange = (e)=>{
        const {name, value} = e.target;
        if(name === "current_password"){
            setPasswords(prev=>{
                return({
                        current_password : value,
                        new_password: prev.new_password,
                        repeat_new_password: prev.repeat_new_password
                    });
            });
        }
        if(name === "new_password"){
            setPasswords(prev=>{
                return({
                        current_password : prev.current_password,
                        new_password: value,
                        repeat_new_password: prev.repeat_new_password
                    });
            });
        }
        if(name === "repeat_new_password"){
            setPasswords(prev=>{
                return({
                        current_password : prev.current_password,
                        new_password: prev.new_password,
                        repeat_new_password: value
                    });
            });
        }
    }
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
            if(type === "success"){
                console.log("success")
                document.querySelector('.change-password-close').click();
                logout();
            }
            
            setBunner(prev=>{
                return {
                    active: false,
                    msg: "",
                    type:"" 
                }
            });
        }, 5000);
    }

    const submit = async (e)=>{
        e.preventDefault();
        
        try{
            if((passwords.current_password !== passwords.new_password) && (passwords.new_password === passwords.repeat_new_password)){
                console.log("submitting...");
                setLoading(true);
                const response = await fetch('http://localhost:5000/change_password', {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        token : token,
                        current_password: passwords.current_password,
                        new_password : passwords.new_password
                    })
                });

                setPasswords({
                    current_password : "",
                    new_password: "",
                    repeat_new_password: ""
                });

                const data = await response.json();
    
                if(response.status === 200){
                    setLoading(false);
                    displayMsg(data.msg, "success");
                }else{
                    // Display Error
                    displayMsg(data.msg, "danger");
                }
    
            }
        }catch{
            console.log("An Error occured");
        }
    }


        return(
            <div className="modal fade" id="change-password">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Password</h5>
                            <button className="btn-close change-password-close" data-bs-dismiss="modal"></button>
                        </div>
                     
                            {
                                loading ? <Loading /> : (
                                    <form onSubmit={submit}>

                                    <div className="modal-body">

                                        {bunner.active ? <div className={`alert alert-${bunner.type}`}>{bunner.msg}</div> : ""}

                                        <div className="my-3">
                                            <label className="form-label">Current Password:</label>
                                            <input onChange={onChange} value={passwords.current_password} type="password" className="form-control" name="current_password" required/>
                                        </div>
            
                                        <div className="my-3">
                                            <label className="form-label">New Password:</label>
                                            <input onChange={onChange} value={passwords.new_password} type="password" className="form-control" name="new_password"  required/>
                                            {((passwords.current_password === passwords.new_password) && ((passwords.current_passowrd !== "") && (passwords.new_password !== ""))) ? <div className="alert alert-danger mt-2">Current password and New password are the same</div> : ""}
                                        </div>
            
                                        <div className="my-3">
                                            <label className="form-label" >Repeat New Password:</label>
                                            <input onChange={onChange} value={passwords.repeat_new_password} type="password" className="form-control" name="repeat_new_password"  required/>
                                            {((passwords.repeat_new_password !== passwords.new_password) && ((passwords.new_passowrd !== "") && (passwords.repeat_new_password !== ""))) ? <div className="alert alert-danger mt-2">New Passwords dont match</div> : ""}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-outline-success">Change Password</button>
                                    </div>
                                    </form>
                                )
                            }
                       
                    </div>
                </div>
            </div>
        );
}