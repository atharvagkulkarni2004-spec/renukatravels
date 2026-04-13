// ===== Navbar Toggle =====
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// Auto close navbar on link click
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});


// ===== Scroll Reveal =====
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true
});

sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".form-container form", { delay: 800, origin: "left" });


// ===== Form Submission (Backend Connection) =====
const form = document.querySelector(".bookingform");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("mobile").value;
  const pickup = document.getElementById("pickupLocation").value;
  const destination = document.getElementById("Destination").value;
  const pickupDate = document.getElementById("PickupDate").value;
  const returnDate = document.getElementById("ReturnDate").value;

  console.log("Form Submitted");

  fetch("https://renukatravels.onrender.com/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      pickup,
      destination,
      pickupDate,
      returnDate
    }),
  })
    .then(res => res.text())
    .then(data => {
      alert(data);
      form.reset();
    })
    .catch(err => {
      console.log(err);
      alert("Error sending booking request");
    });
});
