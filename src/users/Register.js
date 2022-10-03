import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
import "./Register.css"
export default function Registration() {

    let navigate=useNavigate()
    const[user,setUser]=useState({
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
        age:"",
        phoneNo:"",
    })

    const {firstName,lastName,username,email,password,age,phoneNo}=user

    const onInputChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value});
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://10.81.4.196:2021/user/registration",user)
        .then((res)=>{
            console.log(res.data);
        })
        .then((err)=>{
            console.log(err);
        })
        navigate("/");
    }

  return (
    <div className="flex card-container ">
        
            <div >
                <div 
                // className="col-md-12 offset-md-6 border rounded p-4 mt-6 shadow"
                >
                    <h2 class="text-center m-4">Register</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                         <div className="mb-3">
                        <label htmlFor="First Name" 
                        className='form-label'
                        >First Name</label>
                        <input type="text"
                        className='form-control' 
                        placeholder='Enter your First Name' 
                        name="First Name"  
                        onChange={(e)=>onInputChange(e)}/>
                        <label htmlFor="Last Name" 
                        className='form-label'>Last Name</label>
                        <input type={"text"} 
                        className='form-control' 
                        placeholder='Enter your Last Name' 
                        name="Last Name"  
                        onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="Username" className='form-label'>Username</label>
                        <input type="text" className='form-control' placeholder='Enter your Username' name="Username" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="E-mail ID" className='form-label'>E-mail ID</label>
                        <input type="text" className='form-control' placeholder='Enter your E-mail ID' name="Email ID"  onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="Password" className='form-label'>Password</label>
                        <input type="password" className='form-control' placeholder='Enter your Password' name="Password"  onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="Age" className='form-label'>Age</label>
                        <input type="number" className='form-control' placeholder='Enter your Age' name="Age"  onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="Phone Number" className='form-label'>Phone No.</label>
                        <input type="number" className='form-control' placeholder='Enter your Phone No.' name="Phone No."  onChange={(e)=>onInputChange(e)}/>
                    
                        </div>
                    <button type="submit" className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>

            </div>
        </div>
  );
}
