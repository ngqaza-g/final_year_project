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

     <div className="bg-dark d-flex flex-column text-white col-md-3 col-lg-2 d-none d-md-block h-100 sidebar">

        <div className="container-fluid">
            <ul className="nav nav-pills flex-column mt-4">
                <li className="nav-item">
                    <a href="#" className="nav-link active text-white trancate">
                        <i className="bi bi-heart-pulse-fill me-2"></i>
                        Dashboard
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white trancate">
                        <i className="bi bi-hospital-fill me-2"></i>
                        Admit Patient
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white trancate">
                        <i className="bi bi-file-medical-fill me-2"></i>
                        Patients Info
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white trancate">
                        <i className="bi bi-table me-2"></i>
                        Duty Table
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white trancate">
                    <i className="bi bi-gear-fill me-2"></i>
                        Global Settings
                    </a>
                </li>
            </ul>
        </div>
     </div>
    //  <!-- End of Sidenav -->
    );
}