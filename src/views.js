import { getFilters, setFilters } from "./filters";

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todoEl = document.querySelector('#todos');
    const filters = getFilters();
    const todos = setFilters();
    console.log(todos);
    debugger;
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })



    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo));

        })
    } else {
        const messageEl = document.createElement('p');
        messageEl.classList.add('empty-message');
        messageEl.textContent = 'No to-do To show'
        todoEl.appendChild(messageEl);
    }

}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
    return todo
}
// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompletedTodos) => {

}
// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM };