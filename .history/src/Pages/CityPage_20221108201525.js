import React from "react";
import { connect } from "react-redux";
import { setSelectedCity } from "../Redux/Main/MainActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HouseMap from "../Components/HouseMap";

const CityPage = (props) => {
  let tempRoute = window.location.pathname.substring(1);
  let arr = tempRoute.split("");
  arr.map((e, i) => {
    return (
    arr[0] = arr[0].toUpperCase()
    if (e === "-") arr[i + 1] = arr[i + 1].toUpperCase())
  });

  return (
    <div>
      <div>
        <h1>{arr}</h1>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia>
            <HouseMap />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCity: (e) => dispatch(setSelectedCity(e)),
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.MainReducer.cities,
    selectedCity: state.MainReducer.selectedCity,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
