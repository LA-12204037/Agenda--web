// Clave para almacenar contactos en LocalStorage
const LOCAL_STORAGE_KEY = 'agenda_telefonica';

/**
 * Guarda la lista de contactos en LocalStorage
 * @param {Array} contactos
 */
function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

/**
 * Obtiene la lista de contactos desde LocalStorage
 * @returns {Array} Lista de contactos o array vacío
 */
function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export { LOCAL_STORAGE_KEY, saveContactsToStorage, getContactsFromStorage };
