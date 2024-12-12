// Variables globales
let courses = [];
let currentCourseIndex;

// Función para cargar los cursos del profesor
async function loadCourses() {
  const token = localStorage.getItem("token");
  if (!token) {
    logout();
    return;
  }

  const decodedToken = decodeToken(token);
  const teacherId = decodedToken ? decodedToken.id : null;

  if (!teacherId) {
    console.log("No se pudo obtener el ID del profesor");
    return;
  }

  try {
    const response = await fetch(
      `${CONFIG.API_BASE_URL}/courses/${teacherId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al cargar los cursos");
    }

    courses = await response.json();
    renderCourses();
  } catch (error) {
    console.error("Error al cargar los cursos:", error);
    showModal("No tienes permisos para esta vista o acción");
  }
}

// Función para renderizar los cursos en la tabla
function renderCourses() {
  const container = document.getElementById("coursesContainer");
  container.innerHTML = "";

  courses.forEach((course, index) => {
    container.innerHTML += `
      <tr>
        <td>${course.name}</td>
        <td>${course.description}</td>
        <td>${course.maxStudents}</td>
        <td>${course.price}</td>
        <td>${course.students ? course.students.length : 0}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editCourse(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="confirmDeleteCourse(${index})">Eliminar</button>
        </td>
      </tr>`;
  });
}

// Función para crear un nuevo curso
document
  .getElementById("courseForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("courseName").value;
    const maxStudents = document.getElementById("maxStudents").value;
    const description = document.getElementById("courseDescription").value;
    const price = document.getElementById("coursePrice").value;

    const newCourse = { name, maxStudents, description, price };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${CONFIG.API_BASE_URL}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        throw new Error("Error al crear el curso");
      }

      const createdCourse = await response.json();
      courses.push(createdCourse);
      renderCourses();
      $("#createCourseModal").modal("hide");
      this.reset();
    } catch (error) {
      console.error("Error al crear el curso:", error);
      showModal("No tienes permisos para esta vista o acción");
    }
  });

// Función para editar un curso
function editCourse(index) {
  currentCourseIndex = index;
  const course = courses[index];
  document.getElementById("editCourseName").value = course.name;
  document.getElementById("editMaxStudents").value = course.maxStudents;
  document.getElementById("editCourseDescription").value = course.description;
  document.getElementById("editCoursePrice").value = course.price;
  $("#editCourseModal").modal("show");
}

document
  .getElementById("editCourseForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("editCourseName").value;
    const maxStudents = document.getElementById("editMaxStudents").value;
    const description = document.getElementById("editCourseDescription").value;
    const price = document.getElementById("editCoursePrice").value;

    const updatedCourse = {
      ...courses[currentCourseIndex],
      name,
      maxStudents,
      description,
      price,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${CONFIG.API_BASE_URL}/courses/${updatedCourse._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedCourse),
        }
      );

      if (!response.ok) {
        throw new Error("Error al editar el curso");
      }

      courses[currentCourseIndex] = updatedCourse;
      renderCourses();
      $("#editCourseModal").modal("hide");
    } catch (error) {
      console.error("Error al editar el curso:", error);
      showModal("No tienes permisos para esta vista o acción");
    }
  });

// Función para eliminar un curso
function confirmDeleteCourse(index) {
  if (confirm("¿Estás seguro de que deseas eliminar este curso?")) {
    deleteCourse(index);
  }
}

async function deleteCourse(index) {
  const courseId = courses[index]._id;

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${CONFIG.API_BASE_URL}/courses/${courseId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el curso");
    }

    courses.splice(index, 1);
    renderCourses();
  } catch (error) {
    console.error("Error al eliminar el curso:", error);
    showModal("No tienes permisos para esta vista o acción");
  }
}

// Cargar los cursos al cargar la página
document.addEventListener("DOMContentLoaded", loadCourses);
