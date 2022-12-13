import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import DatePickerDemo from "./DatePicker";
import MyBookings from "./MyBookings";
const { TabPane } = Tabs;
const UserMenu = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    return () => {
      if (!user) {
        window.location.href = "/login";
      }
    };
  }, []);
  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="Profile" key="1">
          <h1>My Profile</h1>
          <br />
          <h1> Name:{user.username}</h1>
          <h1>Email:{user.email}</h1>
          <h1>Role:{user.isAdmin ? "Admin" : "User"}</h1>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
        <TabPane tab="Book Now" key="3">
          <DatePickerDemo />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UserMenu;
