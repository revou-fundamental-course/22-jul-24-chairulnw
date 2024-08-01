// script.js

// Select elements
const slideWrapper = document.querySelector('.slide-wrapper');
const slides = document.querySelectorAll('.slide-item');

// Calculate total slides
const totalSlides = slides.length;

// Current slide index (starts at 0)
let currentSlide = 0;

// Slide transition interval in milliseconds
const slideInterval = 3000;

// Function to move to the next slide
function moveToNextSlide() {
  // Wrap around to the first slide if at the end
  currentSlide = (currentSlide + 1) % totalSlides;

  // Calculate the offset (percentage based on slide width)
  const offset = -currentSlide * 100; // Move by 100% of the slide width

  // Apply the CSS transform to transition smoothly
  slideWrapper.style.transform = `translateX(${offset}%)`;
}

// Set up automatic slide transition
setInterval(moveToNextSlide, slideInterval);

// Function to validate the contact form
function validateForm(event) {
  // Get form input values (trimmed to remove leading/trailing spaces)
  const name = document.getElementById('name').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const option = document.getElementById('options').value;

  // Check if any required fields are empty
  if (name === '' || email === '' || option === '') {
    event.preventDefault(); // Prevent form submission
    alert('Please fill out all required fields.');
    return; // Exit the function early
  }

  // Validate email format if all required fields are filled
  if (!validateEmail(email)) {
    event.preventDefault(); // Prevent form submission
    alert('Please enter a valid email address.');
  }
}

// Regular expression for email validation
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Attach the validation function to the form's submit event
const form = document.querySelector('.contact-us form');
form.addEventListener('submit', validateForm);
