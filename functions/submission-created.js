const { MailtrapClient } = require("mailtrap");

const TOKEN = process.env.TOKEN;
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const recipients = [
  {
    email: "byronc@nobleconsulting.kr",
  }
];

exports.handler = async function (event, context, callback) {
  // Parse the JSON text received.
  const { name, email, message } = JSON.parse(event.body);

  console.log(`Recieved a submission: ${JSON.stringify(JSON.parse(event.body))}`);

  const sender = {
    email: "website-notifications@nobleconsulting.kr",
    name: "Website Notification",
  };

  const headers = new Headers()
  headers.append("Content-Type", "application/json")

  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(event.body),
  }
  
  fetch("https://eog1wjkob2icej2.m.pipedream.net", options)


  // Build an HTML string to represent the body of the email to be sent.
  const html = `
  <div style="margin: 20px auto;">Name: ${name}</div>
  <div style="margin: 20px auto;">Email: ${email}</div>
  <div style="margin: 20px auto;">Message: ${message}</div>
    `

client
  .send({
    from: sender,
    to: recipients,
    subject: "Submission Form",
    html: html,
    category: "Integration Test",
  })
  .then(console.log, console.error);

}