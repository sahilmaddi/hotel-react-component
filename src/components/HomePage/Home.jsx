import { getLocations } from '../api/axios'
import React from 'react'
import logo from "../../images/hotel.jpg"
// import logo2 from "../../images/room2.webp"
// import wifi from "../../images/baseline_wifi_black_24dp.png"
// import Carousel  from 'react-elastic-carousel';
// import Item from '../Item'
// import location from '../../images/location.jpg'
// import logo3 from "../../images/room.jpg"
import './Home.css'
import Footer from '../Footer';
import Navbar from '../../layouts/Navbar';
// import Rooms from '../Rooms';
// import Slider from "react-slick";
// import LeftArrow from "../../assets/left-arrow.svg"
// import RightArrow from "../../assets/right-arrow.svg"
// import CarouselComponent from '../Carousel/CarouselComponent';
import Cards from '../../layouts/Cards';
// import DatePick from '../DatePicker';
// import Selector from "../../layouts/Selector"
import SearchWidget from './SearchWidget';
import { useState } from 'react';
import { useEffect } from 'react';
// import ListPage from './ListPage';
import CarouselComponent from './CarouselComponent';

export default function Home() {
  // const [locations, setLocations] = useState([])
  const [searchResults, setSearchResults] = useState([])


  return (
  <div className="App">
    <Navbar/>
    <CarouselComponent/>
    <SearchWidget/>
    {/* <Cards/> */}
    <Footer/>
</div>
    
  )
}
