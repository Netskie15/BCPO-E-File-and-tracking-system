function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const user = StorageService.findUser(username, password);

    if (user) {
        window.location.href = 'dashboard.html'; // Redirect to dashboard immediately
    } else {
        alert('Invalid username or password.');
    }
}

function register() {
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const email = document.getElementById('registerEmail').value.trim();

    if (username && password && email) {
        if (StorageService.userExists(username)) {
            alert('Username already exists. Please choose a different one.');
        } else if (StorageService.emailExists(email)) {
            alert('Email already registered. Please use a different email address.');
        } else {
            StorageService.saveUser({ username, password, email });
            window.location.href = 'dashboard.html'; // Redirect to dashboard immediately after registration
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function toggleAuth() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authTitle = document.getElementById('authTitle');
    const toggleAuthLink = document.getElementById('toggleAuth');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        authTitle.textContent = 'Login';
        toggleAuthLink.textContent = "Don't have an account? Register";
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        authTitle.textContent = 'Register';
        toggleAuthLink.textContent = 'Already have an account? Login';
    }
}

function handleLoginKeyPress(event) {
    if (event.key === 'Enter') {
        login();
    }
}

function handleRegisterKeyPress(event) {
    if (event.key === 'Enter') {
        register();
    }
}
