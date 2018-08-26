import React, { Component } from "react";
import { connect } from "react-redux";

class ThankU extends Component {
  render() {
    const { contact } = this.props.contact;
    console.log(contact);
    return (
      <div className="container">
        <div className="row text-center mb-1">
          <div className="col-12 text-center">
            <p className="contact">Thank you {contact.firstname}</p>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-12 text-center">
            <h4>Your message has been sent and I will get back to you asap.</h4>
          </div>
          <div className="col-12 text-center">
            <h4>
              In the meantime, why don't you add me on LinkedIn
              <br /> so we can keep in touch easily?
            </h4>
          </div>
        </div>
        <div className="row p-3 text-center">
          <div className="col-12 text-center">
            <a
              href="https://www.linkedin.com/in/guillaume-nobis/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid p-3"
                src="/uploads/linkedin-contact.jpg"
                alt="Contact linkedin"
              />
            </a>
          </div>
        </div>
        <div className="row p-3 ">
          <div className="text-center col-12">
            <h2>See you soon {contact.firstname}!</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(
  mapStateToProps,
  null
)(ThankU);
