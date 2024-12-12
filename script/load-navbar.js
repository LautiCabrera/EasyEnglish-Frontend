// load-navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  fetch("/components/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      navbarContainer.innerHTML = html;

      navbarLoaded();
    });
});
