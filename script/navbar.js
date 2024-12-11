// Ajustar el navbar dinámicamente
const navbarLoaded = () => {
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
      if (role != "teacher" && href.includes("profesores")) {
        if (parentLi) parentLi.style.display = "none";
      }
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
};
