'use strict';
// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (error) {
        return [];
    }

    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }

}
// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}
//remove a Todo by Id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex >= -1) {
        todos.splice(todoIndex, 1);
    }
}
//Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed
    }

}
// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos');
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

// Get the DOM elements for an individual note
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
        saveTodos(todos);
        renderTodos(todos, filters);

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
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    return element
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.classList.add('list-title');
    const plural = incompleteTodos.length === 1 ? '' : 's';
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;


    return summary
}