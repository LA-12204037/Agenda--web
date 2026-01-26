import { getContactsFromStorage, saveContactsToStorage } from "../localStorage/localStorage.js";
import { Contactos } from "./Contactos/Contactos.js";

function EditarContacto(contacto, index) {
    const form = document.createElement("form");
    form.className = "glass-card";

    const h2 = document.createElement("h2");
    h2.textContent = "Editar contacto";

    const inputNombre = document.createElement("input");
    inputNombre.value = contacto.nombre;

    const inputTelefono = document.createElement("input");
    inputTelefono.value = contacto.telefono;

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar cambios";
    btnGuardar.type = "submit";

    form.append(h2, inputNombre, inputTelefono, btnGuardar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const contactos = getContactsFromStorage();

        contactos[index].nombre = inputNombre.value;
        contactos[index].telefono = inputTelefono.value;

        saveContactsToStorage(contactos);

        const container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(Contactos());
    });

    return form;
}

export { EditarContacto };
