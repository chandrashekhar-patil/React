const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("./models/User"); // Assuming you have a User model
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

router.post("/forgot", async (req, res) => {
  const { email } = req.body;
  console.log("Received password reset request for email:", email);

  try {
    const user = await User.findOne({ email });
    
    // Always return the same response to avoid revealing existing emails
    if (!user) {
      return res.status(200).json({ message: "If this email exists, a reset link has been sent." });
    }

    const token = crypto.randomBytes(20).toString("hex");
    console.log("Generated reset token:", token);

    user.resetToken = token;
    user.tokenExpiry = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

    const resetLink = `http://localhost:5173/reset?token=${token}`;
    
    try {
      await sendResetEmail(email, resetLink);
    } catch (error) {
      console.error("Error sending reset email:", error);
      return res.status(500).json({ error: "Failed to send reset email" });
    }

    return res.status(200).json({ message: "If this email exists, a reset link has been sent." });
  } catch (error) {
    console.error("Error processing forgot password request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/reset", async (req, res) => {
  const { token, new_password } = req.body;
  console.log("Reset request received for token:", token);

  try {
    const user = await User.findOne({ resetToken: token, tokenExpiry: { $gt: Date.now() } });
    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    user.password = await bcrypt.hash(new_password, 10);
    user.resetToken = null;
    user.tokenExpiry = null;
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error processing password reset:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

async function sendResetEmail(email, resetLink) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log("Sending reset email to:", email);

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Password Reset Link",
    html: `<p>Click the link below to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = router;
