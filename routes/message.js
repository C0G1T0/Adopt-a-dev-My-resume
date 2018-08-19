const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const validateMessage = require("../validation/message");
const secrets = require("../config/keys");

const { service } = secrets;
const { email } = secrets;
const { password } = secrets;

const transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: email,
    pass: password
  }
});

router.post("/", (req, res) => {
  const { errors, isValid } = validateMessage(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    /* Envoi de l'email */
    const mailOptions = {
      from: email, // sender address
      to: email, // list of receivers
      subject: "Mail from Adoptadev", // Subject line
      html: `
    First Name: ${req.body.firstname}<br />
    Last Name: ${req.body.lastname}<br />
    Position: ${req.body.position}<br />
    Company: ${req.body.company}<br />
    Address: ${req.body.address}<br />
    City: ${req.body.city}<br />
    Country: ${req.body.country}<br />
    Email: ${req.body.email}<br />
    Phone: ${req.body.phone}<br />
    Message: ${req.body.message}
    `
    };

    transporter.sendMail(mailOptions, function(err) {
      if (err) res.status(400).json({ errors: err });
      else res.json({ firstname: req.body.firstname });
    });
  }
});

module.exports = router;
