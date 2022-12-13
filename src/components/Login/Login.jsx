import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Link } from "react-router-dom";
//import Forgotpassword from './ForgotPassword/Forgotpassword';
//import axios from '../api/axios';
import jwt from "jwt-decode";
// import Userdashboard from './Userdashboard';
// import Admindashboard from './Admindashboard';
import { useNavigate } from "react-router";
import ApiService from "../../services/ApiServices";
import "./Login.css";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUser] = useState("");
  const navigate = useNavigate();
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errors, setErrors] = useState(false);
  const [success, setSuccess] = useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: username, password: password }];
  const ADMIN = "ADMIN";
  const USER = "USER";

  // useEffect(() => {
  //     userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //     setErrMsg('');
  // }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("user", true);
      navigate("/userDashboard");
    }
    const account2 = users.find((admin) => admin.username === username);
    if (account2 && account2.password === password) {
      localStorage.setItem("admin", true);
      navigate("/adminDashboard");
    }
    const loginData = { username: username, password: password };
    ApiService.login(loginData)
      .then((res) => {
        // console.log(res);
        sessionStorage.setItem("token", res.data.token.token);
        // const user = localStorage.getItem('user')
        const username = jwt(res.data.token.token).sub;
        console.log(res.data);
        sessionStorage.setItem("username", username);
        setErrors(false);
        alert(`Login Successful `);
        navigate("/");
        let path =
          res.data.role == ADMIN
            ? "/adminDashboard"
            : res.data.role == USER
            ? "/userDashboard"
            : "/";
        // res.data.role==USER?"/USER":"/"
        navigate(path);
      })
      .catch((errMsg) => {
        if (!errMsg?.response) {
          setErrMsg("No Server Response");
          navigate("/");
        } else if (errMsg.response?.status === 400) {
          setErrMsg("Missing Username or Password");
          navigate("/");
        } else if (errMsg.response?.status === 401) {
          setErrMsg("Unauthorized");
          navigate("/");
        } else {
          setErrMsg("Login Failed");
          navigate("/");
        }
        // errRef.current.focus();
        // console.log(error);
        // setErrors(true);
      });
  };
  return (
    <>
      <div className="section">
        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <Link to="/Home">Go to Home</Link>
            </p>
          </section>
        ) : (
          <section
          // className="section"
          >
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label> &emsp;
              <input
                type="text"
                id="username"
                placeholder="Username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={username}
                required
              />
              <br />
              <label htmlFor="Password">Password</label>&emsp;
              <input
                type="Password"
                id="Password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                required
              />
              <br />
              <br />
              <h6 className="h6-1">
                <a href="#Forgot Password">Forgot Password?</a>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              </h6>
              <button className="signin btn-1 link">Sign In</button>
            </form>
            <br />
            <br />
            <p>
              Need an Account?
              <span
              // className="line"
              >
                {/*put router link here*/}
                &emsp;
                <Link to="/Register" className="btn-2 link">
                  Sign Up
                </Link>
                <br />
                {/* or <br />
                            &ensp; */}
                {/* <Link to='#'className='btn-3 btn-failure link'>Forgot Password?</Link> */}
              </span>
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default Login;
