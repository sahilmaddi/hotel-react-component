import React from 'react'
import './ROOMS.css'
import { useNavigate } from "react-router-dom";

const ROOMS = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <button
        className="Add_room"
        onClick={() => navigate('/Add_ROOM')}>
      
      <h5>
        Add ROOMS
      </h5>
      </button>
    </div>
    <div>
      <button
      className='Add_cat'
      onClick={() => navigate('/Add_Category')}>
        <h5>
          Add CATEGORIES
        </h5>
      </button>
    </div>
    </>
  
  )
}

export default ROOMS