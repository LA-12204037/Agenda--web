const TODO_STORAGE_KEY = "todo_list";

function guardarTarea(tareas) {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tareas));
}

function obtenerTarea() {
    return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
}

export { guardarTarea, obtenerTarea };
