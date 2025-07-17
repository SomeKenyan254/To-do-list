console.log('This is a test log for the dom module');

import { Manager } from './manager.js';
const todo = Manager.createToDo('Buy groceries','Research summer destinations', '2025-07-15' );
const todo1 = Manager.createToDo('Buy groceries','Research summer destinations', '2025-07-15');
const project1 = Manager.createProject("Finish web-dev","It sucks");

// Log the created ToDo and Project to verify functionality
console.log('Created ToDo:', todo);
console.log('Created ToDo 1:', todo1);
console.log('Created Project:', project1);
console.log('ToDos:', Manager.getToDos());
console.log('Projects:', Manager.getProjects());

//Dom related
const render


