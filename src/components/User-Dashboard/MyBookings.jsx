import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const MyBookings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    try {
      setLoading(true);
      const rooms = axios.get(`http://10.81.4.222:2021/getAllRooms`, {
        id: user.id,
      });
      console.log(rooms);
      setBookings(rooms.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }, []);

  return (
    <div>
      <div className="col-md-6">
        {bookings &&
          bookings.map((booking) => {
            return (
              <div key={booking.data.id} className="row bs">
                <div className="col-md-6">
                  <h1>
                    Hotel Category: {booking.data.hotelCategory.categoryName}
                  </h1>
                  <p>Booking Address: {booking.data.location.address}</p>
                  <p>Booking City Name: {booking.data.location.cityName}</p>
                  <p>
                    Assigned Activities:{" "}
                    {booking.data.hotelnames.assignedActivities.activityName}
                  </p>
                  <button>Book Again</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyBookings;
