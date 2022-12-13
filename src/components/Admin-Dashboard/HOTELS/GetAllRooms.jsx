import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiServices from "../../../services/ApiServices";
import { Form } from "react-bootstrap";
import "./GetAllRooms.css";
import { Link } from "react-router-dom";
const GetAllRooms = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getAllRooms() {
      try {
        //   setLoading(true);
        const rooms = await (
          await axios.get(`http://10.81.4.236:2021/getAllRooms`, {
            user: user.id,
          })
        ).data;

        console.log(rooms);
        setBookings(rooms);
        //   setLoading(false);
      } catch (error) {
        // console.log(error);
        //   setLoading(false);
        setError(error);
        console.log(bookings);
      }
    }
    getAllRooms();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div>
        <div className="asd">
          {bookings.map((booking) => {
            return (
              <div key={booking.id} className="card container">
                <div className="gap-2">
                  <h1>
                    Hotel Name: {booking.hotelNames.hotelName.toUpperCase()}
                  </h1>
                  <p>
                    Room Type:{booking.roomscategory.roomType.toUpperCase()}
                  </p>
                  <p>
                    Booking Address:{" "}
                    {booking.hotelNames.location.address.toUpperCase()}
                  </p>
                  <p>
                    Hotel Category:
                    {booking.hotelNames.hotelCategory.categoryName.toUpperCase()}
                  </p>
                  <p>
                    Booking City Name:{" "}
                    {booking.hotelNames.location.cityName.toUpperCase()}
                  </p>
                  <p>
                    {/* Assigned Activities: */}
                    {booking.hotelNames.assignedActivities.map((i) => (
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="firstName">
                          <b> Assigned Activities:</b>
                        </Form.Label>
                        <Form.Control
                          name="assignedActivities"
                          id="assignedActivities"
                          required
                          type="text"
                          placeholder=""
                          // disabled={disabled ? "" : "disabled"}
                          defaultValue={i.activityName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    ))}
                  </p>
                  <Link to="/addHotelCategory">
                    <button className="black">Book Now</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetAllRooms;
