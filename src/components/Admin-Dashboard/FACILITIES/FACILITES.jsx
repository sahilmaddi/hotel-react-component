import React from 'react'
import { useNavigate } from "react-router-dom";
// import './FACILITES.css'


const FACILITES = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <button
        className="cabs"
        onClick={() => navigate('/Cabs')}>
      
      <h5>
        CABS
      </h5>
      </button>
    </div>
    <div>
      <button
      className='laundry'
      onClick={() => navigate('/Laundry')}>
        <h5>
          LAUNDRY
        </h5>
      </button>
    </div>
    </> 
  )
}

export default FACILITES