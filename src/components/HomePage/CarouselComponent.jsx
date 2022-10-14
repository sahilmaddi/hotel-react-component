import React from 'react'
import { Carousel } from 'react-bootstrap'
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";
import car3 from "../../images/car3.jpg";
// import test2 from "./test2.jpg";
const CarouselComponent = () => {
  return (
    
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{maxHeight: "550px",
          // objectFit: "contain",
          maxWidth:"1550px"}}
        //   style={{height:"725px"}}
          src={car1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{maxHeight: "550px",
          // objectFit: "contain",
          maxWidth:"1550px"}}
          src={car2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight: "550px",
          // objectFit: "contain",
          maxWidth:"1550px"}}
          src={car3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent