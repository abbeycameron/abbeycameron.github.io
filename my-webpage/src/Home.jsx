import "./App.css";
import * as React from "react";
import { Container, Typography } from "@mui/material";

function HomePage() {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography sx={styles.title}> Hello</Typography>
    </Container>
  );
}
export default HomePage;

export const styles = {
  title: {
    color: "#d945a8",
    fontFamily: "Bonbon",
    variant: "h3",
    fontSize: "48px",
  },
  header: {
    color: "#000",
    fontFamily: "Delius Swash Caps",
    fontSize: "27px",
    textTransform: "none",
  },
  body: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    paddingBottom: 3,
  },
  chip: {
    fontFamily: "Open Sans",
    color: "#d945a8",
    fontWeight: "bold",
  },
};
