let cartCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  });
});
