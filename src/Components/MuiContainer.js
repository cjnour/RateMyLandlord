import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Cities from "../Pages/Cities";

export default function MuiContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Cities />
      </Container>
    </React.Fragment>
  );
}
