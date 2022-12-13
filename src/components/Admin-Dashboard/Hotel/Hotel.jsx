import React from "react";
import "./Hotel.css";
import { useNavigate } from "react-router-dom";

const ROOMS = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button className="Add_Hotel" onClick={() => navigate("/addHotels")}>
          <h5>Add Hotel</h5>
        </button>
      </div>
      <div>
        <button className="Add_cati" onClick={() => navigate("/addResorts")}>
          <h5>Add CATEGORIES</h5>
        </button>
      </div>
      <div>
        <button
          className="GetAllRooms"
          onClick={() => navigate("/getallRooms")}
        >
          <h5>Get All Hotels</h5>
        </button>
      </div>
    </>
  );
};

export default ROOMS;
