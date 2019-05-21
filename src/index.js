import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Work } from "./pages/work";

const routing = (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
