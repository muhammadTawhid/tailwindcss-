import "./App.css";
import Navbar from "./Components/Home/Navbar/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Body from "./Components/Home/Body/Body";

function App() {
  return (
    <Router>
      <Switch>
        <Navbar />
        <Body />
      </Switch>
    </Router>
  );
}

export default App;
