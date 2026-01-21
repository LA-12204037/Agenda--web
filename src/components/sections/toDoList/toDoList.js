import { obtenerTarea , guardarTarea  } from "../localStorage/tareaStorage.js";

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

        const prioridad = document.createElement("span");
        prioridad.textContent = tarea.prioridad;

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.disabled = true;
        btnBorrar.className = "btn-borrar";

        checkbox.addEventListener("change", () => {
            btnBorrar.disabled = !checkbox.checked;
            div.classList.toggle("seleccionada", checkbox.checked);
        });

        btnBorrar.addEventListener("click", () => {
            tareas.splice(index, 1);
            guardarTarea(tareas);

            const container = document.getElementById("container");
            container.appendChild(ToDoList());
        });

        div.append(checkbox, nombre, prioridad, btnBorrar);
        section.appendChild(div);
    });

    return section;
}

export { ToDoList };
