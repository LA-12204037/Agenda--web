import "./Contactos.css";

import { ItemContacto } from "../../../common/button/itemContacto/ItemContacto.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../localStorage/localStorage.js";
import { DB_CONTACTOS } from "./DB.js";

function Contactos() {
    const section = document.createElement("section");
    section.className = "contactos";

    const h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    section.appendChild(h2);

    let contactos = getContactsFromStorage();

    if (contactos.length === 0) {
        saveContactsToStorage(DB_CONTACTOS);
        contactos = DB_CONTACTOS;
    }

    contactos.forEach((c, i) => {
        const fila = document.createElement("div");
        fila.className = "fila-contacto";

        const item = ItemContacto("./src/assets/icon/user2.svg", c.nombre, c.telefono);

        const chk = document.createElement("input");
        chk.type = "checkbox";

        const btn = document.createElement("button");
        btn.textContent = "Borrar";
        btn.disabled = true;

        chk.onchange = () => {
            btn.disabled = !chk.checked;
            fila.classList.toggle("seleccionado", chk.checked);
        };

        btn.onclick = () => {
            contactos.splice(i, 1);
            saveContactsToStorage(contactos);
            section.replaceWith(Contactos());
        };

        const acciones = document.createElement("div");
        acciones.append(chk, btn);

        fila.append(item, acciones);
        section.appendChild(fila);
    });

    return section;
}

export { Contactos };
