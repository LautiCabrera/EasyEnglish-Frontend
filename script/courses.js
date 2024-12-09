document.addEventListener("DOMContentLoaded", async () => {
  // Obtener el token del localStorage
  const token = localStorage.getItem("token");

  // Verificar si el token existe antes de hacer la solicitud
  if (!token) {
    alert("No estás autenticado. Inicia sesión.");
    return;
  }

  // Función para cargar y mostrar los cursos
  async function loadCourses() {
    try {
      // Hacer la solicitud GET al endpoint /courses, pasando el token en el encabezado Authorization
      const response = await fetch(`${CONFIG.API_BASE_URL}/courses`, {
        method: "GET", // Método de la solicitud
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Agregar el token aquí
        },
      });

      // Verificar si la respuesta es correcta
      if (!response.ok) {
        throw new Error("No se pudo obtener la lista de cursos");
      }

      const courses = await response.json(); // Convertir la respuesta en formato JSON

      const coursesListDiv = document.getElementById("courses-list");

      if (courses.length === 0) {
        coursesListDiv.innerHTML = "<p>No se han encontrado cursos.</p>";
        return;
      }

      // Limpiar el contenedor antes de agregar nuevos cursos
      coursesListDiv.innerHTML = "";

      // Definir una imagen común para todas las tarjetas
      const defaultImage =
        "https://blog.facialix.com/wp-content/uploads/2024/06/curso-ingles-gratuito-peliculas.jpg";

      // Recorrer los cursos y mostrarlos
      courses.forEach((course) => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("col");

        courseElement.innerHTML = `
            <div class="card h-100">
        <img src="${defaultImage}" class="card-img-top" alt="${course.name}">
        <div class="card-body d-flex flex-column">
          <h2 class="card-title fs-5">${course.name}</h2>
          <p class="precio text-primary fw-bold">$${course.price}</p>
          <button class="btn btn-primary mt-auto">Añadir al carrito</button>
        </div>
      </div>
          `;

        // Agregar el curso al contenedor de cursos
        coursesListDiv.appendChild(courseElement);
      });
    } catch (error) {
      console.error("Error al cargar los cursos:", error);
      document.getElementById("courses-list").innerHTML =
        "<p>Hubo un error al cargar los cursos. Inténtalo más tarde.</p>";
    }
  }

  // Llamar a la función para cargar los cursos
  loadCourses();
});

// Función para agregar un curso al carrito (opcional)
function addToCart(courseId) {
  console.log(`Curso ${courseId} agregado al carrito.`);
}
