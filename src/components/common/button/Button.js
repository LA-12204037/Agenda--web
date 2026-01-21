import "./button.css";

function Button(texto, id, icono) {
    const btn = document.createElement("button");
    btn.className = "btn-menu";
    btn.id = id;

    const img = document.createElement("img");
    img.src = icono;

    const span = document.createElement("span");
    span.textContent = texto;

    btn.append(img, span);
    return btn;
}

export { Button };
