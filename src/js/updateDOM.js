// export function updateDOM (selector, content) {
//         const element = document.querySelector(selector);
//         if (element) {
//         element.innerHTML += content;
//     }
// }


export function resetDOM (selector) {
    const element = document.querySelector(selector);
    if (element) {
    element.innerHTML = "";
}
}

export function updateDOM(selector, content) {
    const element = document.querySelector(selector);
    if(element) {
        const newElement = document.createElement('div');
        newElement.innerHTML = content;
        element.appendChild(newElement)
    }
}