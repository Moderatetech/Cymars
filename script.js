let cartCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  });
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  });
