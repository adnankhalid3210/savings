import React from 'react';
import {
  Link
} from "react-router-dom";
import './App.css';
import  Logo  from './images/logo.png';
// import { Modal } from 'bootstrap';
// import Popper from 'popper.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
// import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


function Header() {

  return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
                <Link to="/">
                  <img src={Logo} alt="Logo" className="img-fluid logo-img" />
                  </Link>
            </div>
            <div className="col-lg-8 my-auto">
              <div className="text-md-right">

                <ul className=" nav-menu">
                  <li>
                    <Link
                      to="/about-us/"
                    >
                      About Us
                        </Link>
                  </li>
                  <li>
                    <Link
                      to="/mission/"
                    >
                      Mission
                        </Link>
                  </li>
                </ul>

                <div className="sign-up-btn">
                  <Link
                    to="/sign-in/"
                    >
                    Log in
                        </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      
  );


}

export default Header;
