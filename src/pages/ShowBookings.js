import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import {useParams} from "react-router-dom"
export default function ShowBookings() {
    const [bookings,setBookings]=useState([])

    const {id}=useParams()
    useEffect(() => {
       loadBookings()
    },[]);
    const loadBookings=async()=>{
        const result=await axios.get("http://10.81.4.196:2021/api/room/getAllRooms")
        setBookings(result.data)
    }

    const deleteBookings=async(id)=>{
        await axios.delete(`http://10.81.4.196:2021/deleteByUserId/${id}`)
        loadBookings()
    }
return (
    <div className="container">
        <div className="py-4">
        <table className="table border shadow">
<thead>
    <tr>
    <th scope="col">User ID</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Username</th>
    <th scope="col">Password</th>
    <th scope="col">Email</th>
    <th scope="col">Age</th>
    <th scope="col">Phone No.</th>
    </tr>
</thead>
<tbody>
    {
        bookings.map((user,index)=>(
            <tr>
                <th key={index}>{index+1}</th>  
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.phoneNo}</td>
                <td>
                    <button className='btn btn-primary mx-2'>View</button>
                    <br/><br/>
                    <button className='btn btn-danger mx-2' onClick={()=>deleteBookings(user.index)}>Delete</button>
                </td>
            </tr>
        
        )
        )}
        </tbody>
        </table>
        </div>
        </div>
); 
        
    }