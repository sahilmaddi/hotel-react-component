// import { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import "./UserNavbar.css";
export default function UserNavbar(){
   
return (
    <div className="container-fluid abc" >
        <nav className="navbar w-96 navbar-expand-lg navbar-light bg-light p-0 w-100 border-spacing-0 justify-between">
            <a className="navbar-brand" href="#">
                <img src="../../images/logo.png" alt="..." /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Room</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resorts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Facilities</a>
                    </li>
                </ul>
            </div>
        </nav>
  </div>
);
}

