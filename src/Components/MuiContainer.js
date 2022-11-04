import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function MuiContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: "#005950", height: "65vh", width: "60vw" }} />
      </Container>
    </React.Fragment>
  );
}
