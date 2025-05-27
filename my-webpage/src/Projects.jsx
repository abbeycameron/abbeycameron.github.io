import "./App.css";
import * as React from "react";
import { Container, Typography, Box, Icon } from "@mui/material";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";

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
          height: 775,
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
          <Typography variant="h2" sx={{ fontFamily: "Bonbon", color: "#eee" }}>
            Projects
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              description="A 2D side scrolling game built using Unity and C# where you play as a fish and defeat enemies each level."
              CardBackground={{
                backgroundImage: `url("psychokinefish.png")`,
              }}
              href="https://chobbri.itch.io/psychokinefish"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InfoCard
              title="KFLA Parks - An Interactive Map"
              description="A website that allows users to view parks in the KFLA region and mark them off as visited, as well as keep a diary of their trips."
              CardBackground={{
                backgroundImage: `url("map.png")`,
              }}
              href="https://github.com/abbeycameron/abbey-onboarding"
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
            <Typography
              variant="body"
              sx={{
                fontFamily: "Delius Swash Caps",
                color: "#eee",
              }}
            >
              Projects worked on during my internship
            </Typography>
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
              description="A project made to display and share data about the Kingston area. Wrote scripts to pull data from sources like Statistics Canada and visualized it as graphs."
              CardBackground={{
                backgroundImage: `url("pug.jpg")`,
              }}
              href="https://kingstoninfocus.ca/"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InfoCard
              title="Queen's Searchable Funding Database"
              description=""
              CardBackground={{
                backgroundImage: `url("pug.jpg")`,
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
