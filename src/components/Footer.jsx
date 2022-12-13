import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { Icon } from '@material-ui/core';
import "./Footer.css"
export default function Footer() {
  return (
    <div className="footer">
      <footer className="page-footer footer  font-small  pt-4">
        <div className="container-fluid  text-md-left">
          <div className="row">
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Hotel Details</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.linkedin.com">
                    <LinkedInIcon />
                  </a>
                  <a href="https://www.instagram.com">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.twitter.com">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="">
          <div className="text-md-start mt-5">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 ">
                <h6 className="text-uppercase fw-bold">
                  <i className="fas fa-gem text-secondary"></i>HBO
                </h6>
                <p>Book Hotel Rooms here</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <ul className="list-unstyled">
                  <p>
                    <a href="#!" className="text-reset">
                      Suites
                    </a>
                    <br />
                    <a href="#!" className="text-reset">
                      Rooms
                    </a>
                    <br />
                    <a href="#!" className="text-reset">
                      Resorts
                    </a>
                    <br />
                    <a href="#!" className="text-reset">
                      Restaurant
                    </a>
                    <br />
                  </p>
                </ul>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3  mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact Us</h6>
                <p>
                  <i class="fas fa-home me-3 text-secondary"></i>
                  Hyderabad, HYD 500072, Telangana,India
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  sahilmaddi22@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone text-secondary"></i>
                  +91 9999999999
                </p>
                <p>
                  <i class="fas fa-print text-secondary"></i>
                  +91 9090909090
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
