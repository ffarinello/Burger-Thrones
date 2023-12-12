import burgerImage from "../assets/houses/burgers/burguer.jpg";
import "../css/card.css";

export default function Card() {
    return (
        <article className=".card">
            <aside id="burger">
                <h2>Nombre</h2>
                <img src={burgerImage} alt="foto" />
            </aside>

            <form id="data" action="/agregar-al-carrito" method="get">
                <ul>
                    <li>ingrediente1</li>
                    <li>ingrediente2</li>
                    <li>ingrediente3</li>
                    <li>ingrediente4</li>
                    <li>ingrediente5</li>
                    <li>ingrediente6</li>
                    <li>ingrediente7</li>
                </ul>

                <section id="precios">
                    <label htmlFor="precio1">Precio1</label>
                    <input id="precio1" type="checkbox" />
                    <label htmlFor="Precio2">Precio2</label>
                    <input id="precio1" type="checkbox" />
                    <label htmlFor="Precio3">Precio3</label>
                    <input id="precio1" type="checkbox" />
                </section>

                <section id="observaciones">
                    <label htmlFor="editar">Observaciones:</label>
                    <textarea name="editar" id="editar" cols="30" rows="3" placeholder="Sacar ingredientes..."></textarea>
                </section>
                <input id="add" type="submit" value="Agregar al carrito"></input>
            </form>
        </article>
    );
}
