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
           
          Manager.saveTodo();
          
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
        const saveTodo = () => {
            localStorage.setItem("tasks",JSON.stringify(todos))

        }
        const getTodos = () => {
            return todos;
        }
        const loadTodos = () => {
            const stored = localStorage.getItem("tasks");
            todos.length = 0; // clear current array
            if (stored) {
                JSON.parse(stored).forEach(todo => todos.push(todo));
            }
        }
        const getProjects = () =>{
            return projects

        }

       
        const deleteToDo = (id) => {
            const index = todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                todos.splice(index, 1);
            }
            saveTodo();
        }
        const deleteProject = (id) => {
            const index = projects.findIndex(project => project.id === id);
            if (index !== -1) {
                projects.splice(index, 1);
            }
            
        }
        
        
   
        
        return{createToDo,createProject,deleteToDo,deleteProject,saveTodo,getTodos,loadTodos,getProjects}
    
})();



export { Manager };

