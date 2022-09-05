import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import Projects from "./sections/Projects";
import Introduction from "./sections/Introduction";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar/>
{/*       <Grid container justify="center">
        <Grid item>
        <Typography variant="h2">Hi, I'm Matilda</Typography>
        </Grid>
      </Grid> */}
      <Introduction/>

      <Projects/>
    </div>
  );
}

export default App;
