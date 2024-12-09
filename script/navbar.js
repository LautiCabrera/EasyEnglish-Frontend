// Verificar estado del usuario al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector(".menu");
  const loginButton = document.querySelector(".btn-snin");

  if (isLoggedIn()) {
    // Cambiar botón a "Cerrar sesión"
    loginButton.textContent = "Cerrar Sesión";
    loginButton.onclick = logout;

    const userRole = getUserRole();

    // Mostrar u ocultar elementos según el rol
    if (userRole === "teacher") {
      const cursosLink = document.querySelector(
        'a[href="../pages/profesores.html"]'
      );
      const editButton = document.createElement("button");
      editButton.textContent = "Editar Cursos";
      editButton.className = "btn-edit";
      editButton.onclick = () =>
        (location.href = "../pages/editar-cursos.html");
      cursosLink.parentElement.appendChild(editButton);
    }
  } else {
    // Redirigir al login si se intenta acceder a una página protegida
    const restrictedPages = ["/pages/editar-cursos.html"];
    if (restrictedPages.some((page) => location.pathname.endsWith(page))) {
      alert("Por favor, inicia sesión para acceder a esta página.");
      location.href = "../components/login.html";
    }
  }
});

// Ajustar el navbar dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".btn-snin");
  const links = document.querySelectorAll(".menu a");

  if (isLoggedIn()) {
    // Cambiar botón a "Cerrar sesión"
    loginButton.textContent = "Cerrar Sesión";
    loginButton.onclick = logout;
  } else {
    // Usuario no autenticado
    loginButton.textContent = "Conectarse";
    loginButton.onclick = () => (location.href = "../components/login.html");
  }
});
