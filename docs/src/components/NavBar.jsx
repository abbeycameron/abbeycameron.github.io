// Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { styles } from "./Styles";
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
  // const navigate = useNavigate();

  const location = useLocation();
  const lastHash = useRef("");

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#d945a8" }}>
        <Toolbar>
          <Typography
            sx={{ fontFamily: "Bonbon" }}
            variant="h4"
            onClick={() => window.scrollTo({ top: -10, behavior: "smooth" })}
          >
            Abbey Cameron
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Stack direction="row" spacing={1}>
              <Button style={styles.navButton} href="#/home#home">
                Home
              </Button>
              <Button style={styles.navButton} href="#/home#experience">
                Experience
              </Button>
              <Button style={styles.navButton} href="#/home#projects">
                Projects
              </Button>
              {/* <Button
                style={styles.navButton}
                onClick={() => navigate("/pets")}
              >
                Pets
              </Button> */}
              <a
                href="https://github.com/abbeycameron"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <img
                    src="/github-mark-white.png"
                    alt="GitHub"
                    style={{ width: 24, height: 24 }}
                  />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/abbey-cameron-b83670251/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <img
                    src="/InBug-White.png"
                    alt="LinkedIn"
                    style={{ width: 24, height: 24 }}
                  />
                </IconButton>
              </a>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 5 }}>{children}</Box>
    </div>
  );
}
