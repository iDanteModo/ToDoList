import { myToDos } from "../index.js";
// import { updateToDos } from "./js/updateToDos";


export function removeToDo() {
    console.table(myToDos);
    myToDos.forEach(toDo => {
        console.log(toDo.checkList);
    })
}