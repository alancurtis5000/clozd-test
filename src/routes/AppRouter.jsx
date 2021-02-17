import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';

import APage01 from '../pages/APage01/APage01';
import NotFound from '../pages/NotFound/NotFound';
import Landing from '../pages/Landing/Landing';
import StyleGuide from '../pages/StyleGuide/StyleGuide';

const Routes = withRouter(({ location }) => {
  return (
    <Switch location={location}>
      <Route path="/" exact component={Landing} />
      <Route path="/StyleGuide" component={StyleGuide} />
      <Route path="/Landing" component={Landing} />
      <Route path="/APage01" component={APage01} />
      <Route component={NotFound} />
    </Switch>
  );
});

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Footer />
      <div className="content">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
