export function priorityColor() {
  const priorities = document.querySelectorAll("h2");
  priorities.forEach((priority) => {
    if (priority.dataset.index == "P1") {
      priority.style.color = "rgb(240, 194, 93)";
      priority.style.fontWeight = "800";
      priority.style.fontFamily = "Rust Base2Line";
    } else if (priority.dataset.index == "P2") {
      priority.style.color = "rgb(255, 160, 0)";
      priority.style.fontWeight = "800";
      priority.style.fontFamily = "Rust Base2Line";
    } else if (priority.dataset.index == "P3") {
      priority.style.color = "rgb(255, 99, 71)";
      priority.style.fontWeight = "800";
      priority.style.fontFamily = "Rust Base2Line";
    } else if (priority.dataset.index == "P4") {
      priority.style.color = "rgb(220, 20, 60)";
      priority.style.fontWeight = "800";
      priority.style.fontFamily = "Rust Base2Line";
    } else if (priority.dataset.index == "P5") {
      priority.style.color = "rgb(0, 0, 0)";
      priority.style.fontWeight = "800";
      priority.style.fontFamily = "Rust Base2Line";
    }
  });
}
