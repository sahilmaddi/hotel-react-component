import React, { useState } from "react";
import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Admindashboard.css";
// import Hotel from "../pages/Hotel";

function Admin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Navbar
        bg="red"
        expand="lg"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <p className="hero">Welcome to ADMIN Dashboard</p>
            <Nav.Link onClick={handleLogout} className="logout">
              Logout
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {/* Custom Modal Styling */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
      <div className="div">
        <button className="AddHotels" onClick={() => navigate("/Hotel")}>
          <h5>HOTELS</h5>
        </button>
      </div>
      <div>
        <button className="AddLocations" onClick={() => navigate("/Location")}>
          LOCATIONS
        </button>
      </div>
      <div>
        <button
          className="AddRoom"
          // style={{ backgroundImage: `url(${testt})` }}
          onClick={() => navigate("/Rooms")}
        >
          ROOMS
        </button>
      </div>
      <div>
        <button
          className="AddFood"
          // style={{ backgroundImage: `url(${testt})` }}
          onClick={() => navigate("/Food")}
        >
          FOOD
        </button>
      </div>
      <div>
        <button
          className="Facilities"
          // style={{ backgroundImage: `url(${testt})` }}
          onClick={() => navigate("/Facilities")}
        >
          FACILITES
        </button>
      </div>
      <div>
        <button
          className="BookingHistory"
          // style={{ backgroundImage: `url(${testt})` }}
          onClick={() => navigate("/Booking_History")}
        >
          BOOKING HISTORY
        </button>
      </div>
      <div>
        <button
          className="BookingStatus"
          // style={{ backgroundImage: `url(${testt})` }}
          onClick={() => navigate("/Booking_Status")}
        >
          CATEGORIES
        </button>
      </div>
      <div>
        <button
          className="Activties"
          // style={{ backgroundImage: `url(${testt})` }}
          onClick={() => navigate("/Activities")}
        >
          ACTIVITIES
        </button>
      </div>
    </>
  );
}

export default Admin;
