import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ham from "../assets/ham.png";
import tor from "../assets/tor.png";
import mon from "../assets/mon.png";
import kit_wat from "../assets/kit_wat.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cities() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Cities</h1>
      <div style={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} onClick={(e) => console.log(e)}>
            <Grid item xs={3}>
              <Item>
                <img style={{ width: "10rem" }} src={ham} alt="Hamilton" />
                <h4>Hamilton</h4>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <img style={{ width: "10rem" }} src={tor} alt="Toronto" />
                <h4>Toronto</h4>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <img
                  style={{ width: "10rem" }}
                  src={kit_wat}
                  alt="Waterloo/Kitchener"
                />
                <h4>Waterloo/Kitchener</h4>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <img style={{ width: "10rem" }} src={mon} alt="Montreal" />
                <h4>Montreal</h4>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
