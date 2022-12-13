import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function Menu ()  {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  return (
    <form onSubmit={handleSubmit}>
    <br/><br/>
    <label> ROOM ID : &emsp;&emsp;&emsp;
    <input 
      type="text" 
      name="FoodID" 
      value={inputs.FoodID || ""} 
      onChange={handleChange}
    />
    </label>
    <br/><br/>
    <label> Item Name: &emsp;&emsp;
      <input 
        type="text" 
        name="item name" 
        value={inputs.itemname || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label> Food Price : &emsp;&emsp;&emsp;
      <input 
        type="text" 
        name="f_price" 
        value={inputs.f_price || ""} 
        onChange={handleChange}
      />
      </label>
      
      <br/><br/>
      <label> Category ID : &emsp;&emsp;&emsp;
      <input 
        type="text" 
        name="food_CategoryID" 
        value={inputs.food_CategoryID || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <Button className="add" type="submit">
              ADD
            </Button>&emsp;&emsp;&emsp;
            <Button className="update" type="submit">
             UPDATE
            </Button>&emsp;&emsp;&emsp;
            <Button className="DELETE" type="submit">
              DELETE
            </Button>
  </form>
  )
}
export default Menu