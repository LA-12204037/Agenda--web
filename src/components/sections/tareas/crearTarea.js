import { guardarTarea, obtenerTarea } from "../localStorage/tareaStorage.js";


function CrearTarea() {
    const form = document.createElement("form");
    form.className = "form-tarea";

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.required = true;

    const selectPrioridad = document.createElement("select");
    const optionUrgente = document.createElement("option");
    optionUrgente.value = "Urgente";
    optionUrgente.textContent = "Urgente";

    const optionTiempo = document.createElement("option");
    optionTiempo.value = "Con tiempo";
    optionTiempo.textContent = "Con tiempo";

    selectPrioridad.append(optionUrgente, optionTiempo);

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar tarea";
    btnGuardar.type = "submit";

    form.append(inputNombre, selectPrioridad, btnGuardar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tareas = obtenerTarea();

        tareas.push({
            nombre: inputNombre.value,
            prioridad: selectPrioridad.value
        });

        guardarTarea(tareas);

        alert("Tarea guardada ");

        form.reset();
    });

    return form;
}

export { CrearTarea };