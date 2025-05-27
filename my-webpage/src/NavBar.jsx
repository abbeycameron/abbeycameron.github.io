// Layout.jsx
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "./Styles";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#d945a8" }}>
        <Toolbar>
          <Typography
            sx={{ fontFamily: "Bonbon" }}
            variant="h4"
            onClick={() => navigate("/home")}
          >
            Abbey Cameron
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Stack direction="row" spacing={1}>
              <Button
                style={styles.navButton}
                onClick={() => navigate("/home")}
              >
                Home
              </Button>
              <Button
                style={styles.navButton}
                onClick={() => navigate("/experience")}
              >
                Experience
              </Button>
              <Button
                style={styles.navButton}
                onClick={() => navigate("/pets")}
              >
                Pets
              </Button>
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

      <Box sx={{ marginTop: 5 }}>
        <Outlet />
      </Box>
    </div>
  );
}
