import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/styles/App.css";

import Home from "./pages/Home";
import Trade from "./pages/Trade";
import Footer from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent />
        <Switch>
          <Route component={Trade} path="/trade" />
          <Route component={Home} path="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
