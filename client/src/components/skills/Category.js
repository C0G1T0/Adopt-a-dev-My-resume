import React, { Component } from "react";

import Skill from "./Skill";

class Category extends Component {
  render() {
    const categories = this.props.categories.map(category => (
      <div key={category._id} className="mb-5">
        <div className="row mb-3">
          <h2>{category.name}</h2>
        </div>
        <div className="row">
          <Skill skills={this.props.skills} category={category._id} />
        </div>
      </div>
    ));
    return <div>{categories}</div>;
  }
}

export default Category;
