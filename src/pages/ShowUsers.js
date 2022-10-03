import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import {useParams} from "react-router-dom"
    export default function ShowUsers() {
        const [users,setUsers]=useState([])

        const {id}=useParams()
        useEffect(() => {
           loadUsers()
        },[]);
        const loadUsers=async()=>{
            const result=await axios.get("http://10.81.4.196:2021/getAllUsers")
            setUsers(result.data)
        }

        const deleteUser=async(id)=>{
            await axios.delete(`http://10.81.4.196:2021/deleteByUserId/${id}`)
            loadUsers()
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
       
       
</tr>
</thead>
</table>
</div>
</div>
    )
    }


