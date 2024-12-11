document
  .getElementById("formRegistro")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("nombre").value.trim();
    const surname = document.getElementById("apellido").value.trim();
    const email = document.getElementById("correo").value.trim();
    const role = document.getElementById("rol").value;
    const password = document.getElementById("contraseña").value;

    try {
      const response = await fetch(`${CONFIG.API_BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, email, role, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error desconocido");
      }

      const data = await response.json();
      alert(data.message);
      window.location.href = "/pages/login.html";
    } catch (err) {
      console.error("Error:", err.message);
      alert(`Error: ${err.message}`);
    }
  });
