import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSelectedCity } from "../Redux/Main/MainActions";

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
    <div>
      <h1>Cities</h1>
      <div style={{ width: "100%" }}>
        <Box style={{ marginLeft: "5rem", marginRight: "5rem" }}>
          <Grid container spacing={2}>
            {props.cities.map((e) => {
              citiesDisplay.push(
                <Grid
                  item
                  xs={2}
                  key={e}
                  onClick={() => {
                    if (e !== props.selectedCity)
                      props.setSelectedCity(e.toString());
                  }}
                >
                  <Link to={`/${e.toLowerCase()}`}>
                    <Item>
                      <img
                        style={{ width: "60%", marginTop: "1rem" }}
                        src={require(`../assets/${e}.png`)}
                        alt={e}
                      />
                      <h3>{e}</h3>
                    </Item>
                  </Link>
                </Grid>
              );
              return null;
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
    setSelectedCity: (e) => dispatch(setSelectedCity(e)),
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.MainReducer.cities,
    selectedCity: state.MainReducer.selectedCity,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
