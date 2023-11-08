// import { products } from "./sample-data.js";

// search query params
const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
   console.log(`${key}:${value}`);
   if (key === 'email') {
      let el = document.getElementById("user-email");
        el.innerHTML = value;
    }
}

const products = [
    {
        name: "School Bag",
        description: "Description of product .",
        price: 30.99
    },
    {
        name: "Candle Pack",
        description: "Description of product .",
        price: 5.99
    },
    {
        name: "Scap Book",
        description: "Description of product .",
        price: 8.51
    },
    {
        name: "Water Bottle",
        description: "Description of product .",
        price: 10.55
    },
    {
        name: "Crayons",
        description: "Description of product .",
        price: 2.05
    },
];

// Function to display products
function displayProducts() {
    console.log("products: "+products);
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        const productName = document.createElement("h3");
        productName.textContent = product.name;
        const productDescription = document.createElement("p");
        productDescription.textContent = `${product.description} - $${product.price.toFixed(2)}`;
        productItem.appendChild(productName);
        productItem.appendChild(productDescription);
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product));
        productItem.appendChild(addToCartButton);
        productList.appendChild(productItem);
    });
}

let cartItems = [];

function addToCart(product) {
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCartItems();
}



