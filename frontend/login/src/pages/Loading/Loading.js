import React from "react";
import './Loading.css'

const Loading = ()=>{
    return(
        <div className="loading-screen">
            <div>
                <div className="spinner"></div>
                <h2>Loading...</h2>
            </div>
        </div>
    )
}

export default Loading;