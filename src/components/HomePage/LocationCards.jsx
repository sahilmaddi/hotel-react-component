import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import hyderabad from "../../images/hyderabad.jpg"
import chennai from "../../images/chennai.jpg"
import bangalore from "../../images/bangalore.jpg"
import vijayawada from "../../images/vijayawada.jpg"
import "./LocationCards.css"
import axios from 'axios';
export default function LocationCards() {
  return (
    <>
    <div className="bg-color">
    <h4 >
        <center >Exclusive Destinations</center>
    </h4>
    <MDBRow >
      <MDBCol >
        <MDBCard className='bg-card-color'>
          <MDBCardImage
            src={hyderabad}
            alt='...'
            position='top'
          />
          <MDBCardBody className='bg-card-color'> 
            <MDBCardTitle onClick={axios.get("http://10.81.4.196:2021/getByCityNameLetters/hyd")}>Hyderabad</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='bg-card-color'>
          <MDBCardImage
            src={chennai}
            alt='...'
            position='top'
          />
          <MDBCardBody className='bg-card-color'>
            <MDBCardTitle>Chennai</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> 
        
      <MDBCol>
        <MDBCard className='bg-card-color'>
          <MDBCardImage
            src={bangalore}
            position='top'
          />
          <MDBCardBody className='bg-card-color'>
            <MDBCardTitle>Bengaluru</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='bg-card-color'>
          <MDBCardImage
            src={vijayawada}
            alt='...'
            position='top'
          />
          <MDBCardBody className='bg-card-color'>
            <MDBCardTitle>Vijayawada</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </>
  );
}