let Button = (title, id, img) => {
  let div = document.createElement("div");
  div.id = id;
  div.className = "nav-button";

  // Contenedor de imagen
  let divImage = document.createElement("div");
  divImage.className = "button-image";

  let imgIcon = document.createElement("img");
  imgIcon.src = `./src/assets/icon/${img}`;
  imgIcon.alt = title;

  divImage.appendChild(imgIcon);

  // Texto
  let p = document.createElement("p");
  p.className = "button-text";
  p.textContent = title;

  // Unir todo
  div.appendChild(divImage);
  div.appendChild(p);

  return div;
};

export { Button };
