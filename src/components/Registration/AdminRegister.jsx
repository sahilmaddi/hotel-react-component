import React from "react";

import { useRef, useState } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiServices";

const AdminRegister = () => {
  // const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [msg, setMsg] = useState("");
  // const [selected, setSelected] = useState('yes');
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // const handleOtp=(e)=>{
  //   e.preventDefault();
  //   setMsg("");
  //   console.log(data);
  //   ApiService.sendOtp(data)
  //     .then((res) => {
  //       // console.log(res.data);
  //       alert("Otp sent");
  //       // navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setMsg(error.response?.data?.errorMessage?error.response.data.errorMessage:error.message);

  //     });
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    console.log(data);
    ApiService.admin_registration(data)
      .then((res) => {
        console.log(res.data);
        alert("Registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // alert("error");
        // setMsg(
        //   error.response?.data?.errorMessage
        //     ? error.response.data.errorMessage
        //     : error.message
        // );
      });
  };
  return (
    <div className="Auth-form-container section">
      <form
        onSubmit={handleSubmit}
        // className="Auth-form"
      >
        <div className="Auth-form-content">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="Auth-form-title">Sign Up </h1>
          <div className="form-group mt-3">
            <Row className="mb-1">
              <Form.Group
                as={Col}
                // className="form-control"
              >
                <Form.Label className="label">Name :</Form.Label>&emsp;&emsp;
                <input
                  type="text"
                  required
                  placeholder="&emsp;&emsp;Enter FirstName"
                  name="firstName"
                  defaultValue={data.firstName}
                  onChange={handleChange}
                />
                &ensp;
                <input
                  type="text"
                  placeholder="&emsp;&emsp;Enter LastName"
                  required
                  name="lastName"
                  defaultValue={data.lastName}
                  onChange={handleChange}
                />
                <br />
                <Form.Label htmlFor="Username" className="label">
                  Username :
                </Form.Label>
                &emsp; &emsp;
                <input
                  id="Username"
                  required
                  type="text"
                  message="please Enter UserName"
                  name="username"
                  title="enter UserName"
                  placeholder="&emsp;&emsp;Enter UserName"
                  defaultValue={data.username}
                  onChange={handleChange}
                  className="reg-input"
                />
                <br />
                <Form.Label className="label reg-input">Password :</Form.Label>
                &emsp;&emsp;
                <input
                  type="password"
                  required
                  placeholder="&emsp;&emsp;Enter password"
                  name="password"
                  defaultValue={data.password}
                  onChange={handleChange}
                />
                <br />
                <Form.Label htmlFor="email" className="label">
                  Email :
                </Form.Label>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &ensp;
                <input
                  id="email"
                  required
                  type="text"
                  message="please Enter Email"
                  name="email"
                  title="enter Email"
                  placeholder="&emsp;&emsp;Enter Email"
                  defaultValue={data.email}
                  onChange={handleChange}
                />
                <br />
                <Form.Label htmlFor="age" className="label">
                  Age :
                </Form.Label>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &ensp;&emsp;
                <input
                  id="Age"
                  required
                  type="number"
                  message="please Enter Age"
                  name="Age"
                  title="enter Age"
                  placeholder="&emsp;&emsp;&emsp;Enter Age"
                  defaultValue={data.age}
                  onChange={handleChange}
                />
                <br />
                <Form.Label htmlFor="phone number :" className="label">
                  Phone Number :
                </Form.Label>
                &emsp;&emsp;&emsp;&emsp;&emsp; &ensp;
                <input
                  id="phNo"
                  type="tel"
                  required
                  message="please enter correct number"
                  name="phNo"
                  title="enter phone number like +919999999999"
                  placeholder="&emsp;enter phoneNumber"
                  defaultValue={data.phNo}
                  onChange={handleChange}
                />
                <br />
                <p className="forgot-password text-right mt-2">
                  <Button className="btn-signup" type="submit">
                    submit
                  </Button>
                  &emsp;&emsp;
                  <Button
                    as={Link}
                    to="/"
                    variant="danger"
                    className="btn-signup"
                  >
                    Cancel
                  </Button>
                </p>
              </Form.Group>
            </Row>
            <br /> &emsp;&emsp;&emsp;
            <Row className="mb-2">
              <Form.Group as={Col}></Form.Group>
            </Row>
            <br />
            <Row className="mb-3">
              {/* <br /> */}
              {/* <Form.Group as={Col} >
        <Form.Label>Confirm Password :</Form.Label>&emsp;&emsp;&emsp;
        &ensp;

          <input type="password" 
           required
          placeholder="&emsp;Enter confirm password"
          name='confirmPassword' 
          defaultValue={data.confirmPassword}
          onChange={handleChange}/>
        </Form.Group> */}
            </Row>
            <br />
          </div>
          {/* <Row className="mb-3">
                <Form.Group as={Col} >
                <Form.Label>Gender : </Form.Label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
               

<input type="radio" value="Male" name="gender" /> Male

<input type="radio" value="Female" name="gender" /> Female

<input type="radio" value="Female" name="gender" /> other

  </Form.Group> 
  
    </Row>                 */}
          <br />

          {/* </Form.Group>
                <Form.Group as={Col} >   
         <Form.Label>Getotp</Form.Label> 
        <br></br> 
        <Button className="btn-signup btn-success" type="submit" onClick={handleOtp}>
               Get OTP
              </Button>

           
        </Form.Group>
                </Row>
                <p className='text-danger'><b>{msg}</b></p>
                <Row className="mb-3"> 
              <Form.Group as={Col} >
                <Form.Label htmlFor="otp">Please Enter Valid OTP :</Form.Label>&emsp;&emsp;&emsp;
          &ensp;

                <input
                  id="otp"
                 
                  type="text"
                  message="please Enter Validotp"
                  name="userOtp"    
                  required  
                  title="enter valid otp"
                  placeholder='&emsp;enter valid otp'
                  defaultValue={data.userOtp}
                  onChange={handleChange}
                /> */}
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
