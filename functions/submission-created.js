require('dotenv').config()
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  try {

    // Parse the JSON text received.
    const { name, email, message } = JSON.parse(event.body).payload.data;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Send email with form data
    await sendEmail(name, email ,message);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' })
    };
  }
};

// Function to send email
async function sendEmail(name, email, message) {
  try {
    // Configure nodemailer with your email service
    const TOKEN = process.env.TOKEN;
    const RCPT  = process.env.RCPT;
    const  transport = nodemailer.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
          user: "api",
          pass: TOKEN
        }
      });    

    // Build an HTML string to represent the body of the email to be sent.
    const html = `
    <div style="margin: 20px auto;">Name: ${name}</div>
    <div style="margin: 20px auto;">Email: ${email}</div>
    <div style="margin: 20px auto;">Message: ${message}</div>
    `;

    // Email content
    const mailOptions = {
      from: 'website-notifications@nobleconsulting.kr',
      to: RCPT,
      subject: 'New Form Submission',
      html: html
    };

    // Send email
    await transport.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
}
