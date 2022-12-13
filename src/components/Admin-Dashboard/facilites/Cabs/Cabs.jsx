import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

function Cabs () {
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
 return(
<form onSubmit={handleSubmit}>
    <br/><br/>
    <label> CAB ID : &emsp;&emsp;&emsp;
    <input 
      type="text" 
      name="C_ID" 
      value={inputs.C_ID || ""} 
      onChange={handleChange}
    />
    </label>
    <br/><br/>
    <label> PRICE: &emsp;&emsp;
      <input 
        type="text" 
        name="C_PRICE" 
        value={inputs.C_PRICE || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
   
      <label> LOCATION ID : &emsp;&emsp;
      <input 
        type="text" 
        name="L_ID" 
        value={inputs.L_ID || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label> SOURCE ID : &emsp;&emsp;
      <input 
        type="text" 
        name="S_ID" 
        value={inputs.S_ID || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label> DESTINATION ID : &emsp;&emsp;
      <input 
        type="text" 
        name="D_ID" 
        value={inputs.D_ID || ""} 
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

export default Cabs