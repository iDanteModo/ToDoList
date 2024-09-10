import { myToDos } from "../index.js";
import { updateDOM, resetDOM } from "./updateDOM.js";

export function updateToDos(element) {
    const event = new Event('change');
    element.dispatchEvent(event);
}