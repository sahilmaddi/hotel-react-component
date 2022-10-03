import React, { useState, useRef } from "react";
import { useNavigate,Link, Route } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import {user} from '../users/Register';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
const API_URL="http://10.81.4.196:2021";



const register = async() => {
  
    const {user}=await axios(API_URL+"/user/registration",{
      headers: {Accept:"application/json"}
      
    })
  // .post(API_URL + "/user/registration", data);
  // localStorage.setItem("user",JSON.token)
  
}

      
const adminRegister = (user) => {
      return axios.post(API_URL + "/admin/register",{user} );
}
//console.log(register.data)
export const login = async (username, password) => {
  const response = await axios
    .post(API_URL + "/login", {
      username,
      password
    });
    console.log(response.data)
  if (response.data.token) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export const AuthService = {
  register,
  adminRegister,
  login,
  logout,
  getCurrentUser,
};

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
async function loginUser(credentials) {
  return fetch('http://http://10.81.4.196:2021/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
const Login = ({setToken }) => {
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    // <Route path="/profile" element={<Profile/>}/>
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password)
      .then((res) => {
        navigate("/")
          // navigate("/profile");
          // window.location.reload();
        },
        // (error) => {
        //   const resMessage =
        //     (error.response &&
        //       error.response.data &&
        //       error.response.data.message) ||
        //     error.message ||
        //     error.toString();
        //   setLoading(false);
        //   setMessage(resMessage);
        // }
      ).catch(err=>alert(err.message));
    } else {
      setLoading(false);
    }
  }; 
 
  return (
    <form>

    <h3>Log in</h3>

    <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>

    <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>

    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
    <p className="forgot-password text-right">
         <a href="#">Forgot password?</a>
    </p>
</form>
 
  );
};

export default Login;