let totalPrice = 0;

// Function to toggle visibility of selected option
function selectOption(price, optionId) {
  totalPrice = price;
  document.getElementById("total-price").innerText = `$${totalPrice}.00 USD`;

  // Remove theselected class from all options
  document.querySelectorAll(".option").forEach((el) => {
    el.classList.remove("selected");
  });

  // Add the selected class to the clicked option
  document.getElementById(optionId).classList.add("selected");

  // Hide all selection boxes first
  document.querySelectorAll(".selection").forEach((el) => {
    el.style.display = "none";
  });

  // Show the selection box for the selected option
  document.querySelector(`#${optionId} .selection`).style.display = "flex";
}

function addToCart() {
  alert(`Added to cart with total price: $${totalPrice}.00 USD`);
}
