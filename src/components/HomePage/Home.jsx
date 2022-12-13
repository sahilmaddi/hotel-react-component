// import { getLocations } from '../api/axios'
import React,{ 
  // useState,
  // useEffect 
}  from 'react'
// import logo from "../assets_img/hotel.jpg"
import './Home.css'
import LocationCards from './LocationCards';
import NewResort from '../../layouts/NewResort';
import Navbar from '../../layouts/Navbar';
// import Cards from '../../layouts/Cards';
// import SearchWidget from './SearchWidget';
import CarouselComponent from './CarouselComponent';
import HomeFooter from '../HomeFooter';
// import Resorts from "../../layouts/Resorts"
// import slideData from "../../layouts/slideData"
import Map from "../../layouts/Map"
export default function Home() {
  // const [searchResults, setSearchResults] = useState([])
  // const[results,setResult]=useState([]);
  

  return (
  <div className="App">
    <Navbar/>
    <CarouselComponent/>
    <br/>
    <br/>
    <LocationCards/>
    <br/>
    <NewResort/>
    <br/>
    <Map/>
    <br/>
    <HomeFooter/>
</div>
    
  )
}
