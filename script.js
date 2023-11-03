let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll =() => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
const form = document.getElementById('signup-form');

form.addEventListener('submit', function (event) {
  const passwordField = form.querySelector('#password');
  const password = passwordField.value;

  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    passwordField.focus();
    event.preventDefault();
  }

  // Additional validation logic can be added, such as checking email format.

  // Simulate form submission (replace this with actual form submission to your server)
  alert('Form submitted successfully');
  event.preventDefault();
});
