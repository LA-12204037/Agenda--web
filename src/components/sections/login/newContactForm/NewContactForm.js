import { ContactList } from " .. /contactos/db.js";

function NewContactForm() {
  let form = document.createElement("form");
  form.className = "new-contact-form";

  // Título
  let title = document.createElement("h2");
  title.textContent = "Nuevo Contacto";
  form.appendChild(title);

  // Campo Nombre
  let labelNombre = document.createElement("label");
  labelNombre.textContent = "Nombre:";
  labelNombre.htmlFor = "nombre";

  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.id = "nombre";
  inputNombre.name = "nombre";
  inputNombre.required = true;
  inputNombre.placeholder = "Ingresa el nombre";

  // Campo Teléfono
  let labelTelefono = document.createElement("label");
  labelTelefono.textContent = "Teléfono:";
  labelTelefono.htmlFor = "telefono";

  let inputTelefono = document.createElement("input");
  inputTelefono.type = "tel";
  inputTelefono.id = "telefono";
  inputTelefono.name = "telefono";
  inputTelefono.required = true;
  inputTelefono.placeholder = "Ej: 5551234567";

  // Botones
  let btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "Guardar";

  let btnCancel = document.createElement("button");
  btnCancel.type = "button";
  btnCancel.textContent = "Cancelar";

  // Agregar elementos al form
  form.appendChild(labelNombre);
  form.appendChild(inputNombre);
  form.appendChild(labelTelefono);
  form.appendChild(inputTelefono);
  form.appendChild(btnSubmit);
  form.appendChild(btnCancel);

  // Programación del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let contacto = {
      nombre: inputNombre.value,
      telefono: inputTelefono.value,
    };

    console.log(contacto);
    ContactList.push(contacto);

    // Opcional: limpiar el formulario después de guardar
    form.reset();
  });

  // **¡IMPORTANTE!** aquí cierras la función
  return form;
}
