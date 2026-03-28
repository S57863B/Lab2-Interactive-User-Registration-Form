document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select the main form element to handle the submit event later
    const form = document.getElementById('registrationForm');

    // 2. Select all the input fields where the user will type their data
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // 3. Select all the span elements where program will inject custom error messages
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
});

// Validation Functions
    // Function to validate the Username field
    const validateUsername = () => {
        if (usernameInput.validity.valueMissing) {
            usernameError.textContent = "Username is required.";
            return false;
        } 
        else if (usernameInput.validity.tooShort) {
            usernameError.textContent = "Username must be at least 3 characters.";
            return false;
        } 
        else {
            usernameError.textContent = "";
            return true;
        }
    };

    // Function to validate the Email field
    const validateEmail = () => {
        if (emailInput.validity.valueMissing) {
            emailError.textContent = "Email is required.";
            return false;
        } 
        else if (emailInput.validity.typeMismatch) {
            emailError.textContent = "Please enter a valid email address (e.g., user@domain.com).";
            return false;
        } 
        else {
            emailError.textContent = "";
            return true;
        }
    };