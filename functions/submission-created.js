const { MailtrapClient } = require("mailtrap");
const https = require("https");

const TOKEN = process.env.TOKEN;
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const recipients = [
  {
    email: "byronc@nobleconsulting.kr",
  }
];

const sender = {
  email: "website-notifications@nobleconsulting.kr",
  name: "Website Notification",
};


exports.handler = async function (event, context, callback) {
  // Parse the JSON text received.
  const { name, email, message } = JSON.parse(event.body);

  const data = JSON.stringify(JSON.parse(event.body));

  console.log(`Recieved a submission: ${JSON.stringify(JSON.parse(event.body))}`);

  const options = {
    host: "eog1wjkob2icej2.m.pipedream.net",
    port: 443,
    path: "/",
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },    
    body: JSON.stringify(event.body),
  }
  
  const req = https.request(options, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);
    
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });

  req.write(data);

  req.on('error', (e) => {
    console.error(e);
  });

  req.end();

  // Build an HTML string to represent the body of the email to be sent.
  const html = `
  <div style="margin: 20px auto;">Name: ${name}</div>
  <div style="margin: 20px auto;">Email: ${email}</div>
  <div style="margin: 20px auto;">Message: ${message}</div>
    `;

client
  .send({
    from: sender,
    to: recipients,
    subject: "Submission Form",
    html: html,
    category: "Submission",
  })
  .then(console.log, console.error);

}