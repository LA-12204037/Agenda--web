let TodoList = () => {
  let section = document.createElement("section");
  section.className = "todolist";

  // Título
  let h2 = document.createElement("h2");
  h2.textContent = "📝 To Do List";

  // Contenedor input
  let inputContainer = document.createElement("div");
  inputContainer.className = "todo-input-container";

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Nueva tarea...";
  input.className = "todo-input";

  let button = document.createElement("button");
  button.textContent = "Agregar";
  button.className = "todo-button";

  inputContainer.appendChild(input);
  inputContainer.appendChild(button);

  // Lista
  let ul = document.createElement("ul");
  ul.className = "todo-list";

  // Evento agregar tarea
  button.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    let li = document.createElement("li");
    li.className = "todo-item";

    let span = document.createElement("span");
    span.textContent = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-task";

    // Completar tarea
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Eliminar tarea
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = "";
  });

  section.appendChild(h2);
  section.appendChild(inputContainer);
  section.appendChild(ul);

  return section;
};

export { TodoList };
