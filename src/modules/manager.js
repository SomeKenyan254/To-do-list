const Manager = ( () =>{
    let idCounter = 0;
    const todos =[];
    const projects = [];
    const createToDo = (title, description = "", notes = "", dueDate = null, priority = "high") => {
        const todo =
        {
            id: ++idCounter,
             title,
             description,
             notes,
           dueDate,
           priority,
            completed: false,
            createdAt: new Date()
          };
          
          todos.push(todo)
          return todo
        }
       
        const createProject = (title, description = "") => {
        const project = {
            id: ++idCounter,
            title,
             description,
        }
        projects.push(project)
         return project

        }
        const deleteToDo = (id) => {
            const index = todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                todos.splice(index, 1);
            }
        }
        const deleteProject = (id) => {
            const index = projects.findIndex(project => project.id === id);
            if (index !== -1) {
                projects.splice(index, 1);
            }
        }
        
   
        
        return{createToDo,createProject,deleteToDo,deleteProject,todos}
    
})();
const todo = Manager.createToDo('Buy groceries','Research summer destinations', '2025-07-15' );
const todo1 = Manager.createToDo('Start to-do project','Understand Dom & Css & Js', '2025-07-15');
const project1 = Manager.createProject("Finish web-dev","It sucks");


// Log the created ToDo and Project to verify functionality
console.log('Created ToDo:', todo);
console.log('Created ToDo 1:', todo1);
console.log('Created Project:', project1);





export { Manager };

