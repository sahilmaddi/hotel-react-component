import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import test4 from "../images/room.jpg"
import test3 from "../images/room2.webp"
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import "./Cards.css"
export default function Cards()  {
  return (
    <>
    <CardGroup >
    <Card style={{ width: '100%',height:'100% !important',color:"white"}} className="hyd">
      <Card.Img variant="top"
    //    src={test4} 
      />
      <Card.Body>
        {/* <Card.Title>Room</Card.Title> */}
       <Card.Text>
        {/* <SignalWifi4BarIcon/> Wi-Fi
        <br/>
          <SingleBedIcon/> Single Bed 
          <br/> */}
          {/* <EditLocationIcon/>  */}
        <center className="text-color">&emsp; <br /> Hyderabad<br/>3 Hotels</center>
        
        </Card.Text> 
        {/* <br/> */}
       {/* <Button variant="primary">Book Now</Button> */}
     </Card.Body>
    </Card> &nbsp;&nbsp;
    <Card style={{ width: '100%' }} className="bang">
      <Card.Img variant="top"
    //    src={test3}
            />
      {/* <Card.Body>
        <Card.Title>Room</Card.Title>
     <Card.Text>
     <SignalWifi4BarIcon/> Wi-Fi
        <br/>
          <SingleBedIcon/> Single Bed 
          <br/> */}
          {/* <EditLocationIcon/>  */}
        <center className="text-color">&emsp;<br />&ensp;<br/> Bangalore<br/>9 Hotels</center> 
        
        {/* </Card.Text> 
        <br/>
       <Button variant="primary">Book Now</Button> 
      </Card.Body> */}
    </Card>  &nbsp;&nbsp;
    <Card style={{ width: '100%' }} className="che">
      {/* <Card.Img variant="top" src={test3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
     <Card.Text>
     <SignalWifi4BarIcon/> Wi-Fi
        <br/>
          <SingleBedIcon/> Single Bed 
          <br/> */}
          {/* <EditLocationIcon/> Vijayawada */}
        <center className="text-color"> &emsp;<br />&ensp;<br/> Chennai
        <br/> 6 Hotels </center> 
       
        {/* </Card.Text> 
        <br/>
       <Button variant="primary">Book Now</Button> 
      </Card.Body> */}
    </Card>  &nbsp;&nbsp;
    <Card style={{ width: '150%' }} className="bez">
      {/* <Card.Img variant="top" src={test4} /> */}
      <Card.Body>
        <Card.Title><center className="text-color">&emsp;<br />Vijayawada
        <br/>1 Hotel 
        </center>
        
        </Card.Title>
        
     {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
       <Button variant="primary">Go somewhere</Button>  */}
      </Card.Body>
    </Card>  &nbsp;&nbsp;
    {/* <Card style={{ width: '50%' }}> */}
      {/* <Card.Img variant="top" src={test5} /> */}
      {/* <Card.Body>
        <Card.Title>Card Title</Card.Title>
     <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
       <Button variant="primary">Go somewhere</Button> 
      </Card.Body>
    </Card>  */}
    </CardGroup>
    </>
  )
}
