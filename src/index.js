import { renderTodos } from './views'
import { setFilters, getFilters } from './filters'
import { getTodos, createTodo } from './todos';
renderTodos();

document.querySelector('#new-todo').addEventListener('submit', (e) => {

    e.preventDefault();
    createTodo(e);
    renderTodos();

})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })

    renderTodos();
})



document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos();
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