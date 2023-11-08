const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  products data
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 }
    
];

//  user data
const users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" }

];

// Endpoint to process payment 
// to be completed
app.post('/checkout', (req, res) => {
    const { userId, totalPrice, paymentDetails } = req.body;

    if (userId && totalPrice && paymentDetails) {
        res.send({ message: `Payment successful! Thank you for your purchase of $${totalPrice}.` });
    } else {
        res.status(400).send({ error: "Invalid data. Please try again." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});