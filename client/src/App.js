import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";
import "./App.css";

import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import ThankU from "./components/thank-you/ThankU";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/thank-you" component={ThankU} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
