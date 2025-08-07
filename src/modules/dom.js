import { Manager } from "./manager";
document.addEventListener("DOMContentLoaded", () => {
    Manager.loadProject();
    Manager.loadTodos()
    loadProjects()
    loadTodos()
    handleForm()
    handleProject()
  
    
}) 
const loadTodos = () => {
    
    const todos = Manager.getTodos();   

    const taskList = document.querySelector(".content");

    todos.forEach(todo => {
        const task = document.createElement("div");
        task.classList = "card";
        task.textContent = `${todo.title} - ${todo.description}`;
        taskList.appendChild(task);
    });
}
const handleForm = ()=> {
    const taskForm = document.querySelector("#task-form")

    taskForm.addEventListener('submit', function(e) {
   
   
    e.preventDefault();
    const myForm = new FormData(taskForm);
   
    const title = myForm.get("title")
    const description = myForm.get("description")
    const notes = myForm.get("notes")
    const dueDate = myForm.get("dueDate")
    const priority = myForm.get("priority")
    Manager.createToDo(title,description,notes,dueDate,priority)
    loadTodos();
    taskForm.reset(); // Reset the form after submission
   
});
}


const handleProject = () => {

    const projectForm = document.querySelector("#project-form")
    projectForm.addEventListener('submit',function(e){
    
    e.preventDefault()
    
    const projectData = new FormData(projectForm);


    const projectTitle = projectData.get("project-title")
    const projectDescription = projectData.get("project-description")

    Manager.createProject(projectTitle,projectDescription)
    loadProjects();

    
    projectForm.reset(); // Reset the form after submission
})
}
const loadProjects = () => {
    const projectList = document.querySelector(".project");
    
    const projects = Manager.getProjects();   
    projectList.innerHTML = "";
    projects.forEach(proj => {
        const project = document.createElement("div");
        project.classList = "project-card";
        project.textContent = `${proj.title} - ${proj.description}`;
        projectList.appendChild(project);
    });
}










