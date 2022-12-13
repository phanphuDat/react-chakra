export const getTodoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
