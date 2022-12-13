import React, { useEffect,useState  } from "react";
import "./SearchWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ApiServices from "../../services/ApiServices";
import "./SearchWidget.css"
import data from "./searchTerm.json"
import {Link, useLocation } from "react-router-dom";

const SearchWidget = () => {
 const [locations,setLocations]=useState([]);
 const [data,setData]=useState([]);
 const [status,setStatus]=useState(faBullseye);
 const [errors, setErrors] = useState(false);
 const handleChange =  (e) => {
  
  const result=ApiServices.getLocation(locations).then(res=>{
   setLocations(result);})
  .then(()=>{
   setData(locations.map(location=>{
    return location.cityName}))})
  .catch(err=>{
   setErrors(true)})
  // setLocations(result);
  setData({cityName:result})
  };
  return (
    <div className="abcd">
      <form
        className="search1"
        // onSubmit={handleSubmit}
        // value={filter}
      >
        <input
          className="search__input1"
          type="text"
          id="search"
          placeholder="Hotels Resorts,Restaurants and more..."
        //  onChange={(e)=>searchLocale(e.target.value)}
         />
        <button className="search__button1 "
        onClick={handleChange }
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div class="mt-2 tableFixHead ">
    <ul>
      {locations.map((location) => (
        <div>
        <li >{location.cityName}</li>
        <li >{location.address}</li>
        </div>
      ))}
    </ul>
      </div>
    </div>
    
  ); 
};      
export default SearchWidget;

