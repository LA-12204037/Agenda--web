import { ItemContacto } from "../../../../components/common/button/itemContacto/ItemContacto.js";
import { getContactsFromStorage } from "../../localStorage/localStorage.js";

const ICON_PATH = "./src/assets/icon/";

function Favoritos() {
    const section = document.createElement("section");
    section.className = "contactos";

    const h2 = document.createElement("h2");
    h2.textContent = "Favoritos";
    section.appendChild(h2);

    // 🔁 SIEMPRE leer desde localStorage
    const contactos = getContactsFromStorage();

    // ⭐ filtrar favoritos reales
    const favoritos = contactos.filter(c => c.favorito === true);

    if (favoritos.length === 0) {
        const p = document.createElement("p");
        p.textContent = "No hay contactos favoritos ⭐";
        section.appendChild(p);
        return section;
    }

    favoritos.forEach(contact => {
        const item = ItemContacto(
            `${ICON_PATH}user2.svg`,
            contact.nombre,
            contact.telefono
        );

        section.appendChild(item);
    });

    return section;
}

export { Favoritos };
