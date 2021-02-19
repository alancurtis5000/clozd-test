import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Header from "../components/Header/Header";

import Users from "../pages/Users/Users";
import User from "../pages/User/User";
import NotFound from "../pages/NotFound/NotFound";

const Routes = withRouter(({ location }) => {
  return (
    <Switch location={location}>
      <Route path="/" exact component={Users} />
      <Route path="/clozd-test/" exact component={Users} />
      <Route path="/clozd-test/user/:id" component={User} />
      <Route component={NotFound} />
    </Switch>
  );
});

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
