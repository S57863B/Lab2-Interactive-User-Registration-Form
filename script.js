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


// Check the browser's local storage for a key named 'savedUsername'
const savedUsername = localStorage.getItem('savedUsername');

// If a value exists , set the username input's value to that saved string
if (savedUsername) {
    usernameInput.value = savedUsername;
}

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

// Function to validate the main Password field
const validatePassword = () => {
    if (passwordInput.validity.valueMissing) {
        passwordError.textContent = "Password is required.";
        return false;
    }
    else if (passwordInput.validity.patternMismatch) {
        passwordError.textContent = "Password must contain at least 8 characters, including uppercase, lowercase, and a number.";
        return false;
    }
    else {
        passwordError.textContent = "";
        if (confirmPasswordInput.value) {
            validateConfirmPassword();
        }
        return true;
    }
};

// Function to ensure both passwords match
const validateConfirmPassword = () => {
    if (confirmPasswordInput.validity.valueMissing) {
        confirmPasswordError.textContent = "Please confirm your password.";
        return false;
    }
    else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }
    else {
        confirmPasswordInput.setCustomValidity("");
        confirmPasswordError.textContent = "";
        return true;
    }
};

// Real-time event listeners
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

//Form Submission Handling
form.addEventListener('submit', (event) => {

    // Prevent the default browser behavior, which is to refresh the page and send data to a server
    event.preventDefault();

    // Run all validation functions one last time and store their boolean (true/false) results
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {

        // 1. Data Persistence: Save the valid username to the browser's localStorage
        localStorage.setItem('savedUsername', usernameInput.value);

        // 2. User Feedback: Show a success alert
        alert('Registration successful! Welcome, ' + usernameInput.value);

        // 3. Reset the form fields to blank for the next potential entry
        form.reset();

        // 4. Re-populate the username field from localStorage to prove it saved correctly
        usernameInput.value = localStorage.getItem('savedUsername');

    } else {
        // If the form fails validation, automatically shift the user's cursor 
        // to the first field that contains an error for better accessibility and UX.
        if (!isUsernameValid) {
            usernameInput.focus();
        } else if (!isEmailValid) {
            emailInput.focus();
        } else if (!isPasswordValid) {
            passwordInput.focus();
        } else if (!isConfirmPasswordValid) {
            confirmPasswordInput.focus();
        }
    }
});
});