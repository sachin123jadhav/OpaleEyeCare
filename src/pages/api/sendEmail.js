const nodemailer = require('nodemailer');

// Email account credentials
const emailConfig = {
  username: 'contact@opaleyecare.com',
  password: 'Opal@2023',
  host: 'mail.opaleyecare.com',
  port: 465,
  secure: true,
};

// Create a transporter object using the SMTP details
const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.username,
    pass: emailConfig.password,
  },
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: emailConfig.username,
      to,
      subject,
      text,
    });

    console.log('Message sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

module.exports = sendEmail;
