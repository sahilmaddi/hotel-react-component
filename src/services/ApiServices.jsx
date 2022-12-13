import axios from "axios";
import { useState } from "react";

// const BASE_URL = "http://10.81.4.222:2021"; //--venkatesh
// const BASE_URL = "http://10.81.4.196:2021"//--sriker
const BASE_URL = "http://10.81.4.236:2021"; //--niharika
// const BASE_URL = "http://10.81.4.192:2021"//--pranavi
const LOGIN_API_URL = `${BASE_URL}/login`;
// const GET_LOCATION =`${BASE_URL}/getByCityNameLetters/`;
const REGISTRATION_API_URL = `${BASE_URL}/user/registration`;
const GET_ALL_LOCATIONS = `${BASE_URL}/getAllLocations`;
const ADMIN_REGISTRATION_API_URL = `${BASE_URL}/admin/register`;
const GET_ALL_ROOMS = `${BASE_URL}/getAllRooms`;
const ADD_ROOM = `${BASE_URL}/saveHotel`;
export function auth() {
  const token = sessionStorage.getItem("Access_Token");
  console.log(token);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
      // Authentication: `Bearer ${token}`,
    },
  };
  return config;
}

export default new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  registration(data) {
    return axios.post(REGISTRATION_API_URL, data);
  }
  admin_registration(data) {
    return axios.post(ADMIN_REGISTRATION_API_URL, data);
  }

  getLocation(cityName) {
    return axios.get(`${BASE_URL}/getByCityNameLetters/${cityName}`);
  }
  async getAllLocations() {
    return await axios.get(GET_ALL_LOCATIONS);
  }
  getAllRooms() {
    axios.get(GET_ALL_ROOMS);
  }
  async addRoom() {
    await axios.post(ADD_ROOM);
  }
})();
