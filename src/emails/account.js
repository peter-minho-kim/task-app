const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'peterkim.mh@gmail.com',
    subject: 'Thanks for joining my dude',
    text: `Welcome to the app, ${name}`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'peterkim.mh@gmail.com',
    subject: 'why would you leave',
    text: `Goodbye, ${name}`
  });
};

module.exports = { sendWelcomeEmail, sendGoodbyeEmail };
