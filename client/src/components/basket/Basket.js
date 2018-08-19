import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BasketContent from "./BasketContent";

class Basket extends Component {
  render() {
    const basket = this.props.basket;
    const length = basket.basket.length - 1;
    let numberSkill;
    let disabled;
    length > 1 ? (numberSkill = "Skills") : (numberSkill = "Skill");
    length > 0 ? (disabled = false) : (disabled = true);

    return (
      <div
        className="col-sm-12 p-3 border rounded"
        style={{ borderWidth: "3px !important" }}
      >
        <div className="row">
          <div className="col-6">
            <img
              className="img-fluid"
              src="uploads/shopping-cart.png"
              alt="developer skills"
            />
          </div>
          <div className="col-6 text-center">
            <div>
              <button
                type="button"
                className="btn btn-primary rounded-circle btn-xl pt-2 mb-2"
                style={{ width: "90px", height: "90px" }}
              >
                <p className="skillCounter">{length}</p>
              </button>
            </div>
            <div className="col-md-12 mt-2 text-center">
              <h3>{numberSkill}</h3>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <BasketContent basket={basket} />
        </div>
        <Link to="/search">
          <div className="row mt-3 pr-4 pl-4">
            <button
              type="button"
              className="btn btn-primary btn-md btn-block findmydev"
              disabled={disabled}
            >
              Find my dev!
            </button>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket
});

export default connect(
  mapStateToProps,
  null
)(Basket);
