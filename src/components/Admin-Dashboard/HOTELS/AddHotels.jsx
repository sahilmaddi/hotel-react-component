import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AddHotels.css";
import ApiServices from "../../../services/ApiServices";
async function AddHotels() {
  const [inputs, setInputs] = useState({});
  const [id, setId] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [activitiesAvailable, setActivitiesAvailable] = useState([]);
  const [activityName1, setActivityName1] = useState();
  const [activityName2, setActivityName2] = useState();
  const [activityName3, setActivityName3] = useState();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  const newRoom = {
    id,
    hotelName,
    activitiesAvailable: [activityName1, activityName2, activityName3],
  };
  try {
    const result = await ApiServices.addRoom(
      "http://10.81.4.236:2021/saveHotel",
      newRoom
    ).data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="hotel-form">
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <label>
          {" "}
          Hotel ID : &emsp;&emsp;&emsp;
          <input
            type="text"
            name="HotelID"
            value={inputs.HotelID || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Hotel Name: &emsp;&emsp;
          <input
            type="text"
            name="Hotelname"
            value={inputs.hotelname || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Category ID : &emsp;&emsp;&emsp;
          <input
            type="text"
            name="CategoryID"
            value={inputs.CategoryID || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Location ID : &emsp;&emsp;&emsp;
          <input
            type="text"
            name="LocationID"
            value={inputs.LocationID || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <Button className="add" type="submit">
          ADD
        </Button>
        &emsp;&emsp;&emsp;
        <Button className="update" type="submit">
          UPDATE
        </Button>
        &emsp;&emsp;&emsp;
        <Button className="DELETE" type="submit">
          DELETE
        </Button>
      </form>
    </div>
  );
}

export default AddHotels;
