// Import express into our project
const express = require("express");
const nodemailer = require("nodemailer");

// Creating an instance of express function
const app = express();

// The port we want our project to run on
const PORT = 3000;
// Connecting to gmail service
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "archananair0808@gmail.com",
    pass: "jvxtyrceflkulfbf",
  },
});

// e-mail option
let mailOptions = {
  from: "archananair0808@gmail.com",
  to: "aswathyachussvmy@gmail.com",
  subject: "Test mail",
  text: "This is a test email",
};

// Method to send e-mail out
transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Email sent successfully");
  }
});

// Express allows us to listen to the PORT and trigger a console.log() when you visit the port
app.listen(PORT, () => {
  console.log(`Server is currently runing on port ${PORT}`);
});
