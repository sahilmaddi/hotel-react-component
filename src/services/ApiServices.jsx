import axios from "axios";



const BASE_URL = "http://10.81.4.222:2021";




//post

const LOGIN_API_URL = `${BASE_URL}/login`;



const REGISTRATION_API_URL = `${BASE_URL}/user/registration`;

const LOCATIONS_URL = `${BASE_URL}/getByLocationsName`;


export function auth() {

  const token = sessionStorage.getItem("Access_Token");

  console.log(token);

  const config = {

    headers: {

      "Access-Control-Allow-Origin": "*",

      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

      Authorization: `Bearer ${token}`,

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

   getLocations =  () => {
    axios.get(`${BASE_URL}getByLocationsName/{cityName}`)
   .then((response)=>{
    const allLocations=response.data.value;
   })
   .catch(error=>console.error(`Error:${error}`));
};



//   forgetPwd(data) {

//     return axios.post(FORGET_API_URL, data);

//   }

//   ResetPassword(data) {

//     return axios.post(RESETPASSWORD_API_URL, data);

//   }

//   sendOtp(data) {

//     return axios.post(REG_OTP_API_URL, data);

//   }

}

)();