import HomePage from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import { Divider } from "@mui/material";

export default function ScrollPage() {
  return (
    <>
      <div id="home" style={{ scrollMarginTop: "80px" }}>
        <HomePage />
      </div>
      <Divider></Divider>
      <div id="experience" style={{ scrollMarginTop: "80px" }}>
        <Experience />
      </div>
      <Divider></Divider>
      <div id="projects" style={{ scrollMarginTop: "80px" }}>
        <Projects />
      </div>
    </>
  );
}
