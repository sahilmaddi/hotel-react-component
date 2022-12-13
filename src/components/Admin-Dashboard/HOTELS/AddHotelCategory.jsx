import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./AddHotelCategory.css";
export default function AddHotelCategory() {
  return (
    <>
      <br />
      <br />
      <Card sx={{ maxWidth: 345 }} className="div">
        <CardActionArea>
          <CardMedia component="img" height="140" image="" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Single Room
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            More Details...
          </Button> */}
        </CardActions>
      </Card>{" "}
      &emsp;&emsp;&emsp;
      <Card sx={{ maxWidth: 345 }} className="div">
        <CardActionArea>
          <CardMedia component="img" height="140" image="" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Double Room
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            More Details...
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
}
