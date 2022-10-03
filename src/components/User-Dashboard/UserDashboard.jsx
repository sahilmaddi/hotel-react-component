import React from 'react'
import DatePick from '../DatePicker'
import Footer from '../Footer'
import UserNavbar from "./UserNavbar"
import Selector from "../../layouts/Selector"
const UserDashboard = () => {
  return (
    <>
        <UserNavbar/>
        <Selector/>
        <br/><br/>
        <Footer/>  
    </>  
  )
}

export default UserDashboard