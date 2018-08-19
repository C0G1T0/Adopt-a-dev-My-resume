const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateMessage(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.position = !isEmpty(data.position) ? data.position : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First name is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name is required";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company is required";
  }
  if (Validator.isEmpty(data.position)) {
    errors.position = "Position is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (Validator.isEmpty(data.message)) {
    errors.message = "Message is required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address is required";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "City is required";
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = "Country is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
