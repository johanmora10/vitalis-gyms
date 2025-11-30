// Estado del menú
let menuVisible = false;

// Referencia al nav
const nav = document.getElementById("nav");

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    menuVisible = !menuVisible; // Alterna el estado
    nav.classList.toggle("responsive", menuVisible); // Añade o quita la clase 'responsive'
}

// Función que se llama al seleccionar una opción del menú
function seleccionar() {
    menuVisible = false;
    nav.classList.remove("responsive"); // Quita la clase 'responsive'
}

// Opcional: cerrar menú al hacer clic fuera (mejora UX)
document.addEventListener("click", (event) => {
    if (menuVisible && !nav.contains(event.target) && event.target.id !== "icono-nav") {
        seleccionar();
    }
});
