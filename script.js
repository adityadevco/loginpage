document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const result = document.getElementById('result');

    // Hardcoded credentials as with que
    const username = 'user';
    const password = 'password';

    // Adding the event here for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        if (enteredUsername === username && enteredPassword === password) {
            // Successful login
            window.location.href = 'welcome.html';
        } else {
            // Invalid credential
            result.textContent = 'Invalid username or password';
        }
    });
});
