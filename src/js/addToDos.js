import { updateToDos } from "./updateToDos.js";
import { myToDos } from "../index.js";
import { projectSelected } from "./projectSelected.js";
import { ToDo } from "./toDoClass.js";

export function addToDo(){
    const projectName = document.querySelector('select');
    const form = document.querySelector('form');
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');
    const checkList = document.querySelector('#checkList');
    const addButton = document.querySelector("#submit");

    addButton.addEventListener("click", () => {
        projectSelected();
        if(form.checkValidity()) {
            event.preventDefault();
            const toDo = new ToDo(projectName.value, title.value, description.value, dueDate.value, priority.value, checkList.value)
            myToDos.push(toDo);
            console.table(myToDos);
            updateToDos(projectName);
        }
    })
}