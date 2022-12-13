import React from "react";
import ApiServices from "../services/ApiServices";
import { useState, useEffect } from "react";
import hyderabad from "../images/hyderabad.jpg";
import dropdown from "../images/dropdown.png";
const OurHotels = () => {
  const [locations, setLocations] = useState([]);
  const handleChange = (e) => { 
    ApiServices.getAllLocations()
    .then(setLocations(e.data))
  }
  return (
    <div>
      <table>
        <thead>
          <tr className="m-auto">
            <th>Sl.No.</th>
            &emsp;&emsp;
            <th>CityName</th>
            &emsp;&emsp;
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
          locations.map(location => 
          (
          <tr >
          <td>{location.id}</td>
          &emsp;&emsp;
          <td>{location.cityName}</td>
          &emsp;&emsp;
          <td>{location.address}</td>
          </tr>
          )
        )
          }
        </tbody>
      </table>
    </div>
  );
};

export default OurHotels;
