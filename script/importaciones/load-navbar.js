// fetch("../components/navbar.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("navbar").innerHTML = data;
//   })
//   .catch((error) => {
//     console.error("Error cargando el navbar:", error);
//   });

fetch("../components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    // Insertamos el contenido de navbar.html en el elemento con id "navbar"
    document.getElementById("navbar").innerHTML = data;

    // Ahora cargamos el script nav.js después de insertar el contenido del navbar
    const scriptElement = document.createElement('script');
    scriptElement.src = '../script/estilos/nav.js';  // Asegúrate de poner la ruta correcta a nav.js
    document.body.appendChild(scriptElement);  // Añadimos el script al body para que se ejecute
  })
  .catch((error) => {
    console.error("Error cargando el navbar:", error);
  });
