import React from 'react'
import logo from "../../images/hotel.jpg"
import logo2 from "../../images/room2.webp"
import wifi from "../../images/baseline_wifi_black_24dp.png"
import Carousel  from 'react-elastic-carousel';
import Item from '../Item'
import location from '../../images/location.jpg'
import logo3 from "../../images/room.jpg"
import './Home.css'
import Footer from '../Footer';
import Navbar from '../../layouts/Navbar';
import Rooms from '../Rooms';
import Slider from "react-slick";
import LeftArrow from "../../assets/left-arrow.svg"
import RightArrow from "../../assets/right-arrow.svg"
import CarouselComponent from '../Carousel/CarouselComponent';
import Cards from '../../layouts/Cards';
import DatePick from '../DatePicker';
import Selector from "../../layouts/Selector"

export default function Home() {
  return (
  <div className="App">
    <Navbar/>
     <img src={logo} alt="Hotel Front Facing" width="1230" height="900" className='img'/>
     <Selector/>
    {/* <DatePick/> */}
   {/* <CarouselComponent/> */}
    <br/><br/>
    {/* <CarouselComponent/> */}
    <Cards/>
    <Footer/>
</div>
    
  )
}
