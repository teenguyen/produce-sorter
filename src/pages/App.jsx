import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import GroupPickerContainer from "../containers/GroupPickerContainer";
import SortPickerContainer from "../containers/SortPickerContainer";
import logo from "./../resources/logo.png";

const App = () => (
  <div className="wrapper">
    <div className="header flex flex-center">
      <Link to="/">
        <img src={logo} alt="PRODUCE 48 Logo" />
      </Link>
    </div>
    <div className="content">
      <Switch>
        <Route path="/sort" component={SortPickerContainer} />
        <Route component={GroupPickerContainer} />
      </Switch>
    </div>
    <div className="footer" />
  </div>
);

export default App;
