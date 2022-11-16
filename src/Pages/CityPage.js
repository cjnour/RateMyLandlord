import React from "react";
import { connect } from "react-redux";
import { setSelectedCity } from "../Redux/Main/MainActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import HouseMap from "../Components/HouseMap";
import { DataStore } from "@aws-amplify/datastore";
import { Review } from "../models";

await DataStore.save(
  new Review({
    address: "Lorem ipsum dolor sit amet",
    cleanliness: 1020,
    age: 1020,
    accomodations: 1020,
    overall: 123.45,
    renovated: true,
    would_recommend: true,
    pets: true,
    pests: true,
  })
);

const CityPage = (props) => {
  let tempRoute = window.location.pathname.substring(1);
  let arr = tempRoute.split("");
  arr.map((e, i) => {
    arr[0] = arr[0].toUpperCase();
    if (e === "-") arr[i + 1] = arr[i + 1].toUpperCase();
    return null;
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <h1>{arr}</h1>
      </div>
      <div>
        <Card sx={{ width: "50rem" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Review.address}
            </Typography>
            <div style={{ display: "flex" }}>
              <HouseMap style={{}} />
              <div>
                <Typography component="legend">Poptarts</Typography>
                <Rating name="read-only" value={1} readOnly />
                <Typography component="legend">Soap Quantity</Typography>
                <Rating name="read-only" value={4} readOnly />
                <Typography component="legend">Microwave Spin-Rate</Typography>
                <Rating name="read-only" value={5} readOnly />
              </div>
            </div>
            <Typography variant="body2" color="text.secondary">
              The landlord wouldn't stop sniffing my underwear, caught them on
              multiple accounts...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Report</Button>
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
