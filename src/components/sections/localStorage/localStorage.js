const LOCAL_STORAGE_KEY = "agenda_contactos";

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export { saveContactsToStorage, getContactsFromStorage };
