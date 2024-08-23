document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match!';
        return;
    }

    // Registration logic can be implemented here
    // For example, sending the data to a server

    message.style.color = 'green';
    message.textContent = 'Registration successful!';

    // Clear the form
    document.getElementById('registerForm').reset();
});
