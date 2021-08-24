import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Admin/Login";
import Signup from "./Components/Admin/Signup";
import LandingPage from "./Components/Dashboard/LandingPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <PrivateRoute exact path="/LandingPage" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}
