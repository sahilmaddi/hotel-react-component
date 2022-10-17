import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="box overlay">
      <nav
        className=" form-control navbar
        navbar-collapse  
        navbar-light bg-light 
        sm:px-6 lg:px-8"
      >
        <div
          className="container-fluid 
            h-16 absolute inset-y-0 left-0 flex items-center sm:hidden"
        >
          <a className="navbar-brand" href="/">
            HBⓞ
          </a>
          <Nav className="">
            <Link className="navi justify-content-start p-2" to="/our-hotels">
              Our Hotels
            </Link>
            <Link className="navi justify-content-start p-2" to="#">
              Locations
            </Link>
            <Link className="navi justify-content-start p-2" to="#">
              Resorts
            </Link>
            <Link  to="#">
              <NavDropdown title="Facilities" className="navi justify-content-start">
                <NavDropdown.Item href="#action3">Hotels</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Resorts</NavDropdown.Item>
               
                <NavDropdown.Item href="#action5">Restaurants</NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Link className="navi justify-content-start p-2" to="/about-us">
              About Us
            </Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link className="navi2 justify-content-end" to="/login">
              <button type="button" className="btn success">
                Sign In
              </button>
            </Link>
            <Link className="navi2 justify-content-end" to="/register">
              <button type="button" className="btn default me-2">
                Sign Up
              </button>
            </Link>
          </Nav>
        </div>
      </nav>
    </div>
  );
}
