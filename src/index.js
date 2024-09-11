import "./styles/style.css";
import { dateFormat } from "./js/dateformat";
import { localStorage } from "./js/localStorage";
import { projectSelected } from "./js/projectSelected";
import { updateDOM } from "./js/updateDOM";
import { updateToDos } from "./js/updateToDos";
import { addToDo } from "./js/addToDos";
import { ToDo } from "./js/toDoClass";
import { removeToDo } from "./js/removeToDos";

export let myToDos = [];

localStorage();
dateFormat();

const newToDo = new ToDo("Dante", "do the dishes", "Description", "12.09", "TOP", "off");
const newToDo2 = new ToDo("Christina", "do the laundry", "Description2", "12.09", "TOP", "off");
myToDos.push(newToDo);
myToDos.push(newToDo2);
newToDo.displayToDo();


projectSelected();
addToDo();
removeToDo();




