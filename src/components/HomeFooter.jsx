import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } 
from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
import "./HomeFooter.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../images/logo.png"
const HomeFooter = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* justify-content-center justify-content-lg-between */}
      <section className='d-flex 
      p-4 border-bottom'>
        <div className=' d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
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
      </section>
      {/* <section className=''> */}
        <MDBContainer className='text-md-start'>
          <MDBRow 
          // className='mt-3'
          >
            <MDBCol 
            className='mx-auto'
            >
                <img src={logo} alt="" className='aaab'/>
            </MDBCol>
            <MDBCol  className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>&emsp;&emsp;Useful links</h6> 
              <p>
                <a href='#!' className='text-reset'>
                &emsp;&emsp; Suites
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                &emsp;&emsp; Rooms
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                &emsp;&emsp; Resorts

                </a>
              </p>
            </MDBCol>

            <MDBCol  className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>&emsp;&emsp;&emsp;&emsp; Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                &emsp;&emsp; New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                &emsp;&emsp; info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />&emsp;&emsp; + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />&emsp;&emsp;  + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      {/* </section> */}

    </MDBFooter>
  );
}
export default HomeFooter
