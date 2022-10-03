import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/GitHub';
import { Icon } from '@material-ui/core';

export default function Footer() {
  return (
    <div>      
<footer className="page-footer  font-small blue pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row"> 
      <hr className="clearfix w-100 d-md-none pb-3"/>
       <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">Hotel Details</h5>
        <ul className="list-unstyled">
          <li>
           <a href="https://www.facebook.com/"><FacebookIcon/></a>
           <a href="https://www.linkedin.com/"><LinkedInIcon/></a>
           <a href="https://www.instagram.com/"><InstagramIcon/></a>
           <a href="https://www.twitter.com/"><TwitterIcon/></a>
          </li>
        </ul>
      </div>  
    </div>
  </div>
  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">
    
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
            Name of Company
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <ul  className='list-unstyled'>
          <p>
            <a href="#!" className="text-reset">Suites</a><br/>
            <a href="#!" className="text-reset">Rooms</a><br/>
            <a href="#!" className="text-reset">Resorts</a><br/>
           <a href="#!" className="text-reset">Restaurant</a><br/>
          </p>
          </ul>
          
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact Us</h6>
          <p>
            <i class="fas fa-home me-3 text-secondary"></i> 
            Hyderabad, HYD 500072, Telangana,India</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
           sahilmaddi62@gmail.com
          </p>
          <p>
            <i class="fas fa-phone me-3 text-secondary"></i>
            +91 9999999999</p>
          <p>
            <i class="fas fa-print me-3 text-secondary"></i>
            +91 9090909090</p>
        </div>
       
        </div>
        </div>
    </section>
   
    

</footer>


    </div>
  )
}
