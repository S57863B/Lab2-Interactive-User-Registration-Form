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

    // Check the browser's local storage for a key named 'savedUsername'
    const savedUsername = localStorage.getItem('savedUsername');
    
    // If a value exists , set the username input's value to that saved string
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }