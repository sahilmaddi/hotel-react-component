import React from "react";
// import Navbar from './layouts/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ShowUsers from './pages/ShowUsers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Registration from './users/Register';
import Register from "./components/Registration/Register";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";
// import ShowBookings from './pages/ShowBookings';
import UserDashboard from "./components/User-Dashboard/UserDashboard";
// import Footer from './components/Footer';
import OurHotels from "./layouts/OurHotels";
// import popUp from './layouts/popUp';
// import Locations from "./pages/Locations";
import Admin from "./components/Admin-Dashboard/Admindashboard";
import Hotels from "./components/Admin-Dashboard/Hotel/Hotel";
import Location from "./components/Admin-Dashboard/Locations/Location";
import ACTIVITIES from "./components/Admin-Dashboard/ACTIVITIES/ACTIVITIES";
import BOOKING_STATUS from "./components/Admin-Dashboard/BOOKING STATUS/BOOKING_STATUS";
import BOOKING_HISTORY from "./components/Admin-Dashboard/BOOKING HISTORY/BOOKING_HISTORY";
import FACILITIES from "./components/Admin-Dashboard/FACILITIES/FACILITES";
import FOOD from "./components/Admin-Dashboard/FOOD/FOOD";
import ROOMS from "./components/Admin-Dashboard/ROOMS/ROOMS";
import AddHotels from "./components/Admin-Dashboard/HOTELS/AddHotels";
import AddResorts from "./components/Admin-Dashboard/HOTELS/AddResorts";
import AddRoom from "./components/Admin-Dashboard/Room/AddRoom";
import AddCategory from "./components/Admin-Dashboard/Room/AddCategory";
import Menu from "./components/Admin-Dashboard/FOODS/Menu";
import Categories from "./components/Admin-Dashboard/FOODS/Categories";
import Laundry from "./components/Admin-Dashboard/facilites/laundry/Laundry";
import Cabs from "./components/Admin-Dashboard/facilites/Cabs/Cabs";
import GetAllLocations from "./components/User-Dashboard/GetAllLocations";
import AdminRegister from "./components/Registration/AdminRegister";
import GetAllRooms from "./components/Admin-Dashboard/HOTELS/GetAllRooms";
import AddHotelCategory from "./components/Admin-Dashboard/HOTELS/AddHotelCategory";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          {/* <Route
            exact
            path="/admin-dashboard"
            element={<AdminDashboard />}
          ></Route> */}
          <Route
            exact
            path="/userDashboard"
            element={<UserDashboard />}
          ></Route>
          {/* <Route exact path="/about-us" element={<Footer/>}></Route> */}
          <Route exact path="/our-hotels" element={<OurHotels />}></Route>
          <Route exact path="/show-users"></Route>
          <Route exact path="/guests" element={<popUp />}></Route>
          {/* <Route exact path="/locations" element={<Locations />}></Route> */}
          <Route path="/adminDashboard" element={<Admin />} />
          <Route path="Hotel" element={<Hotels />} />
          <Route path="Location" element={<Location />} />
          <Route path="Activities" element={<ACTIVITIES />} />
          <Route path="Booking_History" element={<BOOKING_HISTORY />} />
          <Route path="Booking_Status" element={<BOOKING_STATUS />} />
          <Route path="Facilities" element={<FACILITIES />} />
          <Route path="Food" element={<FOOD />} />
          <Route path="Rooms" element={<ROOMS />} />
          <Route path="addHotels" element={<AddHotels />} />
          <Route path="addResorts" element={<AddResorts />} />
          <Route path="addRoom" element={<AddRoom />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="Cabs" element={<Cabs />} />
          <Route path="Laundry" element={<Laundry />} />
          <Route path="/locations" element={<GetAllLocations />} />
          <Route path="admin_register" element={<AdminRegister />} />
          <Route path="getallRooms" element={<GetAllRooms />} />
          <Route path="addHotelCategory" element={<AddHotelCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
