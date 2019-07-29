import uuidv4 from 'uuid/v4';
import { renderTodos } from './views'
import { getFilters, setFilters } from './filters'
renderTodos();

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    // filters.searchText = e.target.value;
    //lol
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