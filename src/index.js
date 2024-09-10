import "./styles/style.css";
import { dateFormat } from "./js/dateformat";
import { localStorage } from "./js/localStorage";
import { projectSelected } from "./js/projectSelected";
import { updateDOM } from "./js/updateDOM";

export let myToDos = [];

localStorage();
dateFormat();

class ToDo {
    constructor(title, description, dueDate, priority, checkList){
        this.title = title.toLowerCase();
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
    }
    displayToDo() {
        console.log(this.title, this.description, this.dueDate, this.priority, this.checkList);
    }
}

const newToDo = new ToDo("Dante", "Description", "12.09", "TOP", true);
const newToDo2 = new ToDo("Christina", "Description2", "12.09", "TOP", false);
myToDos.push(newToDo);
myToDos.push(newToDo2);
newToDo.displayToDo();


function addToDo(){
    const form = document.querySelector('form');
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');
    const checkList = document.querySelector('#checkList');
    const addButton = document.querySelector("#submit");

    addButton.addEventListener("click", () => {
        if(form.checkValidity()) {
            event.preventDefault();
        }
        const toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, checkList.value)
        myToDos.push(toDo);
        console.table(myToDos);
    })
}

projectSelected();
addToDo();
