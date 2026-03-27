let menu = document.querySelector('#menu-icon');
menu = document.querySelector('#menu-icon') 

let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

const sr = scrollreveal({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true
})

sr.reveal('.text',{delay: 200, origin:'top'})
sr.reveal('.form-container form',{delay :800, origin: 'left'})

const fname =document.getElementById('name')
const mobile =document.getElementById('mobile')
const pickupLocation =document.getElementById('pickupLocation')
const Destination =document.getElementById('Destination')
const pickupDate =document.getElementById('PickupDate')
const ReturnDate =document.getElementById('ReturnDate')
const submit =document.getElementsByClassName('form-container')[0];

submit.addEventListener('submit',(e)=>
{
  e.preventDefault();
  console.log("Clicked");
  
   
  Email.send({
    SecureToken : "e2c009e8-c264-423e-af59-79011dcfc3b9 ",
    To : 'girishkulkarni7126@gmail.com',
    From : "you@isp.com",
    Subject : "TAXI BOOKING INQUIRY",
    Body : "CAR BOOKING"
}).then(
  message => alert(message)
);

document.addEventListener("DOMContentLoaded", () => {

    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });

});
 const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  // Auto close when clicking menu link
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    });
  });


});