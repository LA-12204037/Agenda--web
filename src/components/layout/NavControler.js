import { Contactos } from "../sections/login/Contactos/Contactos.js";
import { NewContactForm } from "../sections/toDoList/NewContact.js";

const getContainer = () => document.getElementById("container");

const viewContacts = () => {
    const container = getContainer();
    container.innerHTML = "";
    container.appendChild(Contactos());
};

const viewNewContact = () => {
    const container = getContainer();
    container.innerHTML = "";
    container.appendChild(NewContactForm());
};

export { viewContacts, viewNewContact };
