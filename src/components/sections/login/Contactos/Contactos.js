
import { ItemContacto } from "../../../../components/common/button/itemContacto/ItemContacto.js";

import { getContactsFromStorage, saveContactsToStorage } from "../../localStorage/localStorage.js";



let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    let contactos = getContactsFromStorage();

    contactos.forEach((contact, index) => {
        const fila = document.createElement("div");
        fila.className = "fila-contacto";

        // Componente del contacto
        const item = ItemContacto("user2.svg", contact.nombre, contact.telefono);

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Botón borrar
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.className = "btn-borrar";
        btnBorrar.disabled = true;

        checkbox.addEventListener("change", () => {
            btnBorrar.disabled = !checkbox.checked;
            fila.classList.toggle("seleccionado", checkbox.checked);
        });

        btnBorrar.addEventListener("click", () => {
            contactos.splice(index, 1);
            saveContactsToStorage(contactos);

            // Recargar contactos
            const container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(Contactos());
        });

        // Acciones (checkbox + borrar)
        const acciones = document.createElement("div");
        acciones.className = "acciones-contacto";
        acciones.append(checkbox, btnBorrar);

        fila.append(item, acciones);
        sectionContactos.appendChild(fila);
    });

    return sectionContactos;
};

export { Contactos };