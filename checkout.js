// Function to process the payment and checkout
function processPayment(event) {
    event.preventDefault(); // Prevent the form from submitting

    // processing the payment and checkout
    const name = document.getElementById("name").value;
    //const address = document.getElementById("address").value;
    const paymentDetails = document.getElementById("payment-details").value;

    if (name && address && paymentDetails) {
        // Simulate processing the payment
        simulatePayment();
    } else {
        alert("Please fill out all the fields.");
    }
}

// Simulate processing the payment
function simulatePayment() {
    // Replace this with your own logic for processing the payment
    // Simulate a loading state or display a success message
    setTimeout(() => {
        alert("Payment processed successfully. Your order will be shipped soon.");
        // Redirect to a thank you page or the home page after successful payment
        window.location.href = "thankyou.html";
    }, 2000);}
