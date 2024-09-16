import { myToDos } from "../index.js";
import { updateDOM, resetDOM } from "./updateDOM.js";
import { priorityColor } from "./priorityColor.js";
import { removeToDo } from "./removeToDos.js";

export function projectSelected() {
    const projectSelected = document.querySelector("select")
    projectSelected.addEventListener("change", () => {
        resetDOM(".toDos");
        let value = projectSelected.options[projectSelected.selectedIndex].value.toLowerCase();
        let text = projectSelected.options[projectSelected.selectedIndex].text;
        console.log(`Value is ${value}, Text is ${text}`);
        myToDos.forEach((toDo) => {
            const checkBox = document.createElement('input');
            const toDoList = document.querySelector('.toDos');
            checkBox.type = "checkbox";
            checkBox.classList.add('task');
            checkBox.checked = false;
            if(value == toDo.name){
                updateDOM(".toDos", `<h2 data-index = ${toDo.title}>${toDo.title}</h2>`);
                updateDOM(".toDos", `<h2>${toDo.description}</h2>`);
                updateDOM(".toDos", `<h2>${toDo.dueDate}</h2>`);
                updateDOM(".toDos", `<h2 data-index = P${toDo.priority}>${toDo.priority}</h2>`);
                toDoList.appendChild(checkBox); 
                checkBox.addEventListener("change", () => {
                    if (toDo.checkList == "off"){
                        toDo.checkList =  "on";
                        checkBox.checked = true;
                    }else if (toDo.checkList == "on"){
                        toDo.checkList = "off";
                        checkBox.checked = false;
                    }
                })           
                priorityColor();
                removeToDo();
            }
        })
    })
}