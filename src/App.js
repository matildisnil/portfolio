import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import MyTimeline from "./components/MyTimeline";
import MyImage from "./components/MyImage";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar/>
      <MyImage/>
      Hello
      <MyTimeline/>
    </div>
  );
}

export default App;
