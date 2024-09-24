const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const emailService = {
  async sendEmail(to, subject, text, html) {
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html
      });
      console.log('Mensaje enviado: %s', info.messageId);
      return info;
    } catch (error) {
      console.error('Error al enviar email:', error);
      throw error;
    }
  }
};

module.exports = emailService;