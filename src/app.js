import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
import {NewContactForm} from "./components/sections/login/newContactForm/NewContactForm.js";

// App
let app = document.getElementById("app");

// section menú
let nav = document.getElementById("nav");
// agregar botones
nav.appendChild(Button(
"Agenda",
"agenda",
"users.svg",
viemContacts
));
nav.appendChild(Button(
"Crear contacto",
"plus",
"plus.svg",
viemNewContact
));

nav.appendChild(Button("ToDoList", "todoList", "list.svg"));
nav.appendChild(Button("Crear tarea", "plus", "plus. svg"));

// section container
let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

//container.appendChild(NewContactForm());

