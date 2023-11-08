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
        description: "Description of product 1.",
        price: 30.99
    },
    {
        name: "Candle Pack",
        description: "Description of product 2.",
        price: 5.99
    },
    {
        name: "Scap Book",
        description: "Description of product 2.",
        price: 8.51
    },
    {
        name: "Water Bottle",
        description: "Description of product 2.",
        price: 10.55
    },
    {
        name: "Crayons",
        description: "Description of product 2.",
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

function displayCartItems() {
    const cartElement = document.getElementById("cart-items");
    cartElement.innerHTML = "";
    cartItems.forEach((item) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        cartElement.appendChild(li);
    });
}

function checkout() {
    //  the checkout process
    //need to go throught this function again
    const totalPrice = calculateTotalPrice();

    // payment gateway process

    const paymentDetails = prompt(`Your total is $${totalPrice.toFixed(2)}.
Please enter your payment details to proceed:`);

    if (paymentDetails) {
        // processing the payment
        simulatePayment(totalPrice);
    } else {
        // If the user cancels the payment or provides invalid payment details
        alert("Payment was canceled or invalid. Please try again.");
    }
}

// calculate the total price of items in the cart
function calculateTotalPrice() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const products = getProductsFromStorage();
    let totalPrice = 0;

    cartItems.forEach(cartItem => {
        const product = products.find(product => product === cartItem);
        if (product) {
            totalPrice += product.price;
        }
    });

    return totalPrice;
}

// Simulate processing the payment * explanation
function simulatePayment(totalPrice) {
    setTimeout(() => {
        alert(`Payment successful! Thank you for your purchase of $${totalPrice.toFixed(2)}.`);
        clearCart();
    }, 2000);
}

// Function to clear the cart after  payment
function clearCart() {
    localStorage.removeItem("cartItems");
    displayCartItems();
}
// Call the displayProducts function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    displayProducts();
});

