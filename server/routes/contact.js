const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

// Validation rules
const contactValidationRules = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 50 }).withMessage('Name must be under 50 characters'),
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Please enter a valid email address'),
  body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 100 }).withMessage('Subject must be under 100 characters'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 1000 }).withMessage('Message must be under 1000 characters')
];

router.post('/', contactValidationRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  // Retrieve SMTP configs
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  console.log(`Received contact form submission from ${name} (${email}) - Subject: ${subject}`);

  // Check if SMTP is configured. If not, fallback to simulation mode.
  if (!smtpHost || !smtpUser || !smtpPass || !receiverEmail) {
    console.log('--- EMAIL SIMULATION MODE (SMTP configs missing) ---');
    console.log(`To: ${receiverEmail || 'Not Configured'}`);
    console.log(`From: "${name}" <${email}>`);
    console.log(`Subject: [Portfolio Contact] ${subject}`);
    console.log(`Message:\n${message}`);
    console.log('----------------------------------------------------');

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    return res.status(200).json({
      success: true,
      message: 'Message received successfully (simulated dev environment).'
    });
  }

  // Real SMTP Configuration
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort) || 587,
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // SMTP username is usually required to be the sender
      replyTo: email, // Set sender's real email as reply-to
      to: receiverEmail,
      subject: `[Portfolio Contact] ${subject}`,
      text: `You have received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h3>New Portfolio Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f5; padding: 15px; border-radius: 5px; border: 1px solid #e4e4e7;">${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully via Nodemailer.');
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Nodemailer error: ', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later or email directly.'
    });
  }
});

module.exports = router;
