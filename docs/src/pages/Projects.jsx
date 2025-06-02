import * as React from "react";
import { Container, Typography, Box, Icon } from "@mui/material";
import { Grid } from "@mui/material";
import InfoCard from "../components/InfoCard";
import { styles } from "../components/Styles";

function Projects() {
  return (
    <Container
      id="projects"
      maxWidth={false}
      disableGutters
      sx={{ paddingBottom: 5, justifyContent: "center" }}
    >
      {/* Pink background box */}
      <Box
        sx={{
          width: 1300,
          height: 1600,
          backgroundColor: "#d945a8",
          borderRadius: 20,
          zIndex: 1,
          position: "relative",
          margin: "25px auto",
          padding: 5,
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              backgroundColor: "#e089c3",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              width: 300,
              boxShadow: 3,
              paddingX: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontFamily: "Bonbon", color: "#eee" }}
            >
              Projects
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}>
          {/* <Box
            sx={{
              backgroundColor: "#e089c3",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              width: 800,
              paddingTop: 2,
            }}
          > */}
          <Typography textAlign="center" width={750} sx={styles.bodywhite}>
            Below are a few projects I have worked on, some personal and some
            through my time at the Centre for Advanced Computing. Click on or
            hover over any project to learn more. More projects can be viewed on
            my GitHub.
          </Typography>
          {/* </Box> */}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 1 }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Delius Swash Caps", color: "#eee" }}
          >
            Personal
          </Typography>
        </Box>
        {/* Card Grid inside the pink box */}
        <Grid
          container
          spacing={10}
          justifyContent="center"
          sx={{
            position: "relative",
            zIndex: 2,
            paddingTop: 2,
          }}
        >
          <Grid item xs={12} lg={6}>
            <InfoCard
              title="Psychokinefish"
              content={
                <>
                  <Typography variant="body2" sx={styles.body}>
                    A 2D side scrolling game built using Unity and C# where you
                    play as a fish and defeat enemies each level. Designed and
                    developed all levels.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      marginTop: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img src="c-logo.png" alt="C#" width={60} height={60} />
                    <img
                      src="Official_unity_logo.png"
                      alt="Unity"
                      width={100}
                      height={50}
                    />
                  </Box>
                </>
              }
              CardBackground={{
                backgroundImage: `url("psychokinefish.png")`,
              }}
              href="https://chobbri.itch.io/psychokinefish"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InfoCard
              title="KFLA Parks - An Interactive Map"
              content={
                <>
                  <Typography variant="body2" sx={styles.body}>
                    A website that allows users to view a map of parks in the
                    KFLA region and mark them off as visited, as well as keep a
                    diary of their trips via a note taking feature.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      marginTop: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img src="logo192.png" alt="React" width={60} height={60} />
                    <img
                      src="django-icon.svg"
                      alt="django"
                      width={100}
                      height={50}
                    />
                  </Box>
                </>
              }
              CardBackground={{
                backgroundImage: `url("map.png")`,
              }}
              href="https://github.com/abbeycameron/abbey-onboarding"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InfoCard
              title="Quality Qode - CLI Task Manager System"
              content={
                <>
                  <Typography variant="body2" sx={styles.body}>
                    A CLI program that allows users to manage employees and
                    tasks. Black box, white box tests, and monkey patching have
                    been performed.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      marginTop: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="SQLAlchemy.png"
                      alt="SQLAlchemy"
                      width={110}
                      height={60}
                    />
                  </Box>
                </>
              }
              CardBackground={{
                backgroundImage: `url("codesnip.png")`,
              }}
              href="https://github.com/alesspanzica/quality-qode"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
            paddingTop: 5,
          }}
        >
          <Box
            component="img"
            src="queensCAC.svg"
            alt="Overlay"
            sx={{
              width: 80,
              height: 80,
              objectFit: "contain",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Delius Swash Caps",
                color: "#eee",
              }}
            >
              Centre for Advanced Computing
            </Typography>
            {/* <Typography
              variant="body"
              sx={{
                fontFamily: "Delius Swash Caps",
                color: "#eee",
              }}
            >
              Projects worked on during my internship
            </Typography> */}
          </Box>
        </Box>

        <Grid
          container
          spacing={10}
          justifyContent="center"
          sx={{
            position: "relative",
            zIndex: 2,
            paddingTop: 2,
          }}
        >
          <Grid item xs={12} lg={6}>
            <InfoCard
              title="Kingston in Focus Dashboard"
              content={
                <>
                  <Typography variant="body2" sx={styles.body}>
                    A project to display and share data about Kingston. Wrote
                    scripts to pull data from sources (e.g. Statistics Canada)
                    and visualized it as graphs and maps.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      marginTop: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img src="logo192.png" alt="React" width={60} height={60} />
                    <img
                      src="django-icon.svg"
                      alt="django"
                      width={100}
                      height={50}
                    />
                  </Box>
                </>
              }
              CardBackground={{
                backgroundImage: `url("graph.png")`,
              }}
              href="https://kingstoninfocus.ca/"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InfoCard
              title="Queen's Searchable Funding Database"
              content={
                <>
                  <Typography variant="body2" sx={styles.body}>
                    A website built for Queen's University using Javascript, PHP
                    and Wordpress. Performed bug fixes and maintenance of
                    website.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      marginTop: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="Wordpress-Logo.svg"
                      alt="Wordpress"
                      width={60}
                      height={60}
                    />
                  </Box>
                </>
              }
              CardBackground={{
                backgroundImage: `url("karen.png")`,
              }}
              href="https://www.queensu.ca/vpr/funding/search/"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;
