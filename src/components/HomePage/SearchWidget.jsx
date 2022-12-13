import React, { useEffect,useState  } from "react";
import "./SearchWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import ApiServices from "../../services/ApiServices";
import "./SearchWidget.css"
// import data from "./searchTerm.json"
// import {Link, useLocation } from "react-router-dom";

const SearchWidget = () => {
  const [locations, setLocations] = useState([]);
  const [data, setData] = useState([]);
  // const [status, setStatus] = useState(false)

  // const [errors, setErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
    useEffect(() => {
      ApiServices.getLocation(data)
        .then((response) => {
          setLocations(response.data);
          console.log(response.data);
          console.log(response.data.cityName)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
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
          onChange={handleChange}
          />
          <button className="search__button1 "
            // onClick={handleChange}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
             {locations.map((location) => (
              <div>
                <li >{location.cityName}</li>
                <li >{location.address}</li>
              </div>
            ))}
          </button>
        </form>
        
      </div>
    
    );
  }
;     
export default SearchWidget;