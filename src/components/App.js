import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./navBar/navBar";
import Home from "./home/Home";
import Add from "./addCard/add";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={Add}></Route>
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
