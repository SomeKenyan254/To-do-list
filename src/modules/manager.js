const Manager = (function (){
    let idCounter = 0;
    const todos =[];
    const projects = [];

    

        function createToDo(title, description = "", dueDate = null, notes = '', checklist = [],priority = "medium"){
        const todo =
        {
            id: ++idCounter,
            title: title,
            description: description,
            notes: notes,
            dueDate: dueDate,
            checklist: checklist,
            priority:priority,
            completed: false,
            createdAt: new Date()
          };
          
          todos.push(todo)
          return todo
        }
       
        function createProject(title, description = "",priority = "high"){
        const project = {
            id: ++idCounter,
            title:title,
            description: description,
            priority: priority
        }
        projects.push(project)
         return project

        }
        function getToDos() {
            return [...todos];
        }  
        function getProjects() {
            return [...projects];
        }
        return{createToDo,createProject,getToDos,getProjects}
    
})();

export { Manager };



