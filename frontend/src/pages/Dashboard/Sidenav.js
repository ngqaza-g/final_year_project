import React from "react";

export default function Sidenav({user}){
    return (
    //           <!-- Side Navbar -->
    //     <!-- 
    //     Dashboard
    //     Admit patient
    //     Patients Info
    //     Duty Table
    //     Global Settings
    //  -->

     <div className="bg-dark d-none d-sm-flex flex-column text-white col-sm-1 col-lg-2 h-100  sidebar">

        <div className="container-fluid d-flex flex-column align-items-center">
            <ul className="nav nav-pills flex-column mt-4">
                <li className="nav-item">
                    <button className="nav-link side-bar-nav-link active text-white text-truncate">
                        <i className="bi bi-heart-pulse-fill me-2"></i>
                        <p className="d-none d-lg-inline">Dashboard</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button className="nav-link side-bar-nav-link text-white text-truncate">
                        <i className="bi bi-hospital-fill me-2"></i>
                        <p className="d-none d-lg-inline">Admit Patient</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button className="nav-link side-bar-nav-link text-white text-truncate">
                        <i className="bi bi-file-medical-fill me-2"></i>
                        <p className="d-none d-lg-inline">Patients Info</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button className="nav-link side-bar-nav-link text-white text-truncate">
                        <i className="bi bi-table me-2"></i>
                        <p className="d-none d-lg-inline">Duty Table</p>
                    </button>
                </li>

                <li className="nav-item">
                    <button className="nav-link side-bar-nav-link text-white text-truncate">
                    <i className="bi bi-gear-fill me-2"></i>
                    <p className="d-none d-lg-inline">Global Settings</p>
                    </button>
                </li>
            </ul>
        </div>
     </div>
    //  <!-- End of Sidenav -->
    );
}