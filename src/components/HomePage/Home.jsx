import { getLocations } from '../api/axios'
import React from 'react'
import logo from "../../images/hotel.jpg"

import './Home.css'
import Footer from '../Footer';
import Navbar from '../../layouts/Navbar';

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
    {/* <SearchWidget/> */}
    {/* <Cards/> */}
    <Footer/>
</div>
    
  )
}
