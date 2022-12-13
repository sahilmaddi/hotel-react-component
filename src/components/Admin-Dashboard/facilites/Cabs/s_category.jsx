import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

function s_category() {
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
    <label> Source ID : &emsp;&emsp;&emsp;
    <input 
      type="text" 
      name="S_ID" 
      value={inputs.S_ID || ""} 
      onChange={handleChange}
    />
    </label>
    <br/><br/>
    <label> Source Name: &emsp;&emsp;
      <input 
        type="text" 
        name="S_name" 
        value={inputs.S_name || ""} 
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

export default s_category