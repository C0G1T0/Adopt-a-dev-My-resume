import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteBasket } from "../../actions/basketActions";

class BasketContent extends Component {
  render() {
    const { basket } = this.props;
    const { deleteBasket } = this.props;
    let content;

    if (basket.basket.length === 1) {
      content = (
        <div className="col-md-12 text-center mt-3">
          <h3>0 skill ???</h3>
          <h4>
            You deserve a better developer!
            <br />
            <br /> Add some skills ;-)
          </h4>
        </div>
      );
    } else {
      content = basket.basket.filter(skill => skill !== "0").map(skill => (
        <div key={skill._id} className="col-12 pr-4 pl-4 pb-1 tex-center">
          <div className="row mb-0 pb-0">
            <div className="col-2 p-0 mb-0">
              <img
                className="img-fluid"
                src={`/uploads/${skill.name
                  .toLowerCase()
                  .replace(/\s/g, "")}.png`}
                alt={`${skill.name}`}
              />
            </div>
            <div className="col-8 text-center pt-2 mb-0 pb-0">
              <p>{skill.name}</p>
            </div>
            <div className="col-2 text-center pt-1 mb-0 p-0">
              <div className="btn btn-danger">
                <i
                  className="fa fa-trash"
                  onClick={() => deleteBasket(skill._id)}
                />
              </div>
            </div>
          </div>
        </div>
      ));
    }

    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  basket: state.basket
});

const mapDispatchToProps = {
  deleteBasket
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketContent);
