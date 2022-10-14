import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navbar() {
  return (
    <div>
       
        <nav className="d-flex form-control
        navbar navbar-collapse navbar-expand-lg 
        navbar-light bg-light max-w-7xl 
        mx-auto px-2 sm:px-6 lg:px-8">
            <div className="container-fluid 
            h-16 absolute inset-y-0 left-0 flex items-center sm:hidden">
                <a className="navbar-brand" href="/">
                   H&M
                </a>
                {/* <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls='navbarSupportedContent'
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <Nav className="">
                <Link className="navi justify-content-start m-3" to="/our-hotels">Our Hotels</Link>
                <Link className="navi justify-content-start m-3" to="#">Locations</Link>
                <Link className="navi justify-content-start m-3" to="#">Resorts</Link>
                <NavDropdown
                    title="Facilities"
                    className="navi justify-content-start m-3 p-1"
                  >
                    <NavDropdown.Item href="#action3">Hotels</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                     Resorts
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                     Restaurants
                    </NavDropdown.Item>
                  </NavDropdown>
                {/* <Link className="navi justify-content-start" to="#">Facilities</Link> */}
                <Link className="navi justify-content-start m-3" to="/about-us">About Us</Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="navi2 justify-content-end" to="/login">
                  <button type="button" className="btn success">
                 Sign In
                  </button>
                </Link>
                <Link className="navi2 justify-content-end" to="/register">
                  <button type="button" className='btn default me-2'>Sign Up</button>
                </Link>
                </Nav>
            </div>
        </nav>
    </div>
  )
}