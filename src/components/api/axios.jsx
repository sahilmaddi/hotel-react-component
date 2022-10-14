import axios from "axios"
import ApiServices from "../../services/ApiServices";
export const api = axios.create({
    baseURL: 'http://10.81.4.192:2021/getAllLocations'
})

export const getLocations = async ({id,cityName,address}) => {
   const response = await ApiServices.getLocations({id,cityName,address})
   return response.data
};
    

