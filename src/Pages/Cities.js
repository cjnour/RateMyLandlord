import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Hamilton from "../assets/ham.png";
import Toronto from "../assets/tor.png";
import Montreal from "../assets/mon.png";
import Kitchener_Waterloo from "../assets/kit_wat.png";
import { connect } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cities = (props) => {
  let citiesDisplay = [];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Cities</h1>
      <div style={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} onClick={(e) => console.log(e)}>
            {props.cities.map((e) => {
              citiesDisplay.push(
                <Grid item xs={3}>
                  <Item>
                    <img style={{ width: "10rem" }} src={e} alt={e} />
                    <h4>{e}</h4>
                  </Item>
                </Grid>
              );
            })}
            {citiesDisplay}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setCities: (cities) => dispatch(setCities(cities)),
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.MainReducer.cities,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
