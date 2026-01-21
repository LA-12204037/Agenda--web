let viewContacts = function () {
container.innerHTML = "";
container.appendChild(Contactos());
}

let viewNewContact = function () {
container.innerHTML = "";
container.appendChild(NewContactForm());
}

export { viewContacts, viewNewContact };