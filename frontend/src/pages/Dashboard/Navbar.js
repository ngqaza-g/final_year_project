import React from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';

export default function Navbar({setLoginToken, setUser, user}){

  const navigate = useNavigate();
  const cookie = new Cookies();

  const logout = ()=>{
    cookie.remove('login_token'); // Remove the cookie
    setLoginToken(undefined); // set the login token to undefined (deleting it))
    setUser(undefined); // set the user to undefined
    navigate('/'); // Navigate to the login page
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

    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid navbar-elements">
            <a href="/" className="navbar-brand ms-3">Bulawayo General</a>

            {/* <!-- Nav dropdown menu --> */}
            <div className="dropdown me-5">
                <span className="navbar-text d-none d-sm-inline text-truncate username">{user.name}</span>
                <button
                    className="text-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                >
                    <i className="bi bi-person-fill"></i>
                </button>

                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                    <li>
                        <button onClick={logout} className="dropdown-item">
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
    </nav>
    
    );
}