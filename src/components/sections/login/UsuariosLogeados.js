function UsuariosLogeados() {
    const section = document.createElement("section");
    section.className = "glass-card";

    const usuarios = JSON.parse(localStorage.getItem("usuariosLogeados")) || [];

    section.innerHTML = `<h2>Usuarios que iniciaron sesión</h2>`;

    if (usuarios.length === 0) {
        section.innerHTML += "<p>No hay registros</p>";
        return section;
    }

    usuarios.forEach(user => {
        const div = document.createElement("div");
        div.style.marginBottom = "12px";

        div.innerHTML = `
            <p><strong>${user.nombre}</strong></p>
            <p>${user.email}</p>
            <small>${user.fechaLogin}</small>
            <hr>
        `;

        section.appendChild(div);
    });

    return section;
}

export { UsuariosLogeados };
