//assignments: add remove btn N adjust total amount, local storage,
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 0, name: "prod0", price: 9.99 },
    { id: 1, name: "prod1", price: 10.99 },
    { id: 2, name: "prod2", price: 11.99 },
  ];

  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDispplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  //render the products? run a loop over array, N create a display div.
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name} - $ ${product.price.toFixed(2)}</span>
    <button data-id='${product.id}'>Add to cart</button>`;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      //by default "e.target.getAttribute("data-id")" is of string type
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} - $ ${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        totalPriceDispplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDispplay.textContent = "$ 0.00";
    }
  }

  checkoutBtn.addEventListener("click", () => {
    //clearing the cart
    cart.length = 0;
    alert("Checkout Successfully");
    renderCart();
  });
});
