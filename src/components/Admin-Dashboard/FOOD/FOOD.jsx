import React from 'react'
import { useNavigate } from "react-router-dom";
import './FOOD.css'
const FOOD = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <button
        className="FM"
        onClick={() => navigate('/menu')}>
      
      <h5>
        FOODS MENU
      </h5>
      </button>
    </div>
    <div>
      <button
      className='FC'
      onClick={() => navigate('/categories')}>
        <h5>
          CATEGORIES
        </h5>
      </button>
    </div>
    </> 
  )}

export default FOOD