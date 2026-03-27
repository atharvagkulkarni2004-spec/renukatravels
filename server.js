const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Taxi Backend Running 🚕");
});

// TEST API
app.get("/api/test", (req, res) => {
  res.json({ message: "API working 🚀" });
});

// BOOKING + EMAIL ROUTE
app.post("/api/book", async (req, res) => {
  const { name, phone, pickup, drop, date } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "atharvagkulkarni2004@gmail.com",
        pass: "srqj jxcr mrxd bvcz" // ⚠️ not normal password
      }
    });

    const mailOptions = {
      from: "your_email@gmail.com",
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

    res.json({ success: true, message: "Email Sent ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Email failed ❌" });
  }
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});