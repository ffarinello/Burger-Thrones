fetch("./menu.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => localStorage.setItem("burgers", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
    const contenedorCards = document.getElementById("hamburguesas"); // container
    const datosBurgers = JSON.parse(localStorage.getItem("burgers"));
    
    if (datosBurgers) {
        datosBurgers.forEach((burguer) => {
            //Crear card de hamburguesas
        })
    }
});

// mostar burger por id
function mostrarDetallesDato(burger) {
    window.location.href = `burger.html?id=${burger.id}`;
}