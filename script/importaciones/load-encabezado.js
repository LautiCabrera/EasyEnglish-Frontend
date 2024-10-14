fetch("../components/encabezado.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("encabezado").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error cargando el navbar:", error);
  });
