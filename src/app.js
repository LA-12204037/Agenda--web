import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
 import { FormContacto  } from "./components/sections/NewContact.js";
import { ToDoList   } from "./components/sections/toDoList/toDoList.js";
import { CrearTarea   } from "./components/sections/tareas/crearTarea.js";



document.addEventListener("DOMContentLoaded", () => {
    // App
    let app = document.getElementById("app");

    // section menú
    let nav = document.getElementById("nav");

    // Crear botones
    nav.appendChild(Button("Agenda", "agenda", "user.svg.svg"));
    nav.appendChild(Button("Crear contacto", "crear-contacto", "plus.svg"));
    nav.appendChild(Button("ToDoList", "todoList", "todoList.svg"));
    nav.appendChild(Button("Crear tarea", "crear-tarea", "agenda.svg"));

    // Contenedor principal
    let container = document.getElementById("container");
    container.appendChild(Contactos());

    // Función para cambiar secciones
    function mostrarSeccion(seccion) {
        container.innerHTML = "";
        container.appendChild(seccion);
    }

    // Eventos de botones
    document.getElementById("agenda").addEventListener("click", () => {
        mostrarSeccion(Contactos());
    });

    document.getElementById("crear-contacto").addEventListener("click", () => {
        mostrarSeccion(FormContacto());
    });

    document.getElementById("todoList").addEventListener("click", () => {
        mostrarSeccion(ToDoList());
    });

    document.getElementById("crear-tarea").addEventListener("click", () => {
        mostrarSeccion(CrearTarea());
    });
    

});



/*async function tarea() {

  try {
    let data = await fetch ("https://jsonplaceholder.typicode.com/posts");
    let r = await data.json();
    console.log(r);

  } catch (error) {
    console.log(error);

  }
  
}

tarea();

console.log("Comletado");
*/