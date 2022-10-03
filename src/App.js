import './App.css';
import Navbar from './layouts/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ShowUsers from './pages/ShowUsers';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Registration from './users/Register';
import Home from './components/HomePage/Home';
import Login from './components/Login';
import ShowBookings from './pages/ShowBookings';
import AdminDashboard from "./components/Admin-Dashboard/AdminDashboard"
import UserDashboard from './components/User-Dashboard/UserDashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Registration/>}></Route>
          <Route exact path="/admin-dashboard" element={<AdminDashboard/>}></Route>
          <Route exact path="/user-dashboard" element={<UserDashboard/>}></Route>
          <Route exact path="/about-us" element={<Footer/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
