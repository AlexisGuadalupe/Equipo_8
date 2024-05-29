function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const passwordToggle = document.querySelector(`#${fieldId} + .toggle-password`);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    passwordToggle.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
}

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('new-username').value;
        const password = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
            return;
        }

        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.reset();
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert('Inicio de sesión exitoso.');
            // Aquí redirigirías al usuario a la página principal, etc.
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
        this.reset();
    });
});
