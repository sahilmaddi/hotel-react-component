import React from 'react'
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Room } from '@material-ui/icons';
import "./CarouselComponent.css"
import {room} from "../images/room.jpg"
import {room2} from "../images/room2.webp"
export default function CarouselComponent() {
 const dataDigitalBestSeller = [
        {
          id: 1,
          title: 'Deluxe Room',
          price: '5999/day',
          category: 'Hotel Room',
          linkImg:
            '../images/room.jpg',
        },
        {
          id: 2,
          title: 'Suite Room',
          price: '6999',
          category: 'Hotel Suite',
          linkImg:
            '../images/room2.webp',
        },
        {
          id: 3,
          title: 'Normal Room',
          price: '4999',
          category: 'Deluxe Room',
          linkImg:
            '../images/room.jpg',
        },
        {
          id: 4,
          title: 'Deluxe Room',
          price: '5999',
          category: 'Normal Room',
          linkImg:
            '../images/room2.webp',
        },
          
      ];
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: Room,
      }));
    };
  
    return (
      <div className="App">
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <span className="category">{item.category}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
}
