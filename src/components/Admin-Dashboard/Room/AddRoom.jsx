import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function AddRoom  () {
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
      name="RoomID" 
      value={inputs.RoomID || ""} 
      onChange={handleChange}
    />
    </label>
    <br/><br/>
    <label> Room Number: &emsp;&emsp;
      <input 
        type="text" 
        name="Hotelname" 
        value={inputs.hotelname || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
   
      <label> ROOM PRICE : &emsp;&emsp;&emsp;
      <input 
        type="text" 
        name="r_price" 
        value={inputs.r_price || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
   
      <label> ROOM Status : &emsp;&emsp;&emsp;
      <input 
        type="text" 
        name="r_Status" 
        value={inputs.r_Status || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label> Category ID : &emsp;&emsp;&emsp;
      <input 
        type="text" 
        name="CategoryID" 
        value={inputs.CategoryID || ""} 
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

export default AddRoom