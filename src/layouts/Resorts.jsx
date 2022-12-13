import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import resort1 from '../images/resort1.jpg'
import resort2 from '../images/resort2.jpg'
import resort3 from '../images/resort3.jpg'
import resort4 from '../images/resort4.jpg'
import "./Resorts.css"
export default function App() {
  return (
  
    <div className="divclass">
    <div className='container'>
    <h1><center> Exclusive Resorts </center></h1>
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol className='mdb'>
      <div className='container'>
        <MDBCard>
          <MDBCardImage
            src={resort1}
            alt='...'
            position='top'
            className='aaa'
          />
      <MDBCardTitle >The Marina Drive</MDBCardTitle>
      <MDBCardText>Looks like it is a villa</MDBCardText>
        </MDBCard>
        
      </div>
      </MDBCol>
     
      <MDBCol className='mdb'>
        <MDBCard>
          <MDBCardImage
            src={resort2}
            alt='...'
            position='top'
            className='aaa'
          />
      <MDBCardTitle >The Asiatic Alfredo</MDBCardTitle>
      <MDBCardText>Wow look at that swimming pool</MDBCardText>
        </MDBCard>
      </MDBCol>
  
      <MDBCol className='mdb'>
      <div className='container'>
        <MDBCard>
          <MDBCardImage
            src={resort3}
            alt='...'
            position='top'
            className='aaa'
          />
      <MDBCardTitle >The Malibu April</MDBCardTitle>
      <MDBCardText>A Hotel A Restaurant I mean what is this thing</MDBCardText>
        </MDBCard>
        
      </div>
      </MDBCol>
     
      <MDBCol className='mdb'>
        <MDBCard>
          <MDBCardImage
            src={resort4}
            alt='...'
            position='top'
            className='aaa'
          />
          <MDBCardTitle >The Lockness Waffle</MDBCardTitle>
          <MDBCardText>The very first complete resort at your service</MDBCardText>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
  )
}