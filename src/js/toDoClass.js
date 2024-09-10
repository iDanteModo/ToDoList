export class ToDo {
    constructor(name, title, description, dueDate, priority, checkList){
        this.name = name.toLowerCase();
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