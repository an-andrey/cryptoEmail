const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");
const ejsMate = require("ejs-mate");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

let forms = {
  rsaTxt: "",
  ceasarTxt: "",
  rsaAns: "",
  rsaCol: "",
  ceasarCol: "",
  ceasarAns: "",
  studentName: "",
  updateCol: "",
};

app.get("/", (req, res) => {
  res.render("main.ejs", { ...forms });
});

app.post("/ceasar", (req, res) => {
  ans = req.body.txt;
  forms.ceasarTxt = ans;
  forms.studentName = req.body.name;
  forms.updateCol = "ceasar";
  if (ans == "msg") {
    forms.ceasarCol = "green";
    forms.ceasarAns = "correct! - I will contact you soon";
    sendEmail(`${req.body.name} got the Ceasar Cipher question right!`);
  } else {
    forms.ceasarCol = "red";
    forms.ceasarAns = "wrong :(";
  }
  res.redirect("/");
});

app.post("/rsa", (req, res) => {
  ans = req.body.txt;
  forms.rsaTxt = ans;
  forms.updateCol = "rsa";
  forms.studentName = req.body.name;
  if (ans == 123) {
    forms.rsaCol = "green";
    forms.rsaAns = "correct! - I will contact you soon";
    sendEmail(`${req.body.name} got the RSA Cipher question right!`);
  } else {
    forms.rsaCol = "red";
    forms.rsaAns = "wrong :(";
  }
  res.redirect("/");
});

let sendEmail = async function (text) {
  //   const { email } = req.body;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "apikey", // ethereal user
      pass: process.env.SEND_EMAIL_PASS, // ethereal password
    },
  });

  const msg = {
    from: process.env.FROM_EMAIL, // sender address
    to: process.env.TO_EMAIL, // list of receivers
    subject: "Response", // Subject line
    text: `${text}`, // plain text body
  };
  // send mail with defined transport object
  const info = await transporter.sendMail(msg);

  console.log("Message sent!");
};

app.listen(3000, () => console.log("listening on port 3000"));
