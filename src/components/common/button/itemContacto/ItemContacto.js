import "./itemContacto.css";

function ItemContacto(icono, nombre, telefono) {
    const div = document.createElement("div");
    div.className = "item-contacto";

    const img = document.createElement("img");
    img.src = icono;

    const info = document.createElement("div");
    info.className = "info";

    const strong = document.createElement("strong");
    strong.textContent = nombre;

    const span = document.createElement("span");
    span.textContent = telefono;

    info.append(strong, span);
    div.append(img, info);

    return div;
}

export { ItemContacto };
