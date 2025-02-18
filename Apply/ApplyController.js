const User = require('./ApplySchema');  
const nodemailer = require('nodemailer');

const createApplyUser = async (req, res) => {
    try {
        const { fullName, email, experience, phone, resume,jobName  } = req.body;

        if (!resume ) {
            return res.status(400).json({ message: 'Invalid resume' });
        }

        const newUser = new User({
            fullName,
            email,
            experience,
            phone,
            resume,
            jobName
        });

        await newUser.save();

        res.status(201).send({
            message: 'Application submitted successfully!',
            apply: newUser,
        });
    } catch (error) {
        console.error('Error in creating user:', error);
        res.status(500).send({
            message: 'Error in submitting application',
            error: error.message,
        });
    }
};

const getAllApply = async (req, res) => {
    try {
        const users = await User.find().sort({ _id: -1 });;
        res.send(users);
    } catch (error) {
        console.error('Error in retrieving users:', error);
        res.status(500).json({
            message: 'Error in retrieving users',
            error: error.message,
        });
    }
};

const sendMail = async (req, res) => {
    const { email, subject, text } = req.body;
    const fileUrl = req.fileUrl; // Use the URL set by Cloudinary middleware

    if (!email || !subject || !text) {
        return res.status(400).json({ error: "Email, subject, and text are required" });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: text,
            attachments: fileUrl ? [{ path: fileUrl }] : []
        };

        console.log("Sending email with options:", mailOptions);

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        if (error.code === 'EAUTH') {
            console.error("Authentication error:", error);
            res.status(401).json({ message: "Authentication failed. Please check your email credentials." });
        } else {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Failed to send email", error: error.message });
        }
    }
};

module.exports = { createApplyUser, getAllApply, sendMail, };
