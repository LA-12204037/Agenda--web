import { itemContacto } from "../../../itemContacto.js";




let Contactos = () => {
  let sectionContactos = document.createElement("section");
  sectionContactos.className = "contactos";

  let h2 = document.createElement("h2");
  h2.textContent = "📒 Contactos";

  sectionContactos.appendChild(h2);

  // Contactos de ejemplo
  sectionContactos.appendChild(
    ItemContacto("user2.svg", "Jossue Fuentes", "1234567")
  );
  sectionContactos.appendChild(
    ItemContacto("user2.svg", "María López", "9876543")
  );
  sectionContactos.appendChild(
    ItemContacto("user2.svg", "Carlos Pérez", "4567891")
  );
  sectionContactos.appendChild(
    ItemContacto("user2.svg", "Ana Torres", "3216549")
  );

  return sectionContactos;
};

export { Contactos };
