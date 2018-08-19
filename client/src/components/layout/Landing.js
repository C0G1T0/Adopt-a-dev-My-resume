import React, { Component } from "react";
import { connect } from "react-redux";

import { getCategories } from "../../actions/categoryActions";
import { getSkills } from "../../actions/skillActions";

import Category from "../skills/Category";
import Basket from "../basket/Basket";

class Landing extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getSkills();
  }
  render() {
    const { categories } = this.props.categories;
    const { skills } = this.props.skills;
    return (
      <div>
        <div className="container-fluid">
          <div className="row p-0">
            {/* <!-- CATEGORIES --> */}
            <div className="col-sm-12 col-md-8 col-lg-9 p-5 pt-1">
              <div className="mb-5 mt-2">
                <h1 className="welcome">Welcome on Adopt a dev!</h1>
                <h4 className="mb-5">
                  The best place to find your dream web developer
                </h4>
                <p>
                  If you are looking for a web developer, pick any skills you
                  need and add them to your shopping cart. When it's done, just
                  click on "Find my dev!".
                </p>
                <p>
                  We will select for you the best web developer profile in our
                  database, and if it matches what you are looking for, don't be
                  shy and let him/her know ;-)
                </p>
                <p>
                  If you are a web developer, click on register to create your
                  profile. It is totaly free and if your competence meets a
                  company's needs , you will receive a job offer really soon.
                </p>
                <h5>Have fun and thanks for using Adopt a dev...</h5>
              </div>
              <Category categories={categories} skills={skills} />
            </div>

            {/* <!-- SIDEBAR --> */}
            <div className="col-sm-12 col-md-4 col-lg-3 pt-5">
              <div className="sticky-top">
                <Basket />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getCategories, getSkills }
)(Landing);
