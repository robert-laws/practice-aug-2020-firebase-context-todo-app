import nodemailer from 'nodemailer';

// add password for local testing
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'bobcoder75@gmail.com',
    pass: '',
  },
});

export const sendEmail = ({ to, from, subject, message }) => {
  const mailOptions = {
    to,
    from,
    subject,
    text: message,
  };

  return transporter.sendMail(mailOptions);
};
