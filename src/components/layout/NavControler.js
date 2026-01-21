import { Button } from "../common/button/Button.js";
import { Contactos } from "../sections/login/Contactos/Contactos.js";
import { FormContacto } from "../sections/NewContact.js";
import { ToDoList } from "../sections/toDoList/toDoList.js";
import { CrearTarea } from "../sections/tareas/crearTarea.js";

export default function NavController() {
    const app = document.createElement("main");
    app.id = "app";

    const nav = document.createElement("nav");
    nav.id = "nav";

    const container = document.createElement("section");
    container.id = "container";

    nav.append(
        Button("Agenda", "agenda", "user.svg"),
        Button("Nuevo contacto", "crear-contacto", "plus.svg"),
        Button("ToDoList", "todoList", "todoList.svg"),
        Button("Nueva tarea", "crear-tarea", "agenda.svg")
    );

    const render = (view) => {
        container.innerHTML = "";
        container.appendChild(view);
    };

    render(Contactos());

    nav.querySelector("#agenda").onclick = () => render(Contactos());
    nav.querySelector("#crear-contacto").onclick = () => render(FormContacto());
    nav.querySelector("#todoList").onclick = () => render(ToDoList());
    nav.querySelector("#crear-tarea").onclick = () => render(CrearTarea());

    app.append(nav, container);
    return app;
}
