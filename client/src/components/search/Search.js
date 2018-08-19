import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Search extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/profile" />
    ) : (
      <div>
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mt-5">
              <h2>
                We are looking for you futur web developper
                <br />
                It should just take few seconds...
              </h2>
            </div>

            <div className="container-animation">
              <div className="dash one" />
              <div className="dash two" />
              <div className="dash three" />
              <div className="dash four" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
