
// script.js

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const productSection = document.getElementById("product-section");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if username and password are correct
    if (username === "bishesh" && password === "123") {
      // Show the products section
      productSection.style.display = "block";
      // Hide the login section
      loginForm.parentElement.style.display = "none";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      const product = event.target.parentElement;
      const productName = product.querySelector("h2").innerText;
      alert(`Added ${productName} to cart!`);
    });
  });

  const myCartLink = document.getElementById("my-cart");
  myCartLink.addEventListener("click", function(event) {
    // Redirect to the cart page
    //
