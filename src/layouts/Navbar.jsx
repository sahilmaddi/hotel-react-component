import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <nav className="d-flex form-control 
        navbar navbar-collapse navbar-expand-lg navbar-dark bg-primary max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="container-fluid justify-between h-16 absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                <Link className="navi" to="/our-hotels">Our Hotels</Link>
                <Link className="navi" to="#">Locations</Link>
                <Link className="navi" to="#">Resorts</Link>
                <Link className="navi" to="#">Facilities</Link>
                <Link className="navi" to="/about-us">About Us</Link>
                <Link className="navi" to="/login">
                  <button type="button" className="btn success">
                 Sign In
                  </button>
                </Link>
                <Link className="navi" to="/register">
                  <button type="button" className='btn default '>Sign Up</button>
                </Link>
            </div>
        </nav>
    </div>
  )
}