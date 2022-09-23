import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import Projects from "./sections/Projects";
import Skills from "./sections/Skills"
import Introduction2 from "./sections/Introduction2";
// import ProjectsTimeline from "./sections/ProjectsTimeline";
// import Contact from "./sections/Contact";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar position="sticky"/>
      <Container className="content-container">
{/*       <Grid container justify="center">
        <Grid item>
        <Typography variant="h2">Hi, I'm Matilda</Typography>
        </Grid>
      </Grid> */}
      <Introduction2/>
{/*       <ProjectsTimeline /> */}
      <Projects />
      <Skills/>
{/*       <Contact /> */}
      </Container>
    </div>
  );
}

export default App;
