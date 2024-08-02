const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "monishadoodleblue@gmail.com",
    pass: "ummb uebz ycrq sfcw",
  },
});

const sendLowStockEmail = async (emails, buffer) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "monisharuthesh@gmail.com",
    subject: 'Low Availability Products',
    text: 'Please find attached the list of products with low availability.',
    attachments: [
      {
        filename: 'low_availability_products.xlsx',
        content: buffer,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};


module.exports = { sendLowStockEmail };