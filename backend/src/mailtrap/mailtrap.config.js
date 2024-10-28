const { MailtrapClient } = require("mailtrap");
require("dotenv").config();

const MailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Gia Huy"
};
// const recipients = [
//   {
//     email: "huy.pmg16@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

module.exports = {
  MailTrapClient,
  sender
};
