import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="box overlay">
      {/* navbar-collapse  */}
      <nav
        className="  navbar
        navbar-light bg-light 
        sm:px-6 lg:px-8"
      >
        <div
          className="container-fluid 
            h-16 absolute inset-y-0 left-0 flex items-center sm:hidden"
        >
          <img src="../images/navbarlogo.jpg" alt="" className="aaab"/>
          <Nav className="">
            <Link className="navi justify-content-start p-2" to="/our-hotels">
              Our Hotels
            </Link>
            <Link className="navi justify-content-start p-2" to="/locations">
              Locations
            </Link>
            <Link  to="#">
              <NavDropdown title="Facilities" className="navi justify-content-start">
                <NavDropdown.Item href="#action3">Cab</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Resorts</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Laundry</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Activities</NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Link className="navi justify-content-start p-2" to="/about-us">
              About Us
            </Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link className="navi2 justify-content-end" to="/login">
              <button type="button" className="success mb-2 ">
                Sign In
              </button>
            </Link>&emsp;&emsp;
            <Link className="navi2 justify-content-end" to="/register">
              <button type="button" className=" default me-2">
                Sign Up
              </button>
            </Link>
          </Nav>
        </div>
      </nav>
    </div>
  );
}
