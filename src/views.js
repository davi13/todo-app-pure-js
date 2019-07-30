import { getTodos, toggleTodo, removeTodo } from './todos';
import { getFilters, setFilters } from "./filters";


// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todoEl = document.querySelector('#todos');
    const filters = getFilters();
    const filteredTodos = getTodos().filter((todo) => {
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
    const element = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkBox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    //Setup todo checkbox
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = todo.completed;
    containerEl.appendChild(checkBox);
    checkBox.addEventListener('change', () => {
        toggleTodo(todo.id);
        renderTodos();

    })

    //Setup todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText);
    //Setup conatiner
    element.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    element.appendChild(containerEl);

    //Setup todo button
    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text')
    element.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        renderTodos();
    })
    return element
}
// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2');
    summary.classList.add('list-title');
    const plural = incompletedTodos.length === 1 ? '' : 's';
    summary.textContent = `You have ${incompletedTodos.length} todo${plural} left`;
    return summary

}
// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM };