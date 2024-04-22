document.getElementById('connexion-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Reset error messages
    document.getElementById('error-message').innerText = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Async validation for email
    const isEmailValid = await validateEmail(email);
    if (!isEmailValid) {
        document.getElementById('error-message').innerText += 'Email invalide.\n';
    }

    // Async validation for password (you can add more complex checks)
    if (password.length < 6) {
        document.getElementById('error-message').innerText += 'Le mot de passe doit contenir au moins 6 caractères.\n';
    }

    // If no errors, submit the form
    if (isEmailValid && password.length >= 6) {
        this.submit();
    }
});

async function validateEmail(email) {
    // Example of asynchronous email validation using a fetch request
    const response = await fetch('validate_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    });

    const data = await response.json();
    return data.isValid;
}
