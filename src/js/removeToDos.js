import { myToDos } from "../index.js";
import { addToDo } from "./addToDos.js";
import { updateToDos } from "./updateToDos.js";


export function removeToDo() {
     const tasks  = document.querySelectorAll('.task');
     const projectName = document.querySelector('select');
     tasks.forEach(task => {
        task.addEventListener("change", () => {
            if(myToDos.length > 0) {
                let taskIndex = myToDos.findIndex(toDo => toDo.checkList == "on");
                if (taskIndex != -1 ){
                   myToDos.splice(taskIndex, 1);
                }
                console.table(myToDos);
                updateToDos(projectName);
            }
        }
        )
     })
     }
