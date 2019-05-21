import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about.js";
function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}

export default AppRouter;
