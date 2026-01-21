import "./crearTarea.css";
import { obtenerTarea, guardarTarea } from "../localStorage/tareaStorage.js";

function CrearTarea() {
    const div = document.createElement("div");

    const input = document.createElement("input");
    const btn = document.createElement("button");
    btn.textContent = "Agregar";

    btn.onclick = () => {
        const tareas = obtenerTarea();
        tareas.push(input.value);
        guardarTarea(tareas);
        input.value = "";
    };

    div.append(input, btn);
    return div;
}

export { CrearTarea };
