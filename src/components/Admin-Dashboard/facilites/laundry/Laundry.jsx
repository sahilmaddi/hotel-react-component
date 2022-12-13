import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

function Laundry  ()  {
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
      <label> Laundry ID : &emsp;&emsp;&emsp;
      <input 
        type="text" 
        name="L_ID" 
        value={inputs.L_ID || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label> Laundry: &emsp;&emsp;
        <input 
          type="text" 
          name="Laundry" 
          value={inputs.Laundry || ""} 
          onChange={handleChange}
        />
        </label>
        <br/><br/>
      <label> Room Details: &emsp;&emsp;
        <input 
          type="text" 
          name="R_details" 
          value={inputs.R_details || ""} 
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

export default Laundry