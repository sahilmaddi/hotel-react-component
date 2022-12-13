import React from 'react';
import './App.css';
// import Navbar from './layouts/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import ShowUsers from './pages/ShowUsers';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Registration from './users/Register';
import Register from "./components/Registration/Register"
import Home from './components/HomePage/Home';
import Login from './components/Login/Login';
// import ShowBookings from './pages/ShowBookings';
import AdminDashboard from "./components/Admin-Dashboard/AdminDashboard"
import UserDashboard from './components/User-Dashboard/UserDashboard';
// import Footer from './components/Footer';
import OurHotels from './layouts/OurHotels';
// import popUp from './layouts/popUp';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/admin-dashboard" element={<AdminDashboard/>}></Route>
          <Route exact path="/user-dashboard" element={<UserDashboard/>}></Route>
          {/* <Route exact path="/about-us" element={<Footer/>}></Route> */}
          <Route exact path="/our-hotels" element={<OurHotels/>}></Route>
          <Route exact path="/show-users"></Route>
          <Route exact path="/guests" element={<popUp/>}></Route>
          <Route exact path="/locations" element={<Locations/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
