import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      <PrivateRoute component={Home} exact path="/" />
      <PrivateRoute component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
