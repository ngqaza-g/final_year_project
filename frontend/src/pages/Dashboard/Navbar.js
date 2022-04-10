import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ChangePassword from "./ChangePassword";
import capitaliseFirstLetter from '../../modules/capitaliseFirstLetter';
import logout from '../../modules/logout';

export default function Navbar(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);


    const toggleSidenav = ()=>{
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active_sidebar');
        // window.addEventListener('click', ()=>{
        //     sidebar.classList.forEach(item=>{
        //         if(item === 'active_sidebar') {
        //             sidebar.classList.remove('active_sidebar');
        //             window.removeEventListener('click', ()=>{});
        //         }
        //     });
        // });

    }
    return (
       
    //   <!-- Navbar -->
    //     <!-- 
    //     brand name
    //     username
    //     avator
    //     dropdown menu
    //         signout
    //         change password -> modal
    //  -->


    <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-sm">
        <div className="container-fluid navbar-elements">
            <button className="navbar-toggler" onClick={toggleSidenav}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="/" className="navbar-brand ms-3">Bulawayo General</a>

            {/* <!-- Nav dropdown menu --> */}
            <div className="d-flex align-items-center dropdown me-5">
                <div className="navbar-text d-none d-sm-inline text-truncate username me-2"><span className="me-1">{capitaliseFirstLetter(user.role)}</span>{user.name}</div>
                <a
                    className="text-white dropdown-toggle d-flex justify-content-center align-items-center avater"
                    data-bs-toggle="dropdown"
                >
                    <i className="bi bi-person-fill"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                    <li>
                        <button onClick={()=>{logout(navigate, dispatch)}} className="dropdown-item">
                            Signout
                        </button>
                    </li>

                    <li>
                        <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#change-password">
                            Change Password
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <ChangePassword />
    </nav>
    
    );
}