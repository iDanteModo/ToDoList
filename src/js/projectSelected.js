import { myToDos } from "../index.js";
import { updateDOM, resetDOM } from "./updateDOM.js";

export function projectSelected() {
    const projectSelected = document.querySelector("select")
    projectSelected.addEventListener("change", () => {
        resetDOM(".toDos");
        let value = projectSelected.options[projectSelected.selectedIndex].value.toLowerCase();
        let text = projectSelected.options[projectSelected.selectedIndex].text;
        console.log(`Value is ${value}, Text is ${text}`);
        myToDos.forEach((toDo) => {
            const title = document.createElement("p");
            const description = document.createElement('p');
            const dueDate = document.createElement('p');
            const priority = document.createElement('p');
            if(value == toDo.name){
                updateDOM(".toDos", `<h2 data-index = ${toDo.title}>${toDo.title}</h2>`);
                updateDOM(".toDos", `<h2>${toDo.description}</h2>`);
                updateDOM(".toDos", `<h2>${toDo.dueDate}</h2>`);
                updateDOM(".toDos", `<h2>${toDo.priority}</h2>`);
                if (toDo.checkList == "on"){
                    updateDOM(".toDos", `<input type="checkbox" checked>`);
                }else {
                    updateDOM(".toDos", `<input type="checkbox" checked>`);
                }

            }
        })
    })
}