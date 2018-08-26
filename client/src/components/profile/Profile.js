import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSkills } from "../../actions/skillActions";
import { sendMessage } from "../../actions/messageActions";
import TextFieldGroup from "../form/TextFieldGroup";
import TextAreaFieldGroup from "../form/TextAreaFieldGroup";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      firstname: "",
      lastname: "",
      position: "",
      company: "",
      address: "",
      city: "",
      country: "",
      email: "",
      phone: "",
      message: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Skills pie: function to add one to the pie
  tick() {
    if (this.state.seconds < 100) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    } else {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    // Launch of function tick every 10mls
    this.interval = setInterval(() => this.tick(), 10);
    this.props.getSkills();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newMessage = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      position: this.state.position,
      company: this.state.company,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };
    this.props.sendMessage(newMessage, this.props.history);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { errors } = this.state;
    const skills = this.props.skills.skills
      .filter(skill => skill.category !== "5b6b209d8d0f33d94eac7995")
      .map(skill => (
        <div key={skill._id} className="col-sm-2 mb-5">
          <div className="card">
            <img
              className="card-img-top"
              src={`/uploads/${skill.name
                .toLowerCase()
                .replace(/\s/g, "")}.jpg`}
              alt={`${skill.name}`}
            />
            <div className="card-body">
              <p
                className="card-title text-center"
                style={{ fontSize: "0.7rem" }}
              >
                {skill.name}
              </p>
            </div>
          </div>
        </div>
      ));

    return (
      <div>
        <div className="container">
          <div className="row text-center mt-5 mb-3">
            <h2 className=" col-12 mb-3">
              We found the perfect web developer for you and his name is...
            </h2>
            <h2 className="col-12 mb-3 devname">Guillaume!</h2>{" "}
          </div>
          <div className="row mb-5">
            <div className="col-md-3 mt-3 pt-2">
              <img
                src="uploads/stamp.jpg"
                alt="It's a match!"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-6 mt-3">
              <h4>How lucky you are!</h4>
              <h5>Guillaume have 100% of the skills you have selected!</h5>
              <p>
                The next step is easy: read his profile to know more about him.
              </p>

              <p>
                If you like what you see, and I hope you will, fill in the form
                at the bottom of this page to leave him a message.
              </p>
              <p>Guillaume will get back to you very soon. </p>
              <p> Thank you again for using adopt a dev!</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 mt-5">
              <div className="pie-wrap">
                <div className="slice1 slice-wrap"> </div>
                <div className="slice2 slice-wrap"> </div>
                <div className="number">
                  <h3>{this.state.seconds}%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid alert-info">
          <div className="container">
            <div className="row ">
              <h2 className="col-12 mt-5">Guillaume's Bio</h2>
            </div>
            <div className="row alert-info">
              <div className="col-md-6 col-sm-12 mb-5 mt-4">
                <p>
                  Over the last 5 years, I have been traveling abroad, creating
                  and managing wordpress websites.
                </p>
                <p>
                  It was a great opportunity for me to learn and practice on
                  almost every aspects of a website.
                </p>
                <p>
                  I had to learn how to create and host a wordpress website.
                  Learn SEO, make keyword research, write optimized content, set
                  up a link building strategy and finally track my result in
                  term of ranking and traffic.
                </p>
                <p>
                  Besides, I learned bits of design and how to make logos.
                  Additionally, I achieved to keep in touch with my visitors
                  using social media, email lists and newsletters.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 mt-3">
                <p>
                  Back in France, I have decided to go deeper in coding and
                  learning new ways to create a website from scratch.
                </p>
                <p>
                  So far I have learned basic languages like HTML, CSS and
                  JavaScript. I can now build a backend with Node and express. I
                  am able to create a database with MySQL or MongoDB. Moreover I
                  know how to design a frontend with React and Redux.
                </p>
                <p>
                  My motto is learning something new everyday so stay tuned for
                  new abilities to come (currently learning Test Driven
                  Development with Jest).
                </p>
                <p>
                  I completed a full stack web developer training at the Wild
                  code school and I am currently looking for a web developer
                  intern job.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <h2 className="col-12">Professional skills</h2>
          </div>
          <div className="row mt-4">{skills}</div>
        </div>
        <div className="container-fluid alert-info">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6 col-sm-12 mb-5">
                <div className="row mb-5">
                  <h2 className="col-12 mt-5">Experience</h2>
                </div>
                <div className="row">
                  <p className="col-2">2018</p>
                  <p className="col-8">
                    <u>Wild code school formation</u>
                    <br /> full stack web developer training
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2017-2011</p>
                  <p className="col-8">
                    <u>Wordpress websites developer</u>
                    <br />
                    Creation and management of wordpress websites as a freelance
                    <br />
                    (5 years abroad)
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2011-2009</p>
                  <p className="col-8">
                    <u>Carpenter</u>
                    <br />
                    Carpenter in Paris, Annecy and Australia
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2007-2001</p>
                  <p className="col-8">
                    <u>Restaurant Manager</u>
                    <br />
                    Manager of company restaurants in Paris for Compass Group
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="row mb-5">
                  <h2 className="col-12 mt-5">Education</h2>
                </div>
                <div className="row mt-2">
                  <p className="col-2">2018</p>
                  <p className="col-8">
                    <u>Wild code school formation</u>
                    <br />
                    full stack web developer training
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2016</p>
                  <p className="col-8">
                    <u>Bachelor of French teacher</u>
                    <br />
                    Alliance Française of Sydney Australia
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2014</p>
                  <p className="col-8">
                    <u>Pastry chef diploma</u>
                    <br />
                    self-educated Paris France
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2008</p>
                  <p className="col-8">
                    <u>Carpenter diploma</u>
                    <br />
                    AFPA Meaux France
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">1999</p>
                  <p className="col-8">
                    <u>Bachelor of Management and Marketing in hospitality</u>
                    <br />
                    Hospitality school Le Castel Dijon France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-5 text-center">
              <img
                className="img-fluid"
                src="uploads/yourturn.jpg"
                alt="Enought about me"
              />
            </div>
            <div className="col-md-8 col-sm-12 mt-5">
              <div className="row col-12">
                <h2>Enough about me...</h2>
              </div>
              <div className="row col-12">
                <p>
                  I hope you had fun with my website and you like my profile.
                </p>
                <p>
                  If you do, that probably means we could achieve great projects
                  together. Save your time and fill in the form to let me know
                  how I can help!
                </p>
                <p>
                  If you don't, I am looking forward to some feedback. Maybe you
                  don't like the code or the design? Maybe you need skills that
                  are not in my profile.
                </p>
                <p>
                  If this is the case, please fill in the form and let me know.
                  Don't be afraid to hurt my feelings, I know there is always
                  room for improvement ;-)
                </p>
                <p>
                  No matter what, I wish you the best and may the force be with
                  you!
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 mb-5">
              <img
                className="img-fluid"
                src="uploads/expressyourself.jpg"
                alt="Express yourself"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 m-auto">
              {/* noValidate to get rid of html5 validation msg */}
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="First Name"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  error={errors.firstname}
                />
                <TextFieldGroup
                  placeholder="Last Name"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  error={errors.lastname}
                />
                <TextFieldGroup
                  placeholder="Position in the company"
                  name="position"
                  value={this.state.position}
                  onChange={this.onChange}
                  error={errors.position}
                />

                <TextFieldGroup
                  placeholder="Company name"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <TextFieldGroup
                  placeholder="Company address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={errors.address}
                />
                <TextFieldGroup
                  placeholder="Company city"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                  error={errors.city}
                />
                <TextFieldGroup
                  placeholder="Company country"
                  name="country"
                  value={this.state.country}
                  onChange={this.onChange}
                  error={errors.country}
                />

                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Phone number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />
                <TextAreaFieldGroup
                  placeholder="Can't wait to hear from you..."
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  error={errors.message}
                />

                <input
                  type="submit"
                  value="Send my message to Guillaume!"
                  className="btn btn-primary btn-block mt-4 subheading"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getSkills, sendMessage }
)(withRouter(Profile));
