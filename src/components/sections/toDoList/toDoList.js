import { obtenerTarea, guardarTarea } from "../localStorage/tareaStorage.js";
import { CrearTarea } from "../tareas/crearTarea.js";

function ToDoList() {
    const section = document.createElement("section");
    section.className = "todo-list";

    const h2 = document.createElement("h2");
    h2.textContent = "To Do List";
    section.appendChild(h2);

    let tareas = obtenerTarea();

    tareas.forEach((tarea, index) => {
        const div = document.createElement("div");
        div.className = `tarea ${tarea.prioridad === "Urgente" ? "urgente" : "tiempo"}`;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const nombre = document.createElement("strong");
        nombre.textContent = tarea.nombre;

        const fecha = document.createElement("span");
        fecha.textContent = `📅 ${tarea.vencimiento}`;

        const prioridad = document.createElement("span");
        prioridad.textContent = tarea.prioridad;

        // ✏️ EDITAR
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️";
        btnEditar.onclick = () => {
            const container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(CrearTarea(tarea, index));
        };

        // 🗑 BORRAR
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.className = "btn-borrar";
        btnBorrar.disabled = true;

        checkbox.onchange = () => {
            btnBorrar.disabled = !checkbox.checked;
            div.classList.toggle("seleccionada", checkbox.checked);
        };

        btnBorrar.onclick = () => {
            tareas.splice(index, 1);
            guardarTarea(tareas);

            const container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(ToDoList());
        };

        div.append(checkbox, nombre, fecha, prioridad, btnEditar, btnBorrar);
        section.appendChild(div);
    });

    return section;
}

export { ToDoList };
