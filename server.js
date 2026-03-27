const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// API
app.post("/send-enquiry", async (req, res) => {
  const { name, phone, pickup, drop, date } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "atharvagkulkarni2004@gmail.com",
    pass: "srqj jxcr mrxd bvcz"
      }
    });

    const mailOptions = {
      from: "YOUR_EMAIL@gmail.com",
      to: "atharvagkulkarni2004@gmail.com",
      subject: "🚖 New Taxi Booking Enquiry",
      html: `
        <h3>New Booking</h3>
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Pickup: ${pickup}</p>
        <p>Drop: ${drop}</p>
        <p>Date: ${date}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.send("Email Sent ✅");

  } catch (err) {
    console.log(err);
    res.send("Error ❌");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});