import React, { Component } from "react";
import { connect } from "react-redux";

import { addBasket, deleteBasket } from "../../actions/basketActions";

class Skill extends Component {
  render() {
    const { addBasket } = this.props;
    const { deleteBasket } = this.props;
    const { category } = this.props;

    const skills = this.props.skills
      .filter(skill => skill.category === category)
      .map(skill => (
        <div key={skill._id} className="col-sm-12 col-md-6 col-lg-4 mb-5">
          <div className="card">
            <img
              className="card-img-top"
              src={`/uploads/${skill.name.toLowerCase().replace(/\s/g, "")}`}
              alt={`${skill.name}`}
            />
            <div className="card-body">
              <h4 className="card-title">{skill.name}</h4>
              <p className="card-text">{skill.description}</p>

              <div className="row">
                <div className="col-sm-6">
                  <button
                    className="btn btn-success btn-block active mb-2"
                    onClick={() => addBasket(skill)}
                  >
                    Add
                  </button>
                </div>
                <div className="col-sm-6">
                  <button
                    className="btn btn-block btn-danger mb-2"
                    onClick={() => deleteBasket(skill._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));

    return <div className="row mb-10">{skills}</div>;
  }
}

const mapDispatchToProps = {
  addBasket,
  deleteBasket
};

export default connect(
  null,
  mapDispatchToProps
)(Skill);
