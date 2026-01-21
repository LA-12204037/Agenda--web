function login() {

    const loginSection = document.createElement("section");
    loginSection.classList.add("login-section");

    const h3 = document.createElement("h3");
    h3.textContent = "Login";

    const user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    const password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    const button = document.createElement("button");
    button.textContent = "Iniciar Sesión";

    loginSection.append(h3, user, password, button);

    return loginSection;
}

export default login;
