import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function ACTIVITIES () {
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
    <label> Activity ID : &emsp;&emsp;&emsp;
    <input 
      type="text" 
      name="A_ID" 
      value={inputs.A_ID || ""} 
      onChange={handleChange}
    />
    </label>
    <br/><br/>
    <label> Activity Name: &emsp;&emsp;
      <input 
        type="text" 
        name="A_name" 
        value={inputs.A_name || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
   
      <label> Activity PRICE : &emsp;&emsp;
      <input 
        type="text" 
        name="A_price" 
        value={inputs.A_price || ""} 
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


export default ACTIVITIES