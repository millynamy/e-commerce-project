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

// Function to clear the cart after  payment
function clearCart() {
    localStorage.removeItem("cartItems");
    displayCartItems();
}
// Call the displayProducts function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    displayProducts();
});

const checkoutButton = document.querySelector("#checkout-button");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", checkout);
    }
