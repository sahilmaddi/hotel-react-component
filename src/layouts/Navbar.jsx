import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-end">
            <div className="container-fluid">
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
                <Link className="navi " to="#" >Our Hotels</Link>
                <Link className="navi" to="#">Resorts</Link>
                <Link className="navi" to="#">Facilities</Link>
                <Link className="navi" to="/about-us">About Us</Link>
                <Link className="navi" to="/login">Sign In</Link>
                <Link className="navi" to="/register">Sign Up</Link>
            </div>
        </nav>

    </div>
  )
}