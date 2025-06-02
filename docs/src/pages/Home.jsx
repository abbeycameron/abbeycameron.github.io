import { Container, Typography, Box, Chip, Stack } from "@mui/material";
import { styles } from "../components/Styles";

function HomePage() {
  return (
    <Container
      id="home"
      sx={{ mt: 10, display: "flex", justifyContent: "center", pt: 3, pb: 5 }}
    >
      <Box
        sx={{
          width: 1900,
          maxWidth: 1300,
          backgroundColor: "#d945a8",
          borderRadius: 20,
          p: 4,
          position: "relative",
          height: 700,
        }}
      >
        {/* Main Content: Text + Image Side by Side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 4,
            position: "relative",
            zIndex: 2,
            flexWrap: { xs: "wrap", md: "nowrap" },
            pt: 6,
          }}
        >
          {/* LEFT: Text Boxes */}
          <Stack
            spacing={4}
            sx={{
              flex: 1,
              minWidth: 0,
              rowGap: 3,
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                width: "90%",
                backgroundColor: "#e089c3",
                borderRadius: 20,
                p: 3,
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" sx={styles.title2}>
                Hello! My name is Abbey
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#e089c3",
                borderRadius: 20,
                p: 3.5,
                pt: 4,
                pb: 1,
                boxShadow: 3,
                width: "90%",
              }}
            >
              <Typography sx={styles.body}>
                I am a full stack developer working in software development. I
                have worked on both mobile and web-based applications. I enjoy
                creating unique user interfaces, each that form its own
                experience.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#e089c3",
                borderRadius: 20,
                p: 3.5,
                pt: 4,
                pb: 1,
                boxShadow: 3,
                width: "90%",
              }}
            >
              <Typography sx={styles.body}>
                Outside of work and school, I have various hobbies including
                dance, swimming, and playing roller derby. In addition, I love
                animals and enjoy learning new things about them. I like to
                learn new skills and share them with others.
              </Typography>
            </Box>
          </Stack>

          {/* RIGHT: Image and Chips */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 2,
              pt: 5,
              pr: 6,
            }}
          >
            <Box
              component="img"
              src="IMG_3138.jpg"
              sx={{
                width: 288,
                height: 360,
                borderRadius: 20,
                border: "7px solid #e089c3",
                objectFit: "contain",
                boxShadow: 3,
              }}
            />
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              justifyContent="center"
              sx={{ maxWidth: 300, rowGap: 1 }}
              pb={1}
            >
              {[
                "Reading",
                "Animals",
                "Dance",
                "Roller Skating",
                "Scuba Diving",
              ].map((hobby) => (
                <Chip
                  key={hobby}
                  label={hobby}
                  variant="outlined"
                  sx={{ color: "#fff", borderColor: "#fff", mb: 2 }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default HomePage;
