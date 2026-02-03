import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
import { Favoritos } from "./components/sections/login/Favoritos/Favoritos.js";
import { FormContacto } from "./components/sections/NewContact.js";
import { ToDoList } from "./components/sections/toDoList/toDoList.js";
import { CrearTarea } from "./components/sections/tareas/crearTarea.js";
import { Login } from "./components/sections/login/login.js";
import { UsuariosLogeados } from "./components/sections/login/UsuariosLogeados.js";

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");
    const nav = document.getElementById("nav");
    const container = document.getElementById("container");

    /* =========================
       LOGIN INICIAL
    ========================= */
    app.classList.add("app-login");
    mostrarSeccion(Login(iniciarSesion));

    function iniciarSesion(usuario) {
        // Usuario actual
        localStorage.setItem("usuario", usuario);

        // Guardar historial de usuarios logeados
        const usuarios = JSON.parse(localStorage.getItem("usuariosLogeados")) || [];
        usuarios.push({
            nombre: usuario,
            fecha: new Date().toLocaleString()
        });
        localStorage.setItem("usuariosLogeados", JSON.stringify(usuarios));

        // Salir modo login
        app.classList.remove("app-login");

        // Cargar menú
        cargarMenu();

        // Vista inicial
        mostrarSeccion(Contactos());
    }

    /* =========================
       MENÚ
    ========================= */
    function cargarMenu() {
        nav.innerHTML = "";

        nav.appendChild(Button("Agenda", "agenda", "./assets/icon/user2.svg"));
        nav.appendChild(Button("Favoritos", "favoritos", "./assets/icon/star.svg"));
        nav.appendChild(Button("Crear contacto", "crear-contacto", "./assets/icon/plus.svg"));
        nav.appendChild(Button("ToDoList", "todoList", "./assets/icon/todoList.svg"));
        nav.appendChild(Button("Crear tarea", "crear-tarea", "./assets/icon/agenda.svg"));
        nav.appendChild(Button("Usuarios", "usuarios", "./assets/icon/users.svg"));

        document.getElementById("agenda").onclick = () => mostrarSeccion(Contactos());
        document.getElementById("favoritos").onclick = () => mostrarSeccion(Favoritos());
        document.getElementById("crear-contacto").onclick = () => mostrarSeccion(FormContacto());
        document.getElementById("todoList").onclick = () => mostrarSeccion(ToDoList());
        document.getElementById("crear-tarea").onclick = () => mostrarSeccion(CrearTarea());
        document.getElementById("usuarios").onclick = () => mostrarSeccion(UsuariosLogeados());
    }

    /* =========================
       CAMBIO DE VISTAS
    ========================= */
    function mostrarSeccion(seccion) {
        container.innerHTML = "";
        container.appendChild(seccion);
    }

});
