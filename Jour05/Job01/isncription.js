document.getElementById('inscription-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Reset error messages
    document.getElementById('error-message').innerText = '';
    document.getElementById('nom-error').innerText = '';
    document.getElementById('prenom-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';
    document.getElementById('adresse-error').innerText = '';
    document.getElementById('code-postal-error').innerText = '';

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const adresse = document.getElementById('adresse').value;
    const codePostal = document.getElementById('code-postal').value;

    // Async validation for email
    const isEmailValid = await validateEmail(email);
    if (!isEmailValid) {
        document.getElementById('email-error').innerText = 'Email invalide.';
    }

    // Async validation for password (you can add more complex checks)
    if (password.length < 6) {
        document.getElementById('password-error').innerText = 'Le mot de passe doit contenir au moins 6 caractères.';
    }

    // Async validation for code postal (you can add more complex checks)
    const isCodePostalValid = await validateCodePostal(codePostal);
    if (!isCodePostalValid) {
        document.getElementById('code-postal-error').innerText = 'Code postal invalide.';
    }

    // If no errors, submit the form
    if (isEmailValid && password.length >= 6 && isCodePostalValid) {
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

async function validateCodePostal(codePostal) {
    // Example of asynchronous code postal validation using a fetch request
    const response = await fetch('validate_code_postal.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ codePostal: codePostal })
    });

    const data = await response.json();
    return data.isValid;
}
