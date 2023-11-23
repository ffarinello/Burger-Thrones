fetch("./menu.json")
.then((respuesta) => respuesta.json())
.then((datos) => localStorage.setItem("burgers", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
    const sectionCards = document.querySelector(".section-cards"); // container
    const datosBurgers = JSON.parse(localStorage.getItem("burgers"));
    console.log(datosBurgers);
    
    let fragment = document.createDocumentFragment();

    if (datosBurgers) {
        datosBurgers.menu.forEach((burger) => {
            //Crear card de hamburguesas
            const card = document.createElement("article");
            card.classList.add("card");
            fragment.appendChild(card);
        });
    }
    sectionCards.appendChild(fragment);
});

// mostrar burger por id
function mostrarDetallesDato(burger) {
    window.location.href = `burger.html?id=${burger.id}`;
}
