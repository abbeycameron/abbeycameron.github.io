import { Container, Typography, Box, Chip, Stack } from "@mui/material";
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
            height: 820,
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
            height: 820,
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
            top: 230,
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
            top: 270,
            left: 85,
            zIndex: 2,
            maxWidth: 600,
          }}
        >
          {" "}
          blah
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: 288,
            height: 420,
            top: 150,
            left: 800,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box
            component="img"
            src="IMG_3138.jpg"
            alt="Overlay"
            sx={{
              position: "absolute",
              // top: 80,
              // right: 0,
              width: 288,
              height: 360,
              borderRadius: 10,
              border: "7px solid #e089c3",
              objectFit: "contain",
              zIndex: 2,
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{
              position: "absolute",
              top: 400,
              left: 0,
              width: 300,
              zIndex: 1,
              gap: 1,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Chip label="Reading" sx={styles.chip2} variant="outlined" />
            <Chip label="Animals" variant="outlined" sx={styles.chip2} />
            <Chip label={"Dance"} sx={styles.chip2} variant="outlined" />
            <Chip
              label={"Roller Skating"}
              sx={styles.chip2}
              variant="outlined"
            />
            <Chip label="Scuba Diving" variant="outlined" sx={styles.chip2} />
          </Stack>
        </Box>

        {/*Hobbies box*/}
        <Box
          sx={{
            width: 650,
            height: 200,
            backgroundColor: "#e089c3",
            borderRadius: 15,
            position: "absolute",
            bottom: 150,
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
            bottom: 185,
            left: 85,
            zIndex: 2,
            maxWidth: 600,
          }}
        >
          Outside of work and school, I have various hobbies including dance,
          swimming, and playing roller derby. In addition, I have a strong love
          and interest in animals. I enjoy learning and doing new things.
        </Typography>
      </Box>
    </Container>
  );
}
export default HomePage;
