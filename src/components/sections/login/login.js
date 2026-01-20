let login = () => {
  // Contenedor principal
  let section = document.createElement("section");
  section.className = "login-section";

  // Título
  let h3 = document.createElement("h3");
  h3.textContent = "Iniciar Sesión";

  // Usuario
  let user = document.createElement("input");
  user.type = "text";
  user.placeholder = "Usuario";
  user.className = "login-input";

  // Password
  let password = document.createElement("input");
  password.type = "password";
  password.placeholder = "Contraseña";
  password.className = "login-input";

  // Mensaje
  let message = document.createElement("p");
  message.className = "login-message";

  // Botón
  let button = document.createElement("button");
  button.textContent = "Ingresar";
  button.className = "login-button";

  // Evento login
  button.addEventListener("click", () => {
    if (user.value === "" || password.value === "") {
      message.textContent = "⚠️ Completa todos los campos";
      message.style.color = "red";
      return;
    }

    if (user.value === "admin" && password.value === "1234") {
      message.textContent = "✅ Login exitoso";
      message.style.color = "green";

      // Aquí luego puedes cambiar de vista
      // container.innerHTML = ""
    } else {
      message.textContent = "❌ Usuario o contraseña incorrectos";
      message.style.color = "red";
    }
  });

  section.appendChild(h3);
  section.appendChild(user);
  section.appendChild(password);
  section.appendChild(button);
  section.appendChild(message);

  return section;
};

export { login };
