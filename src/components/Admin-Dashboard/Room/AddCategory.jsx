import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function AddCategory ()  {
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
    <label> Category ID : &emsp;&emsp;&emsp;
    <input 
      type="text" 
      name="ID" 
      value={inputs.CategoryID || ""} 
      onChange={handleChange}
    />
    </label>
    <br/><br/>
    <label>Category Name: &emsp;&emsp;
      <input 
        type="text" 
        name="categoryname" 
        value={inputs.categoryname || ""} 
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

export default AddCategory