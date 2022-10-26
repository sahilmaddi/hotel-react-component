import React from 'react'
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";
import car3 from "../../images/car3.jpg";
import SearchWidget from './SearchWidget';
const CarouselComponent = () => {
 
  return (
    <div >
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{maxHeight: "550px",
          maxWidth:"1550px"}}
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption><SearchWidget/></Carousel.Caption>
       
    
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{maxHeight: "550px",
          maxWidth:"1550px"}}
          src={car2}
          alt="Second slide"
        />
      <Carousel.Caption><SearchWidget/></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "550px",
          maxWidth:"1550px"}}
          src={car3}
          alt="Third slide"
        />
        <Carousel.Caption><SearchWidget/></Carousel.Caption>
       
      </Carousel.Item>
    </Carousel>
    
      </div>
  )
}

export default CarouselComponent