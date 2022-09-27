import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Interface from "./Pages/Interface";

// import Login from "./Pages/LoginPage";
function App() {
  return (
    
    <Router >
      <Switch>
     
        <Route path="/">
          <Interface></Interface>
        </Route>
        {/* <Route  path="/">
          <Login />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
