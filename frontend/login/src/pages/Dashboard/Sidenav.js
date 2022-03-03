import React from "react";

export default function Sidenav({user}){

    return (
      <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

          <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span data-feather="home"></span>
                  CMS<span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span></span>
                  Admit Patient
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span></span>
                  Admit Patient
                </a>
              </li>

            </ul>
          </div>

        </nav>



{/* 
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h3>Welcome {user.name}</h3>
            </div>
        </main> */}
      </div>
    </div>
    );
}