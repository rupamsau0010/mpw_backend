// import logo from './logo.svg';
import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import IndexPage from "./IndexPage"
import ServicesPage from "./ServicesPage"
import SkillsPage from "./SkillsPage"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/skills" component={SkillsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
