import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Work } from "./pages/work";
import { Clients } from "./pages/clients";
import Contact from "./pages/contact";
import "./styles.scss";

const routing = (
  <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/clients" component={Clients} />
        <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
