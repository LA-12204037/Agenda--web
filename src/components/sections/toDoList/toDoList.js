import "./toDoList.css";
import { obtenerTarea, guardarTarea } from "../localStorage/tareaStorage.js";

function ToDoList() {
    const div = document.createElement("div");
    div.className = "todo";

    const tareas = obtenerTarea();

    tareas.forEach(t => {
        const p = document.createElement("p");
        p.textContent = t;
        div.appendChild(p);
    });

    return div;
}

export { ToDoList };
