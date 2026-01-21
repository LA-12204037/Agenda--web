import "./app.css";

// COMPONENTES
import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
import { FormContacto } from "./components/sections/NewContact.js";
import { ToDoList } from "./components/sections/toDoList/toDoList.js";
import { CrearTarea } from "./components/sections/tareas/crearTarea.js";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    root.innerHTML = `
        <main id="app">
            <nav id="nav"></nav>
            <section id="container"></section>
        </main>
    `;

    const nav = document.getElementById("nav");
    const container = document.getElementById("container");

    const btnAgenda = Button("Agenda", "agenda", "./src/assets/icon/user.svg");
    const btnNuevoContacto = Button("Crear contacto", "crear-contacto", "./src/assets/icon/plus.svg");
    const btnTodo = Button("ToDo List", "todo", "./src/assets/icon/todoList.svg");
    const btnCrearTarea = Button("Crear tarea", "crear-tarea", "./src/assets/icon/agenda.svg");

    nav.append(btnAgenda, btnNuevoContacto, btnTodo, btnCrearTarea);

    function mostrar(componente) {
        container.innerHTML = "";
        container.appendChild(componente);
    }

    mostrar(Contactos());

    document.getElementById("agenda").onclick = () => mostrar(Contactos());
    document.getElementById("crear-contacto").onclick = () => mostrar(FormContacto());
    document.getElementById("todo").onclick = () => mostrar(ToDoList());
    document.getElementById("crear-tarea").onclick = () => mostrar(CrearTarea());
});
