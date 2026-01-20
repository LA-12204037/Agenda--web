import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
import { TodoList } from "./components/sections/login/TodoList/TodoList.js";
import { login } from "./components/sections/login/login.js";

const nav = document.getElementById("nav");
const container = document.getElementById("container");

const clearContainer = () => {
  container.innerHTML = "";
};

// Botones
const btnAgenda = Button("Agenda", "agenda", "user.svg");
const btnTodo = Button("To Do List", "todoList", "todoList.svg");
const btnLogin = Button("Login", "login", "agenda.svg");

nav.appendChild(btnAgenda);
nav.appendChild(btnTodo);
nav.appendChild(btnLogin);

// Eventos
btnAgenda.addEventListener("click", () => {
  clearContainer();
  container.appendChild(Contactos());
});

btnTodo.addEventListener("click", () => {
  clearContainer();
  container.appendChild(TodoList());
});

btnLogin.addEventListener("click", () => {
  clearContainer();
  container.appendChild(login());
});

// Vista inicial
container.appendChild(login());
