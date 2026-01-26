import { Contactos } from "../login/Contactos/Contactos.js";

function Login(onLogin) {
    const card = document.createElement("div");
    card.className = "glass-card";

    card.innerHTML = `
        <h2>Iniciar sesión</h2>
        <input type="text" id="user" placeholder="Usuario">
        <input type="password" id="pass" placeholder="Contraseña">
        <button id="btn-login">Ingresar</button>
    `;

    card.querySelector("#btn-login").addEventListener("click", () => {
        const usuario = card.querySelector("#user").value;

        if (!usuario) {
            alert("Ingresa un usuario");
            return;
        }

        onLogin(usuario); // 🔥 CLAVE
    });

    return card;
}

export { Login };
