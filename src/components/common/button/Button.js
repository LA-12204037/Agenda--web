let Button = (title, id, imgPath) => {
    let div = document.createElement("div");
    div.id = id;

    let divImage = document.createElement("div");
    divImage.className = "button-image";

    let imgIcon = document.createElement("img");
    imgIcon.src = imgPath; // ✅ NO modificar la ruta
    imgIcon.alt = title;

    divImage.appendChild(imgIcon);

    let p = document.createElement("p");
    p.className = "button-text";
    p.textContent = title;

    div.append(divImage, p);
    return div;
};

export { Button };
