import { Container, Typography, Box } from "@mui/material";
import { styles } from "../components/Styles";

function HomePage() {
  return (
    <Container
      id="home"
      sx={{ marginTop: 10, display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ position: "relative", width: 2500, height: 850 }}>
        {/* Big Box */}
        <Box
          sx={{
            width: 1300,
            height: 750,
            backgroundColor: "#d945a8",
            borderRadius: 20,
            zIndex: 1,
            position: "absolute",
            transform: "translateX(-50%)",
            left: "50%",
          }}
        />
        <Box
          component="img"
          src="silver-metallic-textured-background.jpg"
          sx={{
            width: 1300,
            height: 750,
            borderRadius: 20,
            zIndex: 2,
            position: "absolute",
            opacity: 0.15,
            transform: "translateX(-50%)",
            left: "50%",
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
            top: 80,
            left: 380,
            transform: "translateX(-50%)",
            zIndex: 2,
            boxShadow: 3,
            paddingX: 2,
          }}
        />
        <Typography
          sx={{
            ...styles.title,
            position: "absolute",
            top: 85,
            left: 90,
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
            top: 180,
            left: 380,
            transform: "translateX(-50%)",
            zIndex: 2,
            boxShadow: 3,
            paddingX: 2,
          }}
        />
        <Typography
          sx={{
            ...styles.body,
            position: "absolute",
            top: 200,
            left: 85,
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
            top: 80,
            right: 90,
            width: 240,
            height: 300,
            borderRadius: 10,
            border: "7px solid #e089c3",
            objectFit: "contain",
            zIndex: 2,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
        {/*Hobbies box*/}
        <Box
          sx={{
            width: 650,
            height: 200,
            backgroundColor: "#e089c3",
            borderRadius: 15,
            position: "absolute",
            bottom: 240,
            left: 380,
            transform: "translateX(-50%)",
            zIndex: 2,
            boxShadow: 3,
            paddingX: 2,
          }}
        />
      </Box>
    </Container>
  );
}
export default HomePage;
