const menuItems = [
  { id: 1, name: "Burger", price: 150 },
  { id: 2, name: "Pizza", price: 300 },
  { id: 3, name: "Pasta", price: 200 },
  { id: 4, name: "Sandwich", price: 120 },
  { id:5, name: "Egg Roll", price : 100}
];

// Load menu on homepage
if (document.getElementById("menu-list")) {
  const menuList = document.getElementById("menu-list");
  menuItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuList.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = menuItems.find(item => item.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " added to cart!");
}

// Load cart page
if (document.getElementById("cart-items")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - ₹${item.price}`;
    cartContainer.appendChild(div);
  });

  document.getElementById("total-price").innerText = "Total: ₹" + total;
}

// Checkout
function checkout() {
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
