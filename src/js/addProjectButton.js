import { myToDos } from "../index";

export function addProject() {
    const projects = document.querySelector("select")
    const addButton = document.querySelector('#addProjectsButton');
    const modal  = document.querySelector('#modal');
    const submitProject = document.querySelector('#submitProject');
    const newProjectName = document.querySelector('#newProjectName');


    addButton.addEventListener('click', () => {
        modal.classList.remove("modal-close");
        modal.classList.add('modal-open');
    })

    submitProject.addEventListener('click', () => {
        const newProject = document.createElement('option');
        newProject.value = newProjectName.value;
        newProject.text = newProjectName.value;
        projects.appendChild(newProject);
        modal.classList.remove('modal-open');
        modal.classList.add('modal-close');
        newProjectName.value = "";
        
    })
}
