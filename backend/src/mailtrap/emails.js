const { sender, MailTrapClient } = require("./mailtrap.config.js");
const {
  VERIFY_EMAIL,
  WELCOME_EMAIL,
  FORGOT_PASSWORD_EMAIL,
  RESET_PASSWORD_SUCCESSFULLY_EMAIL
} = require("./emailTemplate.js");
const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [
    {
      email
    }
  ];

  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your email",
      html: VERIFY_EMAIL.replace("{{Verification Code}}", verificationToken),
      category: " Email Verification"
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    throw new Error(`Error sending verification email: ${error}`);
  }
};

const sendWelcomeEmail = async (email, userName) => {
  const recipients = [
    {
      email
    }
  ];

  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Welcome to BlogVerse ✨✨✨",
      html: WELCOME_EMAIL.replace("{user_name}", userName),
      category: "Welcome Email"
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

const sendPasswordResetEmail = async (email, resetURL, name) => {
  const recipients = [
    {
      email
    }
  ];

  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Reset Password",
      html: FORGOT_PASSWORD_EMAIL.replace("{{reset}}", resetURL).replace(
        "{user_name}",
        name
      ),
      category: "Reset Password"
    });
    console.log(name);
    console.log("Email sent successfully", response);
  } catch (error) {
    throw new Error(`Error sending reset password email: ${error}`);
  }
};

const sendResetSuccessEmail = async (email, name) => {
  const recipients = [
    {
      email
    }
  ];

  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Reset Password Successfully",
      html: RESET_PASSWORD_SUCCESSFULLY_EMAIL.replace("{user_name}", name),
      category: "Reset Password Succesfully"
    });
    console.log(name);
    console.log("Email sent successfully", response);
  } catch (error) {
    throw new Error(`Error sending reset password email: ${error}`);
  }
};
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
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetSuccessEmail
};
