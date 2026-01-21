function login() {
    const section = document.createElement("section");
    section.className = "login-section";

    const h3 = document.createElement("h3");
    h3.textContent = "Login";

    const user = document.createElement("input");
    user.placeholder = "Usuario";
    user.className = "login-input";

    const pass = document.createElement("input");
    pass.type = "password";
    pass.placeholder = "Contraseña";
    pass.className = "login-input";

    const button = document.createElement("button");
    button.textContent = "Entrar";
    button.className = "login-button";

    button.addEventListener("click", () => {
        window.location.href = "app.html";
    });

    section.append(h3, user, pass, button);
    return section;
}

export { login };
