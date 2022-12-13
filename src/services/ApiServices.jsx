import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://10.81.4.236:2021";
//post
const LOGIN_API_URL = `${BASE_URL}/login`;
// const GET_LOCATION =`${BASE_URL}/getByCityNameLetters/`;
const REGISTRATION_API_URL = `${BASE_URL}/user/registration`;
const GET_ALL_LOCATIONS =`${BASE_URL}/getAllLocations`
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
  getLocation(cityName) {
    return axios(`${BASE_URL}/getByCityNameLetters/${cityName}`);
  }
  getAllLocations() {
    return axios(GET_ALL_LOCATIONS);
  }

 
})
();
