import { contactosIniciales } from "../login/Contactos/contactosIniciales.js";

const LOCAL_STORAGE_KEY = "agenda_telefonica";

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!data) {
        // 🔥 clonamos para evitar modificar el original
        const copiaInicial = [...contactosIniciales];

        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify(copiaInicial)
        );

        return copiaInicial;
    }

    return JSON.parse(data);
}

export { LOCAL_STORAGE_KEY, saveContactsToStorage, getContactsFromStorage };
