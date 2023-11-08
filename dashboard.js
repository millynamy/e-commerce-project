// Get elements
const signInForm = document.querySelector("#sign-in form");
const signUpForm = document.querySelector("#sign-up form");

// Add event listeners
signInForm.addEventListener("submit", signIn);
signUpForm.addEventListener("submit", signUp);

// Functions
function signIn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Signing in with email: ", email, " and password: ", password);
    // Mock user data for demonstration purposes
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user credentials match any of the stored users
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        // Replace with your own logic for a successful sign-in
        console.log("Sign-in successful for user:", user.email);
        alert("Sign-in successful!");
        window.location.href = "products.html?email="+user.email;
    } else {
        // Replace with your own logic for a failed sign-in
        console.log("Invalid email or password. Please try again.");
        alert("Invalid email or password. Please try again.");
    }
}

function signUp(e) {
    e.preventDefault();
    const newEmail = e.target["new-email"].value;
    const newPassword = e.target["new-password"].value;

    console.log("Signing up with email: ", newEmail, " and password: ", newPassword);
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already taken
    const isEmailTaken = users.some((user) => user.email === newEmail);

    if (isEmailTaken) {

        console.log("This email is already taken. Please use a different email.");
        alert("This email is already taken. Please use a different email.");
    } else {
        // Add the new user to the list
        users.push({ email: newEmail, password: newPassword });
        localStorage.setItem("users", JSON.stringify(users));

        
        console.log("Sign-up successful for user:", newEmail);
        alert("Sign-up successful! You can now sign in with your new account.");
    }
}