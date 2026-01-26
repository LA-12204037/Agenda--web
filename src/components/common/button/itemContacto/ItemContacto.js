let ItemContacto = (imgPath, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = imgPath; // ✅ ruta directa
    etiquetaImg.alt = nombre;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;

    div.append(etiquetaImg, etiquetaNombre, etiquetaTelefono);
    return div;
};

export { ItemContacto };
