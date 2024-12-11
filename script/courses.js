document.addEventListener("DOMContentLoaded", async () => {
  async function loadCourses() {
    try {
      const response = await fetch(`${CONFIG.API_BASE_URL}/courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo obtener la lista de cursos");
      }

      const courses = await response.json();
      const coursesListDiv = document.getElementById("courses-list");

      if (courses.length === 0) {
        coursesListDiv.innerHTML = "<p>No se han encontrado cursos.</p>";
        return;
      }

      coursesListDiv.innerHTML = "";

      const defaultImage =
        "https://blog.facialix.com/wp-content/uploads/2024/06/curso-ingles-gratuito-peliculas.jpg";

      courses.forEach((course) => {
        const courseElement = document.createElement("div");

        courseElement.classList.add("col-12", "col-sm-6", "col-md-4");

        courseElement.innerHTML = `
          <div class="card h-100">
            <img src="${defaultImage}" class="card-img-top" alt="${course.name}">
            <div class="card-body d-flex flex-column">
              <h2 class="card-title fs-6 text-truncate">${course.name}</h2>
              <p class="text-justify-custom mt-2">${course.description}</p>
              <p class="text-muted small">Instructor: ${course.owner.name} ${course.owner.surname}</p>
              <p class="precio text-primary fw-bold">$${course.price}</p>
              <button class="btn btn-primary mt-auto btn-add-to-cart">
                Añadir al carrito
              </button>
            </div>
          </div>
        `;
        coursesListDiv.appendChild(courseElement);

        const addButton = courseElement.querySelector(".btn-add-to-cart");
        addButton.addEventListener("click", () => {
          addToCart(course.name);
        });
      });
    } catch (error) {
      console.error("Error al cargar los cursos:", error);
      document.getElementById("courses-list").innerHTML =
        "<p>Hubo un error al cargar los cursos. Inténtalo más tarde.</p>";
    }
  }

  loadCourses();
});

// Función para agregar un curso al carrito
function addToCart(courseName) {
  showModal(`Curso ${courseName} agregado al carrito.`);
}
