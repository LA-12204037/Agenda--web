import { getContactsFromStorage, saveContactsToStorage } from "./localStorage/localStorage.js";
import { Contactos } from "./login/Contactos/Contactos.js";

function FormContacto(contacto = null, index = null) {
    const form = document.createElement("form");
    form.className = "form-contacto glass-card";

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;

    const inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.required = true;

    // 👉 SI VIENE DE EDITAR, CARGAMOS LOS DATOS
    if (contacto) {
        inputNombre.value = contacto.nombre;
        inputTelefono.value = contacto.telefono;
    }

    const btnGuardar = document.createElement("button");
    btnGuardar.type = "submit";
    btnGuardar.textContent = contacto ? "Actualizar" : "Guardar";

    form.append(inputNombre, inputTelefono, btnGuardar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const contactos = getContactsFromStorage();

        if (contacto !== null && index !== null) {
            // ✏️ EDITAR CONTACTO
            contactos[index].nombre = inputNombre.value;
            contactos[index].telefono = inputTelefono.value;
        } else {
            // ➕ NUEVO CONTACTO
            contactos.push({
                nombre: inputNombre.value,
                telefono: inputTelefono.value,
                favorito: false
            });
        }

        saveContactsToStorage(contactos);

        // 🔁 volver a contactos
        const container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(Contactos());
    });

    return form;
}

export { FormContacto };
