// Ajustar el navbar dinámicamente
document.addEventListener("navbarLoaded", () => {
  const loginButton = document.querySelector(".btn-snin");
  const links = document.querySelectorAll(".menu a");

  if (isLoggedIn()) {
    // Cambiar botón a "Cerrar sesión"
    loginButton.textContent = "Cerrar Sesión";
    loginButton.onclick = logout;

    // Obtener el rol del usuario
    const role = getUserRole();

    // Filtrar rutas según el rol
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const parentLi = link.closest("li");

      // Ocultar "profesores.html" solo para estudiantes
      if (role === "student" && href.includes("profesores.html")) {
        if (parentLi) parentLi.style.display = "none";
      }

      // Agrega más reglas según sea necesario para otros roles
    });
  } else {
    // Usuario no autenticado
    loginButton.textContent = "Conectarse";
    loginButton.onclick = () => (location.href = "../pages/login.html");

    // Ocultar solo "profesores.html"
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const parentLi = link.closest("li");

      if (href.includes("profesores.html") && parentLi) {
        parentLi.style.display = "none";
      }
    });
  }
});

// Ajustar el navbar dinámicamente
document.addEventListener("navbarLoaded", () => {
  const loginButton = document.querySelector(".btn-snin");
  const links = document.querySelectorAll(".menu a");

  if (isLoggedIn()) {
    // Cambiar botón a "Cerrar sesión"
    loginButton.textContent = "Cerrar Sesión";
    loginButton.onclick = logout;
  } else {
    // Usuario no autenticado
    loginButton.textContent = "Conectarse";
    loginButton.onclick = () => (location.href = "../pages/login.html");
  }
});
