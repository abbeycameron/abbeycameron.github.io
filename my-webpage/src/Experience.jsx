import { Typography, Box, Chip, Stack, Divider, ListItem } from "@mui/material";
import ImgMediaCard from "./CardFormat";

function Experience() {
  return (
    <>
      <Box sx={{ display: "flex", marginTop: 10, justifyContent: "center" }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Bonbon", color: "#db5cb1" }}
        >
          Experiences
        </Typography>
      </Box>

      <Box sx={{ marginTop: 4, maxWidth: 900, mx: "auto", textAlign: "left" }}>
        <Typography variant="h5" sx={styles.header}>
          Bachelor of Computing -{" "}
          <span style={{ color: "#db5cb1" }}> Queen's University</span>
        </Typography>

        <ListItem variant="body1" sx={styles.body}>
          Computer Science specialization with a focus in Fundamental Computing
        </ListItem>

        <Typography variant="h5" sx={styles.header}>
          Software Developer -{" "}
          <span style={{ color: "#db5cb1" }}>
            Centre for Advanced Computing
          </span>
        </Typography>

        <ListItem variant="body1" sx={styles.body}>
          Designed and developed web-based and mobile applications for
          not-for-profit and health organizations.
        </ListItem>
      </Box>

      <Divider></Divider>
      <Box sx={{ display: "flex", marginTop: 5, justifyContent: "center" }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Bonbon", color: "#db5cb1" }}
        >
          Toolbox
        </Typography>
      </Box>

      <Stack direction="row" spacing={1} justifyContent="center">
        <Chip sx={styles.chip} label="Python" variant="outlined"></Chip>
        <Chip sx={styles.chip} label="Javascript" variant="outlined"></Chip>
        <Chip sx={styles.chip} label="Typescript" variant="outlined"></Chip>
        <Chip sx={styles.chip} label="Java" variant="outlined"></Chip>
        <Chip sx={styles.chip} label="HTML" variant="outlined"></Chip>
      </Stack>

      <Stack direction="row" spacing={5} justifyContent="center" paddingTop={5}>
        <ImgMediaCard image="logo512.png" alt="React logo"></ImgMediaCard>
        <ImgMediaCard image="django-icon.svg" alt="django Logo"></ImgMediaCard>
        <ImgMediaCard image="mui-logo.png" alt="MUI Logo"></ImgMediaCard>
        <ImgMediaCard
          image="react-native-logo.png"
          alt="React Native Logo"
        ></ImgMediaCard>
      </Stack>
    </>
  );
}
export default Experience;

export const styles = {
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
    color: "#db5cb1",
    fontWeight: "bold",
  },
};
