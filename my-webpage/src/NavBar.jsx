// Layout.jsx
import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const fancyFont = { fontFamily: "Delius Swash Caps" };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#e089c3" }}>
        <Toolbar>
          <Typography
            sx={{ fontFamily: "Bonbon" }}
            variant="h4"
            onClick={() => navigate("/")}
          >
            Abbey Cameron
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Stack direction="row" spacing={1}>
              <Button style={styles.navButton} onClick={() => navigate("/")}>
                Home
              </Button>
              <Button
                style={styles.navButton}
                onClick={() => navigate("/pets")}
              >
                Pets
              </Button>
              <Button
                style={styles.navButton}
                onClick={() => navigate("/experience")}
              >
                Experience
              </Button>
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

export const styles = {
  navButton: {
    color: "#eee",
    fontFamily: "Delius Swash Caps",
    fontSize: "20px",
    textTransform: "none",
  },
};
