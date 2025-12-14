const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Transporter Config
// NOTE: For Gmail, you must use an "App Password" not your regular password.
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST endpoint for contact form
app.post('/api/contact', async (req, res) => {
    const { name, company, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL, // Where you want to receive the leads
        subject: `New Inquiry from ${name} (${company || 'No Company'})`,
        text: `
            You have received a new message via your website contact form.

            Name: ${name}
            Company: ${company || 'N/A'}
            Email: ${email}
            
            Message:
            ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});

app.get('/', (req, res) => {
    res.send('Contact Server is Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
