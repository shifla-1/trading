
 

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const form = document.querySelector('payform');
const cardNumberInput = document.querySelector('#cardNumber');
const expirationDateInput = document.querySelector('#expirationDate');
const cvvInput = document.querySelector('#cvv');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const cardNumber = cardNumberInput.value.trim();
  const expirationDate = expirationDateInput.value.trim();
  const cvv = cvvInput.value.trim();

  // perform validation and payment processing here
});


// Get the modal
var modal = document.getElementById('pay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

