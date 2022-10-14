import axios from "axios";
import { Modal } from "bootstrap";
import ApiServices from "../../services/ApiServices";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Update from "../Update/Update";
const Location = () => {
  const [location, setLocation] = useState([]);
  const [status, setStatus] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [data,setData]=useState([]);
  useEffect(() => {
    ApiServices.getLocations()
      .then((res) => {
        setLocation(res.data);
        setStatus(true);
      })
      .catch((err) => {
        alert(err.message);
        setStatus(false);
      });
  }, []);

  const locationData = ApiServices.getLocations(location);
  locationData.forEach(function (location) {
    return locationData.push(location);
  });

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {/* Custom Modal Styling */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Update data={updateData} />
        </Modal.Body>
      </Modal>
      <div className="tableFixHead">
        <table>
          <thead>
            <tr>
             <th>ID</th>
             <th>City Name</th>
             <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.id}</td>
                  <td>{item?.cityName}</td>
                  <td>{item?.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Location;
