import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ham from "../assets/ham.png";

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
      <div
      //   style={{ width: "100%" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Item>
                <img style={{ width: "10%" }} src={ham} alt="Hamilton" />
                Hamilton
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>Toronto</Item>
            </Grid>
            <Grid item xs={10}>
              <Item>Waterloo/Kitchener</Item>
            </Grid>
            <Grid item xs={10}>
              <Item>Montreal</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
