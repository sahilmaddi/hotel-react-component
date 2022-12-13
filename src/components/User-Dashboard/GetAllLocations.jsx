import React, { useState, useEffect } from "react";
import ApiServices from "../../services/ApiServices";
import { Card, Input } from "semantic-ui-react";
import axios from "axios";
// import Search from "./Search"
const GetAllLocations = () => {
  const [locations, setLocations] = useState([]);
  const [search, setNewSearch] = useState("");
  const [result1, setResult] = useState([]);
  useEffect(() => {
    ApiServices.getAllLocations().then((data) => {
      setLocations(data.data);
      // console.log(locations.data);
      console.log(data.data);
      // console.log(locations);
    });
  }, []);
  const handleChange = async (e) => {
    setNewSearch(e.target.value);
    let key = e.target.value;
    let result = await ApiServices.getLocation(key).then((key) => {
      setLocations(key);
    });
    console.log(result);
    if (result) {
      setResult(result);
    }
    axios.get(`http://10.81.4.222:2021/getByCityNameLetters/${key}`);
  };
  const filtered =
    search.length === 0
      ? null
      : result1.filter((item) =>
          item.prodName.toLowerCase().includes(search.toLowerCase())
        );
  return (
    <div style={{ padding: 0 }}>
      <Input
        icon="search"
        placeholder="Search..."
        // onChange={() => setQuery(locations.cityName)}
        onChange={handleChange}
        style={{
          width: "300%",
          background: " #ffffff",
          border: "1px solid rgb(234 154 14 / 56%)",
          borderRadius: " 30px",
          marginTop: "10px",
        }}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        <>
          {/* <div class="mt-2 tableFixHead ">
          <table>
            <thead>
              <tr>
                <th scope="col" class="fixed-cell">
                  City Name
                </th>
                <th scope="col" class="fixed-cell">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="table">
              {locations.map((location, i) => {
                return (
                  <tr key={i}>
                    <td>{location.cityName}</td>
                    <td>{location.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}

          {locations
            // .filter((loc) => {
            //   if (query === "") {
            //     return loc;
            //   } else if (loc.cityName.includes(query)) {
            //     return loc.cityName;
            //   }
            // })
            .map((location, index) => {
              return (
                <>
                  <div className="box" key={index}>
                    <Card>
                      <Card.Content>
                        {/* <Card.Header>{location.id}</Card.Header> */}
                        <Card.Description>
                          {location.cityName} &emsp;
                          {location.address}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <br />
                  </div>
                </>
              );
            })}
        </>
      </Card.Group>
    </div>
  );
};

export default GetAllLocations;
