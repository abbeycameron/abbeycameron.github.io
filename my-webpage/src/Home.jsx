import "./App.css";
import * as React from "react";
import { Container, Typography, Box } from "@mui/material";

function HomePage() {
  return (
    <Container
      sx={{ marginTop: 10, display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ position: "relative", width: 2500, height: 850 }}>
        {/* Big Box */}
        <Box
          sx={{
            width: 1300,
            height: "100%",
            backgroundColor: "#d945a8",
            borderRadius: 20,
            zIndex: 1,
            position: "relative",
          }}
        />
        {/* name box */}
        <Box
          sx={{
            width: 650,
            height: 70,
            backgroundColor: "#e089c3",
            borderRadius: 15,
            position: "absolute",
            top: 50,
            left: 380,
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        />
        <Typography
          sx={{
            ...styles.title,
            position: "absolute",
            top: 55,
            left: 80,
            zIndex: 2,
            color: "#eee",
          }}
        >
          {" "}
          Hello! My name is Abbey{" "}
        </Typography>
        {/*text*/}
        <Box
          sx={{
            width: 650,
            height: 200,
            backgroundColor: "#e089c3",
            borderRadius: 15,
            position: "absolute",
            top: 150,
            left: 380,
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        />
        <Typography
          sx={{
            ...styles.body,
            position: "absolute",
            top: 170,
            left: 80,
            zIndex: 2,
            maxWidth: 600,
          }}
        >
          {" "}
          Here is some text, blah blah blah some more text idk what im writing
          about i just need to fill the space. i like dogs and skating and
          reading and whatnot.
        </Typography>
        <Box
          component="img"
          src="IMG_3138.jpg"
          alt="Overlay"
          sx={{
            position: "absolute",
            top: 50,
            right: 150,
            width: 240,
            height: 300,
            borderRadius: 10,
            border: "7px solid #e089c3",
            objectFit: "contain",
            zIndex: 2,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </Box>
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
