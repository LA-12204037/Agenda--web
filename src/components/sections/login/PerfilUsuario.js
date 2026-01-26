function PerfilUsuario() {
    const section = document.createElement("section");
    section.className = "glass-card";

    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

    if (!usuario) {
        section.innerHTML = "<h2>No hay usuario activo</h2>";
        return section;
    }

    section.innerHTML = `
        <h2>Perfil del Usuario</h2>

        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>

        <hr style="margin: 15px 0;">

        <p><strong>Último login:</strong></p>
        <p>${usuario.fechaLogin}</p>
    `;

    return section;
}

export { PerfilUsuario };
