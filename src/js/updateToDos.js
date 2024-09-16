import { removeToDo } from "./removeToDos.js";

export function updateToDos(element) {
  const event = new Event("change");
  element.dispatchEvent(event);
  removeToDo();
}
