// Selecciona todos los hipervínculos y el título
const links = document.querySelectorAll('.nav-link');
const title = document.querySelector('.center-title');

// Agrega un evento de clic a cada hipervínculo
links.forEach(link => {
link.addEventListener('click', function(event) {
    event.preventDefault(); 
    title.textContent = this.textContent; 
});
});


const nav = document.querySelector('.nav-nos');
window.addEventListener('scroll', function(){
    nav.classList.toggle("active2", window.scrollY >0)
})