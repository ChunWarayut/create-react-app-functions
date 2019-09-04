import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);
