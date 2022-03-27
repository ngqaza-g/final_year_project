import React from 'react';


export default function bunner({msg, type}){
    const [bunner, setBunner] = useState({
        active : false,
        msg : "",
        type: "" 
    });

    const displayMsg = ()=>{
        setLoading(false);
        setBunner({
                active: true,
                msg: msg,
                type: type 
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
    return bunner.active ? <div className={`alert text-center alert-${bunner.type}`}>{bunner.msg}</div> : ""
}
