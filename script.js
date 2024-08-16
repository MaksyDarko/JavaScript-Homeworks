const apiUrl = `https://66be1b0374dfc195586e993b.mockapi.io/products/Products`;

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error fetching products:`, error);
  }
}

document.addEventListener(`DOMContentLoaded`, async () => {
  await displayProducts();
});

let products = [];

async function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products = await fetchProducts();

  if (products && Array.isArray(products)) {
    products.forEach((product, index) => {
      productList.innerHTML += `
        <div class="col-md-4">
          <div class="card gap-2 text-center">
            <div id="${product.id}" class="card-body">
              <h5 class="card-title">${product.productDepartment}</h5>
              <p class="card-text">${product.product}</p>
              <h5>$${product.productPrice}</h5>
            </div>
            <div class"mb-3">
              <button class="btn btn-warning btn-sm" onclick="editProduct('${product.id}')">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="deleteProduct('${product.id}')">Delete</button>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    productList.innerHTML = "<p>No products available</p>";
  }
}

async function deleteProduct(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: `DELETE`,
    });
    await displayProducts();
  } catch (error) {
    console.log(`Error deleting product:`, error);
  }
}

function editProduct(id) {
  const product = products.find((product) => product.id === id);

  document.getElementById("editProductId").value = product.id;
  document.getElementById("editProductDepartment").value =
    product.productDepartment;
  document.getElementById("editProductName").value = product.product;
  document.getElementById("editProductPrice").value = product.productPrice;

  const editModal = new bootstrap.Modal(
    document.getElementById("editProductModal")
  );
  editModal.show();
}

async function saveProductChanges() {
  const id = document.getElementById("editProductId").value;
  const updatedProduct = {
    productDepartment: document.getElementById("editProductDepartment").value,
    product: document.getElementById("editProductName").value,
    productPrice: document.getElementById("editProductPrice").value,
  };

  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const editModal = bootstrap.Modal.getInstance(
      document.getElementById("editProductModal")
    );
    editModal.hide();

    await displayProducts();
  } catch (error) {
    console.log(`Error updating product:`, error);
  }
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function addToCart(productIndex) {
  const product = products[productIndex];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

async function updateCart() {
  const cartElement = document.getElementById("cart");
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cart.length > 0) {
    cartElement.style.display = "block";
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <span>${item.product} - $${item.productPrice}</span>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  } else {
    cartElement.style.display = "none";
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

document.addEventListener("DOMContentLoaded", updateCart);
