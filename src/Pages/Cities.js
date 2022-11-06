import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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
    <div>
      <h1>Cities</h1>
      <div style={{ width: "100%" }}>
        <Box>
          <Grid container spacing={2}>
            {props.cities.map((e) => {
              citiesDisplay.push(
                <Grid item xs={3} key={e} onClick={() => console.log(e)}>
                  <Item>
                    <img
                      style={{ width: "10rem", marginTop: "1rem" }}
                      src={require(`../assets/${e}.png`)}
                      alt={e}
                    />
                    <h3>{e}</h3>
                  </Item>
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
    // setCities: (cities) => dispatch(setCities(cities)),
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.MainReducer.cities,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
