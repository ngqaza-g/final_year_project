import React, {useEffect} from "react";
import { useSelector } from "react-redux";

export default function Sidenav({setNav}){
    
    const role = useSelector( state => state.user.role );

    useEffect(()=>{
        const sidebar = document.querySelector('.sidebar');
      

        

        const navs = document.querySelectorAll('.side-bar-nav-link');
        navs.forEach(nav => {
            nav.addEventListener('click', ()=>{
                navs.forEach(element =>{
                    const classes = element.classList;
                    for(const key in classes){
                        if(classes[key] === "active") element.classList.remove("active");
                    }
                });
                nav.classList.add('active');
            });
        });

        // return (
        //     navs.forEach(nav =>{
        //         nav.removeEventListener('click');
        //     });
        // );
    }, []);

    return (
    //           <!-- Side Navbar -->
    //     <!-- 
    //     Dashboard
    //     Admit patient
    //     Patients Info
    //     Duty Table
    //     Global Settings
    //  -->

     <div className="bg-dark d-flex flex-column text-white col-sm-1 col-lg-2 h-100  sidebar">

        <div className="d-flex flex-column align-items-center">
            <ul className="nav nav-pills flex-column mt-4">
                <li className="nav-item">
                    <button onClick={()=>{setNav("dashboard")}} className="nav-link side-bar-nav-link active text-white text-truncate">
                        <i className="bi bi-heart-pulse-fill me-2"></i>
                        <p className="d-none d-lg-inline">Dashboard</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button onClick={()=>{setNav("admit")}} className="nav-link side-bar-nav-link text-white text-truncate">
                        <i className="bi bi-hospital-fill me-2"></i>
                        <p className="d-none d-lg-inline">Admit Patient</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button onClick={()=>{setNav("patients")}} className="nav-link side-bar-nav-link text-white text-truncate">
                        <i className="bi bi-file-medical-fill me-2"></i>
                        <p className="d-none d-lg-inline">Patients Info</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button onClick={()=>{setNav("duty")}} className="nav-link side-bar-nav-link text-white text-truncate">
                        <i className="bi bi-table me-2"></i>
                        <p className="d-none d-lg-inline">Duty Table</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button onClick={()=>{setNav("global")}} className="nav-link side-bar-nav-link text-white text-truncate">
                    <i className="bi bi-gear-fill me-2"></i>
                    <p className="d-none d-lg-inline">Global Settings</p>
                    </button>
                </li>
                {
                    role === "Admin" ?
                    <li className="nav-item">
                        <button onClick={()=>{setNav("register")}} className="nav-link side-bar-nav-link text-white text-truncate">
                        <i className="bi bi-person-plus-fill me-2"></i>
                        <p className="d-none d-lg-inline">Register</p>
                        </button>
                    </li> : ""
                }

            </ul>
        </div>
     </div>
    //  <!-- End of Sidenav -->
    );
}