let ItemContacto = (imgContacto, nombre, telefono) => {
  // Contenedor principal
  let div = document.createElement("div");
  div.className = "contact-item";

  // Avatar
  let avatar = document.createElement("div");
  avatar.className = "contact-avatar";

  let img = document.createElement("img");
  img.src = `./src/assets/icon/${imgContacto}`;
  img.alt = nombre;
  avatar.appendChild(img);

  // Información
  let info = document.createElement("div");
  info.className = "contact-info";

  let pNombre = document.createElement("p");
  pNombre.className = "contact-name";
  pNombre.textContent = nombre;

  let pTelefono = document.createElement("p");
  pTelefono.className = "contact-email";
  pTelefono.textContent = telefono;

  info.appendChild(pNombre);
  info.appendChild(pTelefono);

  // Unir todo
  div.appendChild(avatar);
  div.appendChild(info);

  return div;
};

export { ItemContacto };
