// import logo from './logo.svg';
import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ScrollToTop from "./ScrollToTop"
import IndexPage from "./IndexPage"
import ServicesPage from "./ServicesPage"
import SkillsPage from "./SkillsPage"
import CoursesPage from "./CoursesPage"
import OthersPage from "./OthersPage"

function App() {
  return (
    <Router forceRefresh={true}>
      <div>
      <ScrollToTop />
        <Switch forceRefresh={true}>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/others" component={OthersPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;