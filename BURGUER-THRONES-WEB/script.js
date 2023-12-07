// importo datos (locales) desde "menu.json" y los guardo en el localStorage.

fetch("./public/menu.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => localStorage.setItem("burgers", JSON.stringify(datos)));

// creo un evento para insertar los datos al DOM con JS.
document.addEventListener("DOMContentLoaded", () => {
    const sectionCards = document.querySelector(".section-cards"); // container
    const datosBurgers = JSON.parse(localStorage.getItem("burgers"));
    console.log(datosBurgers);

    // creo un fragmento para insertar datos al DOM de una sola vez. ~~> Mejor rendimiento <~~
    let fragment = document.createDocumentFragment();

    if (datosBurgers) {
        const menuBurgers = datosBurgers.menu.menuBurgers.casas;

        Object.keys(menuBurgers).forEach((casa) => {
            // const imagen = menuBurgers.casa.img;
            //Crear card de hamburguesas
            const card = document.createElement("article"); // {sectionTitle, ingredients, priceSection, addButton}
            const data = document.createElement("section");
            const sectionTitle = document.createElement("figure"); // {title, img}
            const img = document.createElement("img");
            const title = document.createElement("h2");
            const sectionDetalle = document.createElement("aside"); // {ingredients, priceSection, addButton, prices}
            const ingredients = document.createElement("ul");
            const prices = document.createElement("p");
            const addButton = document.createElement("button");
            // const priceSection = document.createElement("form");

            title.textContent = casa;
            // img.setAttribute("src", casa.img);
            // addIngredients(casa, ingredients);
            // addPrices(casa, prices);
            // addButton.textContent = "Agregar al pedido";

            // appendChilds
            sectionTitle.appendChild(title);
            sectionTitle.appendChild(img);
            sectionDetalle.appendChild(ingredients);
            sectionDetalle.appendChild(prices);

            // appendChild to data
            data.classList.add("data");
            card.classList.add("card");
            data.appendChild(sectionTitle); // figure
            data.appendChild(sectionDetalle); // aside

            //appendChild to card
            card.appendChild(data);
            card.appendChild(addButton);

            //appenChild to fragment
            fragment.appendChild(card);
        });
    }
    //appenChild to sectionCards
    sectionCards.appendChild(fragment);
});

// mostrar casa por id
/* function mostrarDetallesDato(x) {
    window.location.href = `casa.html?id=${x.id}`;
} */

/* function addIngredients(lista, container) {
    lista.ingredientes.forEach((item) => {
        const ingredient = document.createElement("li");
        ingredient.innerHTML = `<h3>Ingredientes:</h3> ${item}`;
        container.appendChild(ingredient);
    });
} */

/* function addPrices(lista, container) {
    lista.precios.forEach((precio) => {
        const nuevoPrecio = document.createElement("p");
        nuevoPrecio.innerHTML = `   <input type= "radio" name="precio">
                    ${precio.tipo.toUpperCase()}: ${precio.valor}
                </input>
            `;
        container.appendChild(nuevoPrecio);
    });
} */
