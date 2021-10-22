import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nodes from "./containers/Nodes";
import NotFoundPage from "./components/NotFoundPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Nodes} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
