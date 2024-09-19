// Función para registrar usuario
function registerUser(username, password) {
    if (localStorage.getItem(username)) {
        showMessage("Usuario ya existe", "error");
        return false;
    }
    localStorage.setItem(username, password);
    showMessage("Usuario registrado exitosamente", "success");
    return true;
}

// Función para iniciar sesión
function loginUser(username, password) {
    let storedPassword = localStorage.getItem(username);
    if (!storedPassword) {
        showMessage("Usuario no encontrado", "error");
        return false;
    }

    if (storedPassword === password) {
        showMessage("Inicio de sesión exitoso", "success");
        return true;
    } else {
        showMessage("Contraseña incorrecta", "error");
        return false;
    }
}

// Mostrar mensajes de éxito o error
function showMessage(message, type) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = type === "success" ? "green" : "red";
}

// Escuchar el evento 'submit' del formulario de registro
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recargar la página
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    registerUser(username, password);
});

// Escuchar el evento 'submit' del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    loginUser(username, password);
});
