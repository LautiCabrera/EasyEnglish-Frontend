document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzbozra", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showModal("¡Mensaje enviado correctamente!");
        form.reset();
      } else {
        showModal("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      showModal("Error al conectar con el servidor. Verifica tu conexión.");
    }
  });
