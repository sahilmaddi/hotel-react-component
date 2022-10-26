import React, { useEffect } from "react";
import "./SearchWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchCard from "./SearchCard";
import axios from "axios";

const SearchWidget = ({ locations, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  // const [searchTerm, setSearchTerm] = useState("");
  // const [locationInfo,setLocationsInfo]=useState("");
  // const handleSearchChange = (e) => {
  //   if (!e.target.value) return setSearchResults(locations);

  //   const resultsArray = locations.filter(
  //     (location) =>
  //       locations.title.includes(e.target.value) ||
  //       locations.body.includes(e.target.value)
  //   );

  //   setSearchResults(resultsArray);
  // };
  // useEffect(() => {
  //   axios
  //     .get("http://10.81.4.222:2021/getByLocationsName/{cityName}")
  //     .then(function (response) {
  //       const location = response.data.location;
  //       console.log(response.data.location);
  //       return Promise.all(
  //         locations.map((location) =>
  //           axios.get(
  //             `http://10.81.4.222:2021/getByLocationsName/`
  //           )
  //         )
  //       );
  //     })
  //     .then((responses) => {
  //       console.log(responses);
  //       setLocationsInfo(
  //         responses.map((response) => ({
  //           "ID": response.data.id,
  //           "City Name":response.data.cityName,
  //           "Address":response.data.address
  //         }))
  //       );
  //     });
  // }, []);
  // const [filter, setFilter] = useState("");

  // // const searchText=(event)=>{
  // //   setFilter(event.target.value);
  // // }
  // locations
  //   .filter((location) => location.id.includes(searchTerm))
  //   .map((location) => {
      return (
        <div className="abcd">
          <form className="search" onSubmit={handleSubmit} 
          // value={filter}
          >
            <input
              className="search__input"
              type="text"
              id="search"
              // onChange={handleSearchChange}
              placeholder="Hotels Resorts,Restaurants and more..."
              // value={searchTerm}
              // onClick={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search__button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      );
    // });
};

export default SearchWidget;
