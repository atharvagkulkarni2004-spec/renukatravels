const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// EMAIL CONFIG
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "atharvagkulkarni2004@gmail.com", // apna gmail
    pass: "srqj jxcr mrxd bvcz"     // app password (normal password nahi)
  }
});

// API
app.post("/api/book", async (req, res) => {
  const { name, phone, pickup, drop, date } = req.body;

  const mailOptions = {
    from: "your_email@gmail.com",
    to: "atharvagkulkarni2004@gmail.com", // jaha mail receive karna hai
    subject: "🚖 New Taxi Booking",
    html: `
      <h2>New Booking Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Pickup:</b> ${pickup}</p>
      <p><b>Drop:</b> ${drop}</p>
      <p><b>Date:</b> ${date}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Booking sent successfully ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending email ❌" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
