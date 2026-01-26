import { ItemContacto } from "../../../../components/common/button/itemContacto/ItemContacto.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../localStorage/localStorage.js";
import { FormContacto } from "../../NewContact.js";

const ICON_PATH = "./src/assets/icon/";

function Contactos() {
    const sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    const h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    const contactos = getContactsFromStorage();

    contactos.forEach((contact, index) => {

        // Inicializar favorito
        if (contact.favorito === undefined) {
            contact.favorito = false;
        }

        const fila = document.createElement("div");
        fila.className = "fila-contacto";

        // Item contacto
        const item = ItemContacto(
            `${ICON_PATH}user2.svg`,
            contact.nombre,
            contact.telefono
        );

        // ⭐ Favorito
        const btnFav = document.createElement("button");
        btnFav.className = "btn-fav";
        btnFav.textContent = contact.favorito ? "⭐" : "☆";

        btnFav.onclick = () => {
            contact.favorito = !contact.favorito;
            saveContactsToStorage(contactos);
            recargar();
        };

        // ✏️ EDITAR
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️";
        btnEditar.className = "btn-editar";

        btnEditar.onclick = () => {
            const container = document.getElementById("container");
            container.innerHTML = "";

            const form = FormContacto(contact, index);
            container.appendChild(form);
        };

        // ☑ Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // 🗑 Borrar
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.className = "btn-borrar";
        btnBorrar.disabled = true;

        checkbox.onchange = () => {
            btnBorrar.disabled = !checkbox.checked;
            fila.classList.toggle("seleccionado", checkbox.checked);
        };

        btnBorrar.onclick = () => {
            contactos.splice(index, 1);
            saveContactsToStorage(contactos);
            recargar();
        };

        // ⋮ Menú info
        const btnMenu = document.createElement("button");
        btnMenu.className = "btn-menu";
        btnMenu.textContent = "⋮";

        const menu = document.createElement("div");
        menu.className = "menu-detalle";
        menu.style.display = "none";
        menu.innerHTML = `
            <p><strong>Nombre:</strong> ${contact.nombre}</p>
            <p><strong>Teléfono:</strong> ${contact.telefono}</p>
            <p><strong>Favorito:</strong> ${contact.favorito ? "⭐ Sí" : "No"}</p>
        `;

        btnMenu.onclick = (e) => {
            e.stopPropagation();
            menu.style.display = menu.style.display === "none" ? "block" : "none";
        };

        // Acciones
        const acciones = document.createElement("div");
        acciones.className = "acciones-contacto";
        acciones.append(btnFav, btnEditar, btnMenu, checkbox, btnBorrar);

        fila.append(item, acciones, menu);
        sectionContactos.appendChild(fila);
    });

    function recargar() {
        const container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(Contactos());
    }

    return sectionContactos;
}

export { Contactos };
