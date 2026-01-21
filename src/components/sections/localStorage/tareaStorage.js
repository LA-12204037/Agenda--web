
const TODO_STORAGE_KEY = "todo_list";

function guardarTarea(tasks) {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks));
}

function obtenerTarea() {
    return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
}

export { guardarTarea, obtenerTarea };