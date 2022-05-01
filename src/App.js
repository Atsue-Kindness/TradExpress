import "./App.css";
import Instantbuy from "./Components/Instantbuy";
import Logina from "./Components/Logina";
import Getstarted from "./Components/Getstarted";
import Pagenotfound from "./Components/Pagenotfound";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

function App() {
  return <Outlet />;
}

export default App;
