import React from 'react'
import ApiServices from '../services/ApiServices'
import {useState} from 'react'
const Locations = () => {
    //   useEffect(() => {
        const [locations,setLocations] =useState([]);
        ApiServices.getAllLocations()
        .then(response => response)
        .then(error => {console.log(error)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        
        })
    //   }, []
    //   )
     
    return (
       
    <div>
      {
        <table> 
            <thead>
                <tr>
                    <th>City Name</th> 
                    &emsp;&emsp;&emsp;&emsp;  
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                    {
                    locations.map(location =>
                    <tr>
                        <td>{location.cityName}</td>
                        &emsp;&emsp;&emsp;&emsp; 
                        <td>{location.address}</td>
                    </tr>
                    )
                }
            </tbody>
      
        </table>
} 
    </div>
  )
}

export default Locations
