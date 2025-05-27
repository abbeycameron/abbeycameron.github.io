import {
  Typography,
  Box,
  Chip,
  Stack,
  Divider,
  ListItem,
  Container,
} from "@mui/material";
import ImgMediaCard from "./CardFormat";
import { useState } from "react";
import { styles } from "./Styles";

function Experience() {
  const [selectedTag, setSelectedTag] = useState(null);

  const cards = [
    { image: "django-icon.svg", alt: "Django Logo", tags: ["Python"] },
    {
      image: "logo512.png",
      alt: "React logo",
      tags: ["Javascript", "Typescript", "CSS"],
    },
    {
      image: "mui-logo.png",
      alt: "MUI Logo",
      tags: ["Javascript", "Typescript"],
    },
    {
      image: "React-Native-Logo.png",
      alt: "React Native Logo",
      tags: ["Typescript", "CSS"],
    },
  ];

  const filteredCards = selectedTag
    ? cards.filter((card) => card.tags.includes(selectedTag))
    : cards;

  return (
    <>
      <Container id="experience" sx={{ paddingBottom: 5 }}>
        <Box sx={{ display: "flex", marginTop: 5, justifyContent: "center" }}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Bonbon", color: "#d945a8" }}
          >
            Experiences
          </Typography>
        </Box>
        <Box
          sx={{ marginTop: 4, maxWidth: 750, mx: "auto", textAlign: "left" }}
        >
          <Typography variant="h5" sx={styles.header}>
            Bachelor of Computing -{" "}
            <span style={{ color: "#d945a8" }}> Queen's University</span>
          </Typography>

          <ListItem variant="body1" sx={styles.body}>
            Computer Science specialization with a focus in Fundamental
            Computing
          </ListItem>

          <Typography variant="h5" sx={styles.header}>
            Software Developer -{" "}
            <span style={{ color: "#d945a8" }}>
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
            sx={{ fontFamily: "Bonbon", color: "#d945a8" }}
          >
            Toolbox
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", paddingBottom: 2, justifyContent: "center" }}
        >
          <Typography variant="h5" sx={styles.header}>
            Software Development Tools
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} justifyContent="center">
          {["Python", "Javascript", "Typescript", "CSS"].map((tag) => (
            <Chip
              key={tag}
              sx={styles.chip}
              label={tag}
              variant="outlined"
              clickable
              onClick={() => setSelectedTag(tag)}
            />
          ))}
          <Chip
            label="All"
            variant="outlined"
            clickable
            onClick={() => setSelectedTag(null)}
            sx={styles.chip}
          />
        </Stack>

        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          paddingTop={5}
        >
          {filteredCards.map((card, index) => (
            <ImgMediaCard key={index} image={card.image} alt={card.alt} />
          ))}
        </Stack>

        <Box sx={{ display: "flex", padding: 2, justifyContent: "center" }}>
          <Typography variant="h5" sx={styles.header}>
            Other Languages
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} justifyContent="center">
          {["HTML", "C", "C++", "Java"].map((tag) => (
            <Chip key={tag} sx={styles.chip} label={tag} variant="outlined" />
          ))}
        </Stack>
      </Container>
    </>
  );
}
export default Experience;
