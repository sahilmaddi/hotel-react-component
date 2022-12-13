import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Location.css";

function Location() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label>
        {" "}
        Location Name: &emsp;&emsp;
        <input
          type="text"
          name="Locationname"
          value={inputs.Locationname || ""}
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
  );
}

export default Location;
