import "./NewContact.css";
import { saveContactsToStorage, getContactsFromStorage } from "./localStorage/localStorage.js";

function FormContacto() {
    const div = document.createElement("div");
    div.className = "new-contact";

    div.innerHTML = `
        <h2>Nuevo Contacto</h2>
        <input placeholder="Nombre" id="nombre">
        <input placeholder="Teléfono" id="telefono">
        <button>Guardar</button>
    `;

    div.querySelector("button").onclick = () => {
        const nombre = div.querySelector("#nombre").value;
        const telefono = div.querySelector("#telefono").value;

        const contactos = getContactsFromStorage();
        contactos.push({ nombre, telefono });
        saveContactsToStorage(contactos);

        alert("Contacto guardado");
    };

    return div;
}

export { FormContacto };
