const express = require('express');

const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(8000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'virtuososystem@gmail.com',
    pass: 'virtuosojobs1',
  },
});

contactEmail.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const { companyName, name, email, phone, message } = req.body;
  const mail = {
    from: name,
    to: 'sakthikrishnan143@gmail.com',
    subject: 'Contact Message',
    html: `<p>companyName: ${companyName}</p> <p>Name: ${name}</p><p>Email: ${email}</p> <p>Contact Number: ${phone}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, error => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});

router.post('/jobs', (req, res) => {

  const {
    name,
    email,
    phone,
    birthDate,
    qualification,
    gender,
    address,
    city,
    states,
    letter,
  } = req.body;
  const mail = {
    from: name,
    to: 'sakthikrishnan143@gmail.com',
    subject: 'Contact Message',
    html: `<p>Name: ${name}</p><p>BirthDate: ${birthDate}</p><p>Email: ${email}</p><p>Gender: ${gender}</p><p>Qualification: ${qualification}</p><p>Contact Number: ${phone}</p><p>Address: ${address}</p><p>City: ${city}</p><p>State: ${states}</p><p>Email: ${email}</p><p>File:</p> <p>FileImage: </p><p>Letter: ${letter}</p>`,
  };
  contactEmail.sendMail(mail, error => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});
