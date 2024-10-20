// pages/api/sendMail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { name, email, number, query } = req.body;

    // Create a transporter for sending the email
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other email services too (like Outlook, Yahoo, etc.)
        auth: {
            user: process.env.EMAIL_USER, // Use environment variables for sensitive data
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email content
    const mailOptions = {
        from: process.env.EMAIL_USER, // Your email
        to: 'your-email@example.com', // The email address to send the form data
        subject: `New Query from ${name}`,
        text: `
      You have received a new query:
      
      Name: ${name}
      Email: ${email}
      Contact Number: ${number}
      Query: ${query}
    `,
        html: `
      <h3>New Query Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${number}</p>
      <p><strong>Query:</strong> ${query}</p>
    `,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
    }
}
