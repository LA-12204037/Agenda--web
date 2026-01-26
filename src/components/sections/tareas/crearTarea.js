import { guardarTarea, obtenerTarea } from "../localStorage/tareaStorage.js";
import { ToDoList } from "../toDoList/toDoList.js";

function CrearTarea(tarea = null, index = null) {
    const form = document.createElement("form");
    form.className = "form-tarea";

    // 📝 Nombre
    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.required = true;

    // ⚡ Prioridad
    const selectPrioridad = document.createElement("select");

    const optionUrgente = document.createElement("option");
    optionUrgente.value = "Urgente";
    optionUrgente.textContent = "Urgente";

    const optionTiempo = document.createElement("option");
    optionTiempo.value = "Con tiempo";
    optionTiempo.textContent = "Con tiempo";

    selectPrioridad.append(optionUrgente, optionTiempo);

    // 📅 Fecha de vencimiento
    const inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.required = true;

    // 💾 Botón
    const btnGuardar = document.createElement("button");
    btnGuardar.type = "submit";
    btnGuardar.textContent = tarea ? "Actualizar tarea" : "Guardar tarea";

    // 🔄 Si estamos editando → cargar datos
    if (tarea) {
        inputNombre.value = tarea.nombre;
        selectPrioridad.value = tarea.prioridad;
        inputFecha.value = tarea.vencimiento;
    }

    form.append(inputNombre, selectPrioridad, inputFecha, btnGuardar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tareas = obtenerTarea();

        const nuevaTarea = {
            nombre: inputNombre.value,
            prioridad: selectPrioridad.value,
            vencimiento: inputFecha.value
        };

        if (tarea && index !== null) {
            // ✏️ EDITAR
            tareas[index] = nuevaTarea;
        } else {
            // ➕ CREAR
            tareas.push(nuevaTarea);
        }

        guardarTarea(tareas);

        // 🔁 VOLVER A LA LISTA
        const container = document.getElementById("container");
        container.innerHTML = "";
        container.appendChild(ToDoList());
    });

    return form;
}

export { CrearTarea };
