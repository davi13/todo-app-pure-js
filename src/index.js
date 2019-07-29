import uuid from 'uuid/v4';
import { renderTodos } from './views'
renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    let text = e.target.elements.text.value.trim();
    e.preventDefault();

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        });
        saveTodos(todos)
        renderTodos(todos, filters);
        e.target.elements.text.value = '';
    }




})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})


// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage